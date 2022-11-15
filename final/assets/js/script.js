//Door//
document.getElementById("door").onclick = door;

function door(){
  if (document.getElementById("condition").innerHTML % 3 == 0) {
    alert("You shrink and get throught under the door.");
    location.replace("TrueEnd.html");
  } else if (document.getElementById("condition").innerHTML % 2 == 0){
    alert("Screwing up by using a screwdriver to open the door...");
  } else{
    alert("Cannot open.");
  }
}

var doorsound = new Audio();
doorsound.src ="assets/sound/door.mp3";
//www.fesliyanstudios.co//

//Light//
document.getElementById("light-button").onclick = light;

function light(){
  let dark_mode = document.getElementById("body")
  dark_mode.classList.toggle("dark");
}

var switchsound = new Audio();
switchsound.src ="assets/sound/switch.mp3";
//www.fesliyanstudios.co//

//Music//
document.getElementById("music").onclick = music;

function music(){
  let text;
  if (document.getElementById("condition").innerHTML % 2 == 0) {
    alert("The picture drop down.");
    location.replace("Okay_what_is_next.html");
  } else {
    text = "Nothing happen.";
  }
  document.getElementById("music-text").innerHTML = text;
}

//Safe//
document.getElementById("safe-button").onclick = password;

function password() {
    let text;
    let condition;
    let password = prompt("Please enter passwords");
    
    if (password == 2641) {
      text = "You get a screwdriver.";
      condition = 2;
    } else if (password == "dm7") {
      text = "You get a Shrinking Solution.";
      condition = 3;
    } else if (password == "Dm7") {
      text = "You get a Shrinking Solution.";
      condition = 3;
    } else if (password == "198") {
      text = "Nice guess, but not now.";
      condition = 1;
    } else if (password == "7h") {
      text = "Nice guess, but not now.";
      condition = 1;
    } else if (password == "7H") {
      text = "Nice guess, but not now.";
      condition = 1;
    } else {
      text = "Nothing happen.";
      condition = 1;
    }

    document.getElementById("screwdriver-text").innerHTML = text;
    document.getElementById("condition").innerHTML = document.getElementById("condition").innerHTML * condition;
}

var safesound = new Audio();
safesound.src ="assets/sound/safe.mp3";
//https://www.soundjay.com/beep-sounds-1.html//

//NothingHere//
document.getElementById("NothingHere").onclick = nothinghere;

function nothinghere(){
  alert("You realize that you are facing a wall, not in a room.");
  location.replace("SpeedRunEng.html");
}

//BGM//
var bgm = new Audio();
bgm.src ="assets/sound/1.mp3";