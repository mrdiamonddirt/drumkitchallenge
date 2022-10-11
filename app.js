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
const pad1 = document.getElementById("pad1");
const pad2 = document.getElementById("pad2");
const pad3 = document.getElementById("pad3");
const pad4 = document.getElementById("pad4");
const pad5 = document.getElementById("pad5");
const pad6 = document.getElementById("pad6");
const pad7 = document.getElementById("pad7");
const pad8 = document.getElementById("pad8");
const pad9 = document.getElementById("pad9");

pad1.addEventListener("click", function () {
    playPad1sound(); 
});
pad2.addEventListener("click", function () {
    playPad2sound(); 
});
pad3.addEventListener("click", function () {
    playPad3sound(); 
});
pad4.addEventListener("click", function () {
    playPad4sound(); 
});
pad5.addEventListener("click", function () {
    playPad5sound(); 
});
pad6.addEventListener("click", function () {
    playPad6sound(); 
});
pad7.addEventListener("click", function () {
    playPad7sound(); 
});
pad8.addEventListener("click", function () {
    playPad8sound(); 
});
pad9.addEventListener("click", function () {
    playPad9sound(); 
});

document.addEventListener("keypress", function (event) {
  if (event.key == "a") {
    playPad1sound();
  }
  if (event.key == "s") {
    playPad2sound();
  }
  if (event.key == "d") {
    playPad3sound();
  }
  if (event.key == "f") {
    playPad4sound();
  }
  if (event.key == "g") {
    playPad5sound();
  }
  if (event.key == "h") {
    playPad6sound();
  }
  if (event.key == "j") {
    playPad7sound();
  }
  if (event.key == "k") {
    playPad8sound();
  }
  if (event.key == "l") {
    playPad9sound();
  }
});
// play sound and animate functions
function playPad1sound() {
  boom.pause();
  boom.currentTime = 0;
  boom.play();
  pad1.style.animation = "lightUp 500ms";
  setTimeout(() => {
    pad1.style.animation = "";
  }, 500);
  console.log("a pressed");
}
function playPad2sound() {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
    pad2.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad2.style.animation = "";
    }, 100);
    console.log("s pressed");
  }
  function playPad3sound() {
    hithat.pause();
    hithat.currentTime = 0;
    hithat.play();
    pad3.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad3.style.animation = "";
    }, 100);
    console.log("d pressed");
  }
  function playPad4sound() {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
    pad4.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad4.style.animation = "";
    }, 100);
    console.log("f pressed");
  }
  function playPad5sound() {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
    pad5.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad5.style.animation = "";
    }, 100);
    console.log("g pressed");
  }
  function playPad6sound() {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
    pad6.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad6.style.animation = "";
    }, 100);
    console.log("h pressed");
  }
  function playPad7sound() {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
    pad7.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad7.style.animation = "";
    }, 100);
    console.log("j pressed");
  }
  function playPad8sound() {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
    pad8.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad8.style.animation = "";
    }, 100);
    console.log("k pressed");
  }
  function playPad9sound() {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
    pad9.style.animation = "lightUp 100ms";
    setTimeout(() => {
      pad9.style.animation = "";
    }, 100);
    console.log("l pressed");
  }
