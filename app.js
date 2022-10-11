// When a key is pressed, the associated sound is played
// > When a button is clicked, the associated sound is played
const boom = document.getElementById("boom"); 
const clap = document.getElementById("clap");
const hithat = document.getElementById("hithat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");
const pad1 = document.getElementById('pad1');
const pad2 = document.getElementById('pad2');
const pad3 = document.getElementById('pad3');
const pad4 = document.getElementById('pad4');
const pad5 = document.getElementById('pad5');
const pad6 = document.getElementById('pad6');
const pad7 = document.getElementById('pad7');
const pad8 = document.getElementById('pad8');
const pad9 = document.getElementById('pad9');

document.addEventListener('keypress', function(event){
    if (event.key == 'a' ) {
        boom.pause();
        boom.currentTime= 0;
        boom.play();
        pad1.style.animation = "lightUp 100ms";
        setTimeout(() => {
        pad1.style.animation = "";
        }, 100);
        console.log("a pressed")
    }
    if (event.key == 's' ) {
        clap.play()
        pad2.style.animation = "lightUp 2s";
        setTimeout(() => {
        pad2.style.animation = "";
        }, 1000);
        console.log("s pressed")
    }
    if (event.key == 'd' ) {
        hithat.play()
        pad3.style.backgroundColor = "black";
        console.log("d pressed")
    }
    if (event.key == 'f' ) {
        kick.play()
        pad4.style.backgroundColor = "black";
        console.log("f pressed")
    }
    if (event.key == 'g' ) {
        openhat.play()
        pad5.style.backgroundColor = "black";
        console.log("g pressed")
    }
    if (event.key == 'h' ) {
        ride.play()
        pad6.style.backgroundColor = "black";
        console.log("h pressed")
    }
    if (event.key == 'j' ) {
        snare.play()
        pad7.style.backgroundColor = "black";
        console.log("j pressed")
    }
    if (event.key == 'k' ) {
        tink.play()
        pad8.style.backgroundColor = "black";
        console.log("k pressed")
    }
    if (event.key == 'l' ) {
        tom.play()
        pad9.style.backgroundColor = "black";
        console.log("l pressed")
    }
})

// function playAudio() { 
//     boom.play();
//     clap.play();
//     hithat.play();
//     kick.play();
//     openhat.play();
//     ride.play();
//     snare.play();
//     tink.play();
//     tom.play(); 
//   } 

