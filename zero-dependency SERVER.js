/**
 * Morley Search Engine REST Server
 * Copyright (c) 2026 Morley Moses Apooch. All Rights Reserved.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const MorleyDB = require('./db');
const MorleySearch = require('./search-engine');

const PORT = process.env.PORT || 8080;
const db = new MorleyDB();
const searchEngine = new MorleySearch();

// Hydrate search index from persistent DB on startup
const existingDocs = db.findAll('documents');
existingDocs.forEach(doc => searchEngine.indexDocument(doc));

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // API: Health Status
    if (pathname === '/api/health' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'healthy', author: 'Morley Moses Apooch', documentsCount: existingDocs.length }));
        return;
    }

    // API: List & Create Documents
    if (pathname === '/api/documents') {
        if (req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(db.findAll('documents')));
            return;
        }
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
                try {
                    const data = JSON.parse(body);
                    if (!data.title || !data.content) {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Title and content are required' }));
                        return;
                    }
                    const newDoc = db.insert('documents', data);
                    searchEngine.indexDocument(newDoc);
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(newDoc));
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
                }
            });
            return;
        }
    }

    // API: Search
    if (pathname === '/api/search' && req.method === 'GET') {
        const query = parsedUrl.searchParams.get('q') || '';
        const limit = parseInt(parsedUrl.searchParams.get('limit') || '10', 10);
        const results = searchEngine.search(query, limit);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
        return;
    }

    // Serve Frontend
    let filePath = path.join(__dirname, '../frontend/index.html');
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Morley Search Engine running at http://localhost:${PORT}`);
});