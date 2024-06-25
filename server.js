// Require express
const express = require('express');
const path = require('path');
const app = express();
// Extend port to read stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

// Set port
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => res.send("Empty directory"));

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.listen(PORT, () => 
    console.log(`Listening on port ${PORT}`)
);

// THE LINK FOR LOCAL PORT IS http://localhost:3001