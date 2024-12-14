const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, My World!');
});

app.get('/api/data', (req, res) => {
    res.status(200).json({ data: 'This is some data' });
});

app.post('/api/data', (req, res) => {
    const { item } = req.body;
    if (!item) {
        return res.status(400).json({ error: 'Item is required' });
    }
    res.status(201).json({ message: 'Data added', item });
});

module.exports = app;
