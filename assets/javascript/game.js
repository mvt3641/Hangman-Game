// Global Varaibles//
//------------------//
// Arrays and Varaibles for holding data//
var wordOptions = ["falcons", "bears","panthers","jaguars","vikings","steelers","chargers"];
var selectedWord ="";
var lettersInword =[];
var numBlanks =0;
var BlanksandSucesses =[];
var WrongLetters =[];
var letterGuessed= [];

//Game Counter//

var winCount =0;
var lossCount=0;
var guesssesLeft= 0;


//Functions//
//---------------//




function startGame(){
	selectedWord = wordOptions[Math.floor(Math.random()*wordOptions.length)];
	lettersInword = selectedWord.split("");
	numBlanks = lettersInword.length;
//}

	$("#engage").on("click", function() {
		$("#gameMusic").trigger("play")
	})

	
	



//$(document).keyup("click", function() {

	//Reset//
	guesssesLeft = 9;
	WrongLetters = [];
	BlanksandSucesses =[];

	//Populate blanks and successes with right number of blanks//
	for (var i=0; i<numBlanks; i++) {
		BlanksandSucesses.push("_");
	}


	// Change HTML to reflect round conditions //
	document.getElementById("wordToguess").innerHTML = BlanksandSucesses.join(" ");
	document.getElementById("NumGuesses").innerHTML = guesssesLeft;
	document.getElementById("Wincounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount; 

//Testing / Debugging//
console.log(selectedWord);
console.log(lettersInword);
console.log(numBlanks);
console.log (BlanksandSucesses);

}


function checkletters (letter) {

	var isLetterInWord = false
	for(var i=0;i <numBlanks;i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;

		}
	}

	//Check where in the word the letter exists and popualates//
	if(isLetterInWord){
		for (var i=0;i<numBlanks;i++){
			if (selectedWord[i] == letter) {
				BlanksandSucesses[i] = letter;
			}
		}
	}

	else { 
		WrongLetters.push(letter);

		guesssesLeft--;
		var pistol = new Audio("assets/images_audio/pistol.mp3");
		$(pistol).trigger("play");

		}


		console.log(BlanksandSucesses);
}

 function roundComplete(){
 	console.log("Win Count: "+ winCount + " | Loss Count: " + lossCount +" | Guesses Left " + guesssesLeft);
 

 //Number of Guesses left reflected on HTML//
 	document.getElementById("NumGuesses").innerHTML = guesssesLeft;
 	//$("NumGuesses").HTML = guesssesLeft;//
 	//$("wordToguess").HTML = BlanksandSucesses.toString();//
 	document.getElementById("wordToguess").innerHTML = BlanksandSucesses.join(" ");
	document.getElementById("WrongGuess").innerHTML = WrongLetters.toString(); 	




 

 if (lettersInword.toString() == BlanksandSucesses.toString()) {
 	winCount++;
 	alert("You Won!!");


 	$("Wincounter").HTML = winCount;
 
 	startGame();

 }

 	else if (guesssesLeft == 0) {
 		lossCount++;
 		alert("You Lost");

 		$("lossCounter").HTML = lossCount;

 		startGame();
 	}


 
}
 	
 




//Main Process//
//---------------//


//Initates the code the first time//
startGame();


//Register keyclicks//
$(document).keyup("click", function() {

	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkletters(letterGuessed);
	roundComplete();


	// Testing/ Debugging
	console.log(letterGuessed);
})


