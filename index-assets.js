const fs = require('fs');
const path = require('path');
const http = require('http');
// Configuration
const API_URL = 'http://localhost:8080/api/documents';
const EXCLUDE_DIRS = ['.git', '.github', 'data', 'node_modules'];
const ALLOWED_EXTENSIONS = ['.md', '.txt', '.html', '.js', '.json', '.yaml', '.xml'];
// Helper to send files to the Morley Search Engine API
function indexDocument(title, content, relativePath) {
    const postData = JSON.stringify({
        title: title,
        content: content,
        url: `https://github.com{relativePath}`
    });
    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/api/documents',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };
    const req = http.request(options, (res) => {
        if (res.statusCode === 200 || res.statusCode === 201) {
            console.log(`✅ Indexed: ${relativePath}`);
        } else {
            console.error(`❌ Failed to index ${relativePath}: Status ${res.statusCode}`);
        }
    });
    req.on('error', (e) => {
        console.error(`⚠️ Error connecting to server for ${relativePath}: ${e.message}`);
    });
    req.write(postData);
    req.end();
}
// Recursively scan directories for assets
function scanDirectory(dir, basePath = dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const relativePath = path.relative(basePath, fullPath).replace(/\\/g, '/');
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (!EXCLUDE_DIRS.includes(file)) {
                scanDirectory(fullPath, basePath);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (ALLOWED_EXTENSIONS.includes(ext)) {
                try {
                    const content = fs.readFileSync(fullPath, 'utf8');
                    // Index file title and text content
                    indexDocument(file, content, relativePath);
                } catch (err) {
                    console.error(`Could not read file ${relativePath}: ${err.message}`);
                }
            }
        }
    });
}
// Start scanning from the root of the project
const projectRoot = path.join(__dirname, '..');
console.log('🚀 Starting asset indexing into Morley Search Engine...');
scanDirectory(projectRoot);
