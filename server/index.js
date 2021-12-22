const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => {
    res.send('This shit works');
})

const PORT = process.env.PORT || 4000;

app.listen(4000);

