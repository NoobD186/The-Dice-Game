var randonNumber1= Math.floor(Math.random()*6)+1;
var randonNumber2= Math.floor(Math.random()*6)+1;

var randomImage1="dice"+randonNumber1+".png";
var randomImage2="dice"+randonNumber2+".png";

document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);




if (randonNumber1>randonNumber2){
    document.querySelector("h1").textContent="🚩Player1 Wins";
}else if (randonNumber1<randonNumber2){
    document.querySelector("h1").textContent="Player2 Wins🚩";
} else  {
    document.querySelector("h1").textContent="Draw ☢️";
}