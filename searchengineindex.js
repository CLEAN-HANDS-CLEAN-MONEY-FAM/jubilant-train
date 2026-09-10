/**
 * MorleySearch — Inverted Index & TF-IDF Ranking
 * Copyright (c) 2026 Morley Moses Apooch. All Rights Reserved.
 */
class MorleySearch {
    constructor() {
        this.index = new Map(); // term -> { docId: frequency }
        this.documents = new Map(); // docId -> document object
        this.stopWords = new Set(['the', 'is', 'at', 'of', 'and', 'a', 'to', 'in', 'it', 'with', 'for']);
    }

    tokenize(text) {
        if (!text) return [];
        return text.toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/g, ' ')
            .split(/\s+/)
            .filter(token => token.length > 1 && !this.stopWords.has(token));
    }

    indexDocument(doc) {
        this.documents.set(doc.id, doc);
        const text = `${doc.title || ''} ${doc.content || ''}`;
        const tokens = this.tokenize(text);
        
        const termFreqs = {};
        for (const token of tokens) {
            termFreqs[token] = (termFreqs[token] || 0) + 1;
        }

        for (const [term, freq] of Object.entries(termFreqs)) {
            if (!this.index.has(term)) {
                this.index.set(term, {});
            }
            this.index.get(term)[doc.id] = freq;
        }
    }

    search(query, limit = 10) {
        const queryTerms = this.tokenize(query);
        if (queryTerms.length === 0 || this.documents.size === 0) return [];

        const scores = {};
        const N = this.documents.size;

        for (const term of queryTerms) {
            const postings = this.index.get(term);
            if (!postings) continue;

            const df = Object.keys(postings).length;
            const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));

            for (const [docId, tf] of Object.entries(postings)) {
                const score = tf * idf;
                scores[docId] = (scores[docId] || 0) + score;
            }
        }

        return Object.entries(scores)
            .map(([docId, score]) => ({ doc: this.documents.get(docId), score }))
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(item => item.doc);
    }
}

module.exports = MorleySearch;