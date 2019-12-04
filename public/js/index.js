const fs = require('fs');


function saveNoteName() {

    $('#notename-btn').click(function () {
        const notename = $('#notename').val();
        console.log(notename);
    });
}


function saveNoteContent() {

    $('#savenote').click(function() {
        const noteContent = $('#notepad').val();
        console.log(noteContent);
    });

}