//Door//
document.getElementById("door").onclick = door;

function door(){
  if (document.getElementById("condition").innerHTML % 3 == 0) {
    alert("You shrink and get throught under the door.");
    location.replace("TrueEnd.html");
  } else if (document.getElementById("condition").innerHTML % 5 == 0){
    var opendoor = document.getElementById("body");
    opendoor.classList.toggle("opendoor");
    alert("Nice try.");
    document.getElementById("End").innerHTML = "Normal end. You can try other passwords.";
    document.getElementById("condition").innerHTML = document.getElementById("condition").innerHTML = 1;
  } else if (document.getElementById("condition").innerHTML % 2 == 0){
    alert("Wrong key... Another way is don't use the key... or notes...");
  } else{
    alert("Screwing up by using a screwdriver to open the door...");
  }
}

var doorsound = new Audio();
doorsound.src ="assets/sound/door.mp3";
//www.fesliyanstudios.co//

//Light//
document.getElementById("light-button").onclick = light;

function light(){
  let dark_mode = document.getElementById("body");
  dark_mode.classList.toggle("dark");
}

var switchsound = new Audio();
switchsound.src ="assets/sound/switch.mp3";
//www.fesliyanstudios.co//

//Music//
document.getElementById("music").onclick = music;

function music(){
  document.getElementById("music-text").innerHTML = "Nothing happen.";
}

//Safe//
document.getElementById("safe-button").onclick = password;

function password() {
    let text;
    let condition;
    let password = prompt("Please enter passwords");
    
    if (password == 198) {
      text = "You get a key.";
      condition = 2;
    } else if (password == "dm7") {
      text = "You get a Shrinking Solution.";
      condition = 3;
    } else if (password == "Dm7") {
      text = "You get a Shrinking Solution.";
      condition = 3; 
    } else if (password == "7H") {
      text = "You get a real key.";
      condition = 5;
    } else if (password == "7h") {
      text = "You get a real key.";
      condition = 5;
    } else {
      text = "Nothing happen.";
      condition = 1;
    }

    document.getElementById("key-text").innerHTML = text;
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
  