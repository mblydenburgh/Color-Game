var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click", resetClick);

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", modeClick)
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", buttonClick);
  }
}

function modeClick(){
  modeButtons[0].classList.remove("selected");
  modeButtons[1].classList.remove("selected");
  this.classList.add("selected");
  this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
  reset();
}

function reset(){
  colors = generateColors(numSquares);
  //pick a new random colors
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
  } else{
      squares[i].style.display = "none";
    }
  }
}

function resetClick(){
  reset();
}

function pickColor(){
  var num = Math.floor(Math.random() * colors.length)
  return colors[num];
}

function buttonClick(){
  var buttonColor = this.style.backgroundColor;
  if(this.style.backgroundColor != pickedColor){
    this.style.backgroundColor = "#232323"
    messageDisplay.textContent = "Guess Again..."
  }else{
    messageDisplay.textContent = "Correct!";
    changeColors(buttonColor);
    h1.style.backgroundColor = pickedColor;
    resetButton.textContent = "Play Again?"
  };
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function generateColors(num){
  arr = [];
  for(i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  //rgb(red, green, blue)
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}


/* Old code, easy/hard buttons had their own click functions

function easyClick(){
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numSquares = 3;
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  console.log("easy clicked");
}

function hardClick(){
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
  }
  console.log("hard clicked");
}
*/
