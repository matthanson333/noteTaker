// Dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");

// Express

const app = express();
const PORT = 3000;

// Express/Data Parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let notes = [];

// Routes

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.hrml"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html");)
});

// API Routes

app.get("/api/notes", function(req, res) {
    return fs.readFile("/db.json", function() {
        // do i need to parse to json? res.json
        // or is it res.sendFile(path.join(__dirname, "db.json"))
    })
})

app.post("/api/notes", function(req, res)) {
    const newNote = req.body;
    notes = [...notes, newNote];
    console.log(notes);
    res.json(notes);
});

app.delete("/api/notes/:id", function (req, res) {
    
})