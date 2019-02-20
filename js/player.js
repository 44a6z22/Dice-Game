class Player{
	constructor(role, name){
		this.name  = name;
		this.roundScore = 0; 
		this.globalScore = 0 ;
		this.isYourRole = role ;
	}

	reset = function(){
		this.roundScore = 0 ;
	}
	/**
	 * [isInt to ditermin if a value is anumber or not]
	 * @param  {}  value [a value]
	 * @return {Boolean}       [weather the value is indeed a number or not .(True/False)]
	 */
	isInt = function(value){
		if(!isNaN(value)){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * [changeRole to change the objects role .]
	 * @param  {player} obj [the next object]
	 */
	changeRole = function(obj){
		 if(this.isYourRole)
		 {
		 	this.isYourRole = false; 
		 	obj.isYourRole = true; 
		 }else{
		 	this.isYourRole = true; 
		 	obj.isYourRole = false; 
		 }
	}

	hardReset = function(){
		this.reset();
		this.globalScore = 0 ;
	}

	addScore = function(scoreToAdd){
		if(this.isInt(scoreToAdd)) 
			this.roundScore += scoreToAdd; 
		else
			alert("we need an int value!! ");
		return this.roundScore;
	}

	confirmScore = function(scoreToConfirm){
		this.globalScore += scoreToConfirm;
	}

	rollDice = function(){
		var randomeNumber = Math.floor((Math.random()*6)+1);
		return randomeNumber;
	}

	validate = function(diceRes, obj){
		if(diceRes == 1){
			this.reset();
			this.changeRole(obj);
			return 1;
		}else{
			this.addScore(diceRes);
		}
	}

	pressedHold = function(currentScore, obj){
		this.confirmScore(currentScore);
		var winner ; 
		if(this.globalScore >= 100){
			document.getElementById('final-score').value = `${this.name} wins`;
			this.hardReset();
			obj.hardReset();
		}
		this.changeRole(obj); 
		this.reset();
		
	}
} 
