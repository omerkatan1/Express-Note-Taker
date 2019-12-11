const fs = require('fs');


// write file
fs.writeFile('savedNotes.json', function(err) {
    if (err) throw err;
    console.log('success! created saved user note file!');
});

// append file
fs.appendFile('savedNotes.json', JSON.stringify(savedNote, null, '\t'), function(err) {
    if (err) throw err;
    console.log('success! appended note!');
});