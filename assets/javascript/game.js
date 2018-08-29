//=== Load these features of the game ===/


//=== Gobal variables for the Outdoor Adventure Game === //
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',                          // array of the alphabet
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
   
   
    var characterList = [
        {name:"spiderman", hint:"Spidersense is tingling"},
        {name:"iron-man", hint:""},
        {name:"thor", hint:"God of thunder"},
        {name:"hulk", hint:"Loves to smash things"}
    ];                  
    var randomCharacter = charactersList[Math.floor(Math.random() * charactersList.length)]; // random character generator
    var getCharacterClue;                                       // Get characterClue
    var selectedCharacter;                                      // selected character 
    var letterGuess;                                            // user guessed alphabet letter
    var guessed = [];                                           // an array of stored guesses
    var strikes;                                                // wrong guessed strikes before game over
    var counter;                                                // count correct guessed letters
    var space;                                                  // represents the black spaces '-' for the word
//============= Set up the word game board ==============//

// Get Elements
var getHint = document.getElementById("hint");
var showClue = document.getElementById("");
// Function Hint

hint.onclick = function() 
{
  var characterIndex = characterList.indexOf(hint);
  showClue.innerHTML = "Clue: - " +  hints [characterIndex];
};
  
 



  