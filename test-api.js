const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.json({text: 'Hello, world'})
});

app.get('/test', (req, res) => {
    res.json({text: 'Hello this a test from the world'})
});


app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
