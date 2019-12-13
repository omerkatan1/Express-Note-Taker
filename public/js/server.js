const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('../../public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/savedNotes", function (req, res) {


    fs.appendFile("savedNotes.JSON", JSON.parse(res.body), function (err) {
        if (err) throw err;

        console.log('Saved to json file');
    });

});

app.post("/api/savedNotes", function (req, res) {
// TODO: receive data and create reservation
res.json(req.body);
// fs.appendFile("savedNotes.json", res.json(req.body), function(err) {
//     if (err) throw err;

//     console.log('Saved to json file');
// });
});



app.listen(PORT);

