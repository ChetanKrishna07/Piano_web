const notes = document.querySelectorAll(".note");

notes.forEach(key => {
    key.addEventListener('click', function () {
        console.log('click')
        var note = key.id;
        playNote(note);
    });
});

function playNote(note) {
    console.log(note)
    audio = new Audio("notes/" + note + ".mp3");
    audio.play();
}