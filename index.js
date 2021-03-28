var randomNumber1=Math.floor(Math.random(randomNumber1) * 6) + 1;
var randomDiceImage1="dice"+randomNumber1+".png";
var img1= document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);
var randomNumber2=Math.floor(Math.random(randomNumber1)*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var img2= document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins... ";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins...🚩";
}else{
  document.querySelector("h1").innerHTML="Oops its a DRAW!!!!!";

}
