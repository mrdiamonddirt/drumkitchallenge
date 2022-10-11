// When a key is pressed, the associated sound is played
// > When a button is clicked, the associated sound is played
var boom = document.getElementById("boom"); 
var clap = document.getElementById("clap");
var hithat = document.getElementById("hithat");
var kick = document.getElementById("kick");
var openhat = document.getElementById("openhat");
var ride = document.getElementById("ride");
var snare = document.getElementById("snare");
var tink = document.getElementById("tink");
var tom = document.getElementById("tom");


document.addEventListener('keypress', function(event){
    if (event.key == 'a' ) {
        boom.play()
        console.log("a pressed")
    }
    if (event.key == 's' ) {
        clap.play()
        console.log("s pressed")
    }
    if (event.key == 'd' ) {
        hithat.play()
        console.log("d pressed")
    }
    if (event.key == 'f' ) {
        kick.play()
        console.log("f pressed")
    }
    if (event.key == 'g' ) {
        openhat.play()
        console.log("g pressed")
    }
    if (event.key == 'h' ) {
        ride.play()
        console.log("h pressed")
    }
    if (event.key == 'j' ) {
        snare.play()
        console.log("j pressed")
    }
    if (event.key == 'k' ) {
        tink.play()
        console.log("k pressed")
    }
    if (event.key == 'l' ) {
        tom.play()
        console.log("l pressed")
    }
})

function playAudioBoom() { 
    boom.play();
    clap.play();
    hithat.play();
    kick.play();
    openhat.play();
    ride.play();
    snare.play();
    tink.play();
    tom.play(); 
  } 

