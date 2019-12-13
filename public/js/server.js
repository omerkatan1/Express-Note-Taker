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
    // res.json(req.body);
    console.log(req.body);
    res.json(req.body);
    // fs.appendFile("savedNotes.json", res.json(req.body), function(err) {
    //     if (err) throw err;

    //     console.log('Saved to json file');

    const dataArray = [];

    fs.readFile('savedNotes.json', 'utf8', (err, data) => {
        if (err) throw err;

        console.log(data);
        console.log('read json file');


        // const obj = JSON.parse(data);
        console.log(data);
        // for(var i = 0; i <= data.length; i++) {
        //     dataArray.push(data[i]);
        // }
        dataArray.push(JSON.stringify(data));

        // fs.writeFile('savedNotes.json', JSON.stringify(req.body, null, '\t'), err => {
        //     if (err) throw err;

        //     console.log('updated db')
        // });
        console.log(dataArray);
        fs.writeFile('savedNotes.json', JSON.stringify(dataArray, null, '\t'), err => {
            if (err) throw err;

            console.log('updated db')
        });
    });
});




app.listen(PORT);

