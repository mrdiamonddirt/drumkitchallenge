// When a key is pressed, the associated sound is played
// > When a button is clicked, the associated sound is played
var boom = document.getElementById("boom"); 
var clap = document.getElementById("clap");

document.addEventListener('keypress', function(event){
    if (event.key == 'e' ) {
        boom.play()
        console.log("e pressed")
    }
    if (event.key == 'f' ) {
        clap.play()
        console.log("f pressed")
    }
})

function playAudioBoom() { 
    boom.play();
    clap.play(); 
  } 

