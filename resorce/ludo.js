var gamemode1=document.getElementById("solomode");
var gamemode2=document.getElementById("duomode");
var result=document.getElementById("result");
var side=document.getElementById("yourSide");
var img=document.getElementById("your_game_option");
var img1=document.getElementById("your_game_option_p");
var side1=document.getElementById("partenerSide");
var i=0;
var j=0;
function userside(){
	i=Math.floor(Math.random()*6)+1;
	switch(i){
		case 1:img.src="resorce/img/dice1.png";
		break;
		case 2:img.src="resorce/img/dice2.png";
		break;
		case 3:img.src="resorce/img/dice3.png";
		break;
		case 4:img.src="resorce/img/dice4.png";
		break;
		case 5:img.src="resorce/img/dice5.png";
		break;
		case 6:img.src="resorce/img/dice6.png";
		break;
	}
}
function partnerside(){
	j=Math.floor(Math.random()*6)+1;
	switch(j){
		case 1:img1.src="resorce/img/dice1.png";
		break;
		case 2:img1.src="resorce/img/dice2.png";
		break;
		case 3:img1.src="resorce/img/dice3.png";
		break;
		case 4:img1.src="resorce/img/dice4.png";
		break;
		case 5:img1.src="resorce/img/dice5.png";
		break;
		case 6:img1.src="resorce/img/dice6.png";
		break;
	}

}
function game(x,y){
	side.innerHTML=x+"'s Side:";
	side1.innerHTML=y+"'s Side:";
	var X=1;
	var Y=0;
	img.addEventListener("click",function(){
		img.classList.add("red_glow");
		setTimeout(function(){img.classList.remove("red_glow")},300);
		if(X%2==1){
			userside();
			X++;
			if(Y==0 && j==6){
				result.innerHTML="!! Best Of Luck !!";
			}
			else{
				if (i==6 && j==6) {
				result.innerHTML="!! Match Draw !!";
				}
				else if (i==6 && j!=6) {
					result.innerHTML="!! "+x+" Win !!";
				}
				else if (i!=6 && j==6) {
					result.innerHTML="!! "+y+" Win !!";
				}
				else{
					result.innerHTML="!! Best Of Luck !!";
				}
			}
			if(Y==0){
				Y++;
			}
			else{
				Y--;
			}
		}
		else{
			window.alert("Its your Partner's time");
		}
		
	})
	img1.addEventListener("click",function(){
		img1.classList.add("red_glow");
		setTimeout(function(){img1.classList.remove("red_glow")},300);
		if (X==1) {
			partnerside();
			X=X+2;
			if(Y==0 && i==6){
				result.innerHTML="!! Best Of Luck !!";
			}
			else{
				if (i==6 && j==6) {
				result.innerHTML="!! Match Draw !!";
				}
				else if (i==6 && j!=6) {
					result.innerHTML="!! "+x+" Win !!";
				}
				else if (i!=6 && j==6) {
					result.innerHTML="!! "+y+" Win !!";
				}
				else{
					result.innerHTML="!! Best Of Luck !!";
				}
			}
			if(Y==0){
				Y++;
			}
			else{
				Y--;
			}
		}
		else if(X%2==0){
			partnerside();
			X++;
			if(Y==0 && i==6){
				result.innerHTML="!! Best Of Luck !!";
			}
			else{
				if (i==6 && j==6) {
				result.innerHTML="!! Match Draw !!";
				}
				else if (i==6 && j!=6) {
					result.innerHTML="!! "+x+" Win !!";
				}
				else if (i!=6 && j==6) {
					result.innerHTML="!! "+y+" Win !!";
				}
				else{
					result.innerHTML="!! Best Of Luck !!";
				}
			}
			if(Y==0){
				Y++;
			}
			else{
				Y--;
			}
		}
		else{
			window.alert("Its your Partner's time");
		}
		
	})
}
function game2(x){
	img.addEventListener("click",function(){
		img.classList.add("red_glow");
		setTimeout(function(){img.classList.remove("red_glow")},300);
		var a=Math.floor(Math.random()*6)+1;
		switch(a){
			case 1:img.src="resorce/img/dice1.png";
			break;
			case 2:img.src="resorce/img/dice2.png";
			break;
			case 3:img.src="resorce/img/dice3.png";
			break;
			case 4:img.src="resorce/img/dice4.png";
			break;
			case 5:img.src="resorce/img/dice5.png";
			break;
			case 6:img.src="resorce/img/dice6.png";
			break;
		}
		var b=Math.floor(Math.random()*6)+1;
		switch(b){
			case 1:img1.src="resorce/img/dice1.png";
			break;
			case 2:img1.src="resorce/img/dice2.png";
			break;
			case 3:img1.src="resorce/img/dice3.png";
			break;
			case 4:img1.src="resorce/img/dice4.png";
			break;
			case 5:img1.src="resorce/img/dice5.png";
			break;
			case 6:img1.src="resorce/img/dice6.png";
			break;
		}
		if(a==6 && b==6){
			result.innerHTML="!! match draw !!";
		}
		else if(a==6 && b!=6){
			result.innerHTML="!! "+x+" win !!";
			return;
		}
		else if(a!=6 && b==6){
			result.innerHTML="!! "+x+" Luse !!";
			return;
		}
		else{
			result.innerHTML="!! Best of Luck !!";
		}
	});
}
function main(){
	var x=localStorage.getItem("user_name");
	gamemode2.addEventListener("mouseover",function(){
		gamemode2.classList.add("big");
		setTimeout(function() {gamemode2.classList.remove("big");}, 500);
	})
	gamemode1.addEventListener("mouseover",function(){
		gamemode1.classList.add("big");
		setTimeout(function() {gamemode1.classList.remove("big");}, 500);
	})
	gamemode2.addEventListener("click",function(){
		
		var y=window.prompt("Your name is "+x+" . Enter your Partner's Name:");
		gamemode2.classList.add("pink");
		gamemode1.classList.remove("pink");
		game(x,y);
		//test();
	})
	gamemode1.addEventListener("click",function(){
		side1.innerHTML="Computer's Side:";
		gamemode1.classList.add("pink");
		gamemode2.classList.remove("pink");
		game2(x);
	})
}
main();
