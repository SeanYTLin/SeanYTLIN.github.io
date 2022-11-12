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

//Light//
document.getElementById("light-button").onclick = light;

function light(){
  let dark_mode = document.getElementById("body")
  dark_mode.classList.toggle("dark");
}
//Event//


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


//NothingHere//
document.getElementById("NothingHere").onclick = nothinghere;

function nothinghere(){
  alert("You realize that you are facing a wall, not in a room.");
  location.replace("SpeedRunEng.html");
}