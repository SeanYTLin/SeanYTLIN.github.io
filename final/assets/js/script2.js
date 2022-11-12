//Door//
document.getElementById("door").onclick = door;

function door(){
  if (document.getElementById("condition").innerHTML % 3 == 0) {
    location.replace("TrueEnd.html");
  } else if (document.getElementById("condition").innerHTML % 5 == 0){
    alert("Nice try.");
    location.replace("NormalEnd.html");
  } else if (document.getElementById("condition").innerHTML % 2 == 0){
    alert("Wrong key... Another way is don't use the key... or notes...");
  } else{
    alert("Screwing up by using a screwdriver to open the door...");
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


  