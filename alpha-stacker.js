console.log("Hello, World");
// Create an array that contains the letters of the alphabet
var alphabet = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function stackLetters(array){
	var letters ="";
	for (var i=1; i < array.length; i++){
		letters += array[i];
		if (i%3 ===0){
			letters += " ";
		}
		console.log(letters);
	}
}
stackLetters(alphabet);
// The stackLetter function should accept the array as the sole argument
//function stackLetters (theAlphabetArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */
//}

// Invoke the function and pass in the arrayck
//stackLetters(alphabet)

