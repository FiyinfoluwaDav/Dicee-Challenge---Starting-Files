//Generating the random Numbers
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

//Constructing file paths based on those random numbers
var randomDiceimage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

//Using *querySelectorAll* and the specific index to select the image to change
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceimage1);

//Do the same thing for the second image
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

//Determining the winner
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "It's a draw! Try again";
}else if(randomDiceimage1>randomDiceImage2){
    document.querySelector("h1").innerHTML = "Player 1, you win!";
}else{
    document.querySelector("h1").innerHTML = "Player 2, you win!";
}
