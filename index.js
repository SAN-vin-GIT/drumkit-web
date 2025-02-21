// detecting presses
var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    button_anim(buttonInnerHTML);
  });
}

// detecting keyboard presses
document.addEventListener("keydown", function (event) {
  sound(event.key);
  button_anim(event.key);
});

function sound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log("Unrecognized key:", key); // Change 'buttonInnerHTML' to 'key' here too
  }
}

function button_anim(currentKey) {
  var active_button = document.querySelector("." + currentKey);
  active_button.classList.add("pressed");
  setTimeout(function () {
    active_button.classList.remove("pressed");
  }, 100);
}
