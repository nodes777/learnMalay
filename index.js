const dict = require('./dictionary.json');
let wordToTranslate;
let correctWord;

// Not every node program needs process, so it is paused by default. We must resume it.
process.stdin.resume();
// Set our encoding
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {

	if (compare(correctWord, text)) {
		console.log("--Hooray!--\n--Try another one!--\n");
		startNewRound();
		// if the guess is correct, return, don't continue this function
		return;
	}
	if (!compare(correctWord, text)){
		console.log("Nope. Try again");
	}
	if ( text == 'new round\r\n'){
		startNewRound();
	}
	if ( text == 'help\r\n'){
		console.log(correctWord);
	}
	if (text == 'quit\r\n') {
		done();
	}
});

//Start the game!
startFirstRound();

/* Function definitions */
function startFirstRound() {
		console.log("Welcome to learn Malay! \n");
		console.log("Type 'quit' at any time to leave. \n");
		console.log("Type 'help' to get the answer if you're stuck. \n");
		startNewRound();
}


function startNewRound() {
	let startingLang;
	 if(Math.random() > 0.5){
	 	startingLang = "en";
	 	console.log("Translate the following word to Malay: \n");
	 	let wordPair = getWordPair();
	 	wordToTranslate = wordPair.en;
	 	correctWord = wordPair.ml;
	 	console.log(wordToTranslate);
	 } else {
	 	startingLang = "ml";
	 	console.log("Translate the following word to English: \n");
	 	let wordPair = getWordPair();
	 	wordToTranslate = wordPair.ml;
	 	correctWord = wordPair.en;
	 	console.log(wordToTranslate);
	 }

}

function done() {
	console.log('\nBye!');
    process.exit();
}

function compare(str1, str2){
	if(str1.toLowerCase().trim() == str2.toLowerCase().trim()){
		return true;
	} else {
		return false;
	}
}

function getWordPair(){
	let objWordPair = dict[Math.floor(Math.random() * dict.length)];

	return objWordPair;
}