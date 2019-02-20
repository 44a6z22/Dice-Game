
// creating the players objects with the properties turn(on or off) and the name of the player 

	var player1 = new Player(true, "player 1");
	var player2 = new Player(false, "player 2");
	
/**
 * [clicked rolls the dice and does what needs to be done .]
 * @param  {player} [obj] [plater who is playing ]
 * @param {player} [obj2] [player to play next if the dice returns 0 ]
 */
function clicked(obj,obj2){
	var res = obj.rollDice();
	var image = document.getElementById('diceImg'); 
	image.src = "images/dice-" + res + ".png";
	obj.validate(res, obj2);
}

/**
 * [whatObj ditermins what object should be playing ]
 * @param  {player} obj1 [player #1]
 * @param  {player} obj2 [player #2]
 */
function roll(obj1, obj2){
	var obj
	if(obj1.isYourRole == true && obj2.isYourRole == false ){
		obj = obj1; 
		clicked(obj, obj2);
		document.getElementById('current-0').innerHTML = obj.roundScore;
	}
	else if(obj2.isYourRole == true && obj1.isYourRole == false){
		obj = obj2; 
		
		clicked(obj, obj1);
		document.getElementById('current-1').innerHTML = obj.roundScore;
	}
	bullet(player1, player2)

}

function hold(obj1, obj2){
	var obj
	if(obj1.isYourRole == true && obj2.isYourRole == false ){
		obj = obj1; 
		obj.pressedHold(obj.roundScore, obj2);
		document.getElementById('score-0').innerHTML = obj.globalScore;
		document.getElementById('current-0').innerHTML = obj.roundScore;
	}
	else if(obj2.isYourRole == true && obj1.isYourRole == false){
		obj = obj2; 
		obj.pressedHold(obj.roundScore, obj1);
		document.getElementById('score-1').innerHTML = obj.globalScore;
		document.getElementById('current-1').innerHTML = obj.roundScore;
	}
	bullet(obj1, obj2);
}


function resetGame(){
		
	player1.hardReset();
	player2.hardReset();
	bullet(player1, player2);
	document.getElementById('score-0').innerHTML = 0;	
	document.getElementById('current-0').innerHTML = 0;	
	document.getElementById('score-1').innerHTML = 0;	
	document.getElementById('current-1').innerHTML = 0;	
	document.getElementById('final-score').value = "";	
}

// wahed l botona 7emra katch3el 9odam smia dl player mli katkon nobto hadik 
function bullet(obj1, obj2){
	if(obj1.isYourRole){
		document.getElementById('turn-0').style.color = 'red';
		document.getElementById('turn-1').style.color = 'transparent';

	}else if (obj2.isYourRole){
		document.getElementById('turn-1').style.color = 'red';
		document.getElementById('turn-0').style.color = 'transparent';
		
	}
}
// mazal 3ta lah maidar 
// 
// 
// 
