/**
 * MorleyDB — Embedded Document Database
 * Copyright (c) 2026 Morley Moses Apooch. All Rights Reserved.
 */
const fs = require('fs');
const path = require('path');

class MorleyDB {
    constructor(dataDir = './data') {
        this.dataDir = path.resolve(dataDir);
        if (!fs.existsSync(this.dataDir)) {
            fs.mkdirSync(this.dataDir, { recursive: true });
        }
    }

    _getCollectionPath(collection) {
        return path.join(this.dataDir, `${collection}.json`);
    }

    loadCollection(collection) {
        const filePath = this._getCollectionPath(collection);
        if (!fs.existsSync(filePath)) return [];
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } catch (e) {
            return [];
        }
    }

    saveCollection(collection, docs) {
        const filePath = this._getCollectionPath(collection);
        fs.writeFileSync(filePath, JSON.stringify(docs, null, 2), 'utf8');
    }

    insert(collection, doc) {
        const docs = this.loadCollection(collection);
        const newDoc = { id: 'doc_' + Date.now() + '_' + Math.floor(Math.random()*1000), ...doc, createdAt: new Date().toISOString() };
        docs.push(newDoc);
        this.saveCollection(collection, docs);
        return newDoc;
    }

    findAll(collection) {
        return this.loadCollection(collection);
    }

    remove(collection, id) {
        let docs = this.loadCollection(collection);
        const initialLength = docs.length;
        docs = docs.filter(d => d.id !== id);
        this.saveCollection(collection, docs);
        return docs.length < initialLength;
    }
}

module.exports = MorleyDB;