// Require express
const express = require('express');
const path = require('path');
const app = express();
const dbData = require("./db/db.json");
// Extend port to read stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

// Set port
const PORT = process.env.PORT || 3001;


app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, "public/index.html"))

);

app.get('/api/db', (req, res) => res.json(dbData));

app.post('/api/db', (req, res) => {
    console.info(`${req.method} request made.`)

    const {noteTitle, noteText} = req.body;

    if (noteTitle && noteText) {
        const newNote = {
            noteTitle,
            noteText,
        };
        const noteString = JSON.stringify(newNote);

        fs.writeFile(`./db/${newNote.noteTitle}.json`, noteString, (err) => 
        err
        ? console.log(err)
        : console.log(`Review for ${newNote.noteTitle} was not able to be written to file.`)
    
    )
    }



});

app.listen(PORT, () => 
    console.log(`Listening on port ${PORT}`)
);

// THE LINK FOR LOCAL PORT IS http://localhost:3001