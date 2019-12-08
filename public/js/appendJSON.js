const fs = require('fs');


function createJSON() {
    fs.writeFile('savedNotes.json', JSON.stringify('test', null, '\t'), function(err) {
        if (err) throw err;
        console.log('success! created saved notes JSON file!');
    });
}