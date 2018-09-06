//=== Load these features of the game ===/
window.onload = function () {
//=== Gobal variables for the Marvel Hangman Game === //
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

    var characterWord ;         // Selected character word
    var userGuess ;             // User geuss
    var storedGeusses = [ ];    // Store  user geusses array
    var strikes;                // Strikes 
    var counter;                // Count correct geusses of letters
    var space;                  // Number of spaces in word '-'
    var wins = 0;               // Number of wins
    var losses = 0;             // Number of losses

//============= Set up the word game board ==============//

// create the alphabet buttons unordered list
var buttons = function()
{
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    // A loop to make the alphabet buttons for the game
    for (var i = 0; i < alphabet.length; i++) 
    {
        letters.id = "alphabet";
        list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
};

// Create geusses unordered list 
var result = function () 
{
    wordHolder = document.getElementById("currentCharacter");
    correct = document.createElement("ul");

    // A for loop to create the spaces for the random word
    for (var i = 0; i < characterWord.length; i++) 
    {
      correct.setAttribute("id", "my-word");
      userGuess = document.createElement("li");
      userGuess.setAttribute("class", "guess");
      if (characterWord[i] === "-") 
      {
        userGuess.innerHTML = "-";
        space = 1;
      } 
      else  
      {
        userGuess.innerHTML = "_";
      }

      storedGeusses.push(userGuess);
      wordHolder.appendChild(correct);
      correct.appendChild(userGuess);
    }
};
  
// Show how many strikes you have until game over
var showStrikes = function () 
{
    // Get the elements from the index.html pages
    var remainStrikes = document.getElementById("remainingStrikes");
    var lose = document.getElementById("totalLosses");
    
    lose.innerHTML = losses;
    remainStrikes.innerHTML = "You have " + strikes + " strikes left";

    // Conditional loop to increment losses and tell user game is over
    if (strikes < 1) 
    {
      remainStrikes.innerHTML = "Game Over! The word was " + characterWord;
      letters.setAttribute("class", "disabled"); // disable the alphabet buttons
      losses += 1;  // increment the losses by one

      console.log(losses); 
    }
    
    // For loop to check if stored user guess matches the random word
    for (var i = 0; i < storedGeusses.length; i++) 
    {
      if (counter + space === storedGeusses.length)
      {
        remainStrikes.innerHTML = "You Win!"; 
        letters.setAttribute("class", "disabled"); // disable the alphabet buttons
      }  
    } 

    // Get elements from the index.html page
    var win = document.getElementById("totalWins");
    win.innerHTML = wins;

    // Conditional loop to increment wins
    if(storedGeusses.length === (counter + space))
    {  
        win.innerHTML = wins++;
        console.log(wins);
    } 
};

// The button click functions for the game
var check = function () 
{
    list.onclick = function () 
    {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;

      // This loops through the word and checks to see if a user guess matching the current word
      for (var i = 0; i < characterWord.length; i++) 
      {
        if (characterWord[i] === geuss) 
        {
          storedGeusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (characterWord.indexOf(geuss));

      // Conditional loop if the guesses doesn't match then subtract a strike and call the proceeding functions
      if (j === -1) 
      {
        strikes -= 1;
        showStrikes();
        animate();
      } else 
      {
        showStrikes();
      }
    }
};
  
 // Start the animation of the hangman character 
var animate = function () 
{
    var drawMe = strikes;
    drawArray[drawMe](); 
}

  
// Draw the canvas hangman character
drawHangman =  function()
{
    myHangman = document.getElementById("hangman");
    context = myHangman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 2;
};
  
head = function()
{
      myHangman = document.getElementById("hangman");
      context = myHangman.getContext("2d");
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
}
    
draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() 
   {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };

// The array to draw the hangman character as the user guessed wrong
drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];  

// Play the marvel hangman game
play = function () 
{
    // array of words
    var characterList = ["spiderman","iron man", "thor","hulk","black-widow","hawkeye", "black-panther", "vision", "scarlet-witch", "captain-america", "falcon", "dr-strange", "hank-pym", "quicksilver", "she-hulk", "wasp", "human-torch", "invisible-women", "mr-fantastic", "thing", "silver-surfer", "luke-cage", "daredevil", "electra", "loki", "nick-fury", "ghost-rider"];  

    // random pick the current word from the characterlist
    characterWord = characterList[Math.floor(Math.random() * characterList.length)];
    word = characterWord[Math.floor(Math.random() * characterWord.length)];
    word = word.replace(/\s/g, "_");
   
    console.log(characterWord);
   
    // Set up the game play and call proceeding functions
    buttons();
    storedGeusses = [ ];
    strikes = 10;
    counter = 0;
    space = 0;
    lose = losses;
    wins = wins;
    result();
    showStrikes();
    drawHangman();
};

// Start the game
play();

// Reset the game play by clicking the play again button
document.getElementById("reset").onclick = function() 
{
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 500, 500);
    play(); 
}

}


  
  