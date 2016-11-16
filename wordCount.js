var fs = require('fs');
fs.readFile('read.txt', 'utf-8', function(err, contents){
 	if(err){
 		console.log("sorry this is not the right file");
 	}
 	console.log("Oh you got the right file ");
 	console.log( contents);

 	// call of function countCharacter to get the number of character in the file
 	var fsNumbeCharacter = countCharacter(contents)
 	console.log( fsNumbeCharacter );
     
     // call of function countWord to get the number of word in the file
 	var fsNumberWord = countWord(contents)
 	console.log(fsNumberWord);

 	// call of function counLigne to get the number of ligne in the file
 	var fsNumberLigne = countligne(contents)
 	console.log(fsNumberLigne);
});

console.log("Finished loaded the readFile");

// function for counting the number of character in the file
function countCharacter(aContent){
 	return aContent.length;
}

// function for counting the number of word in the file
function countWord(aContent){
	var regExp = /\s/;
 	var numberWord = aContent.split(regExp).length; // '\s' finds the whitespace character 
 	return numberWord;	
}

// function for counting the number of ligne in the file
function countligne(aContent){
	var regExp = /\n/;
 	var numberligne = aContent.split(regExp).length; // '\n' finds the new ligne character
 	return numberligne;
}

 
 