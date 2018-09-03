//=== Load these features of the game ===/

//=== Gobal variables for the Marvel Hangman Game === //
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

    
    
    var chosenCategory;         // Selected catagory
    var characterWord ;         // Selected character word
    var userGuess ;             // User geuss
    var storedGeusses = [ ];    // Store  user geusses array
    var strikes;                // Strikes 
    var counter;                // Count correct geusses of letters
    var space;                  // Number of spaces in word '-'
    

//============= Set up the word game board ==============//

// create the alphabet buttons unordered list
var buttons = function()
{
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
        letters.id = "alphabet";
        list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

// Create geusses unordered list 
var result = function () 
{
    wordHolder = document.getElementById("currentCharacter");
    correct = document.createElement("ul");

    for (var i = 0; i < characterWord.length; i++) {
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
  }
  
  // Show how many strikes you have until game over
  var showStrikes = function () 
  {
    remainStrikes = document.getElementById("remainingStrikes");
    remainStrikes.innerHTML = "You have " + strikes + " strikes left";
    if (strikes < 1) 
    {
      remainStrikes.innerHTML = "Game Over";
    }
    for (var i = 0; i < storedGeusses.length; i++) 
    {
      if (counter + space === storedGeusses.length) 
      {
        remainStrikes.innerHTML = "You Win!";
      }
    }
  }

// The button click functions for the game
var check = function () 
{
    list.onclick = function () 
    {
    var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < characterWord.length; i++) 
      {
        if (characterWord[i] === geuss) 
        {
          storedGeusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (characterWord.indexOf(geuss));
      if (j === -1) 
      {
        strikes -= 1;
        showStrikes();
        //animate();
      } else 
      {
        showStrikes();
      }
    }
  }

// Play the marvel hangman game
play = function () 
{
    var characterList = ["spiderman","iron man", "thor","hulk","black-widow","hawkeye", "black-panther", "vision", "scarlet-witch", "captain-america", "falcon", "dr-strange", "hank-pym", "quicksilver", "she-hulk", "wasp", "human-torch", "invisible-women", "mr-fantastic", "thing", "silver-surfer", "luke-cage", "daredevil", "electra", "loki", "nick-fury", "ghost-rider"];  

    characterWord = characterList[Math.floor(Math.random() * characterList.length)];
    word = characterWord[Math.floor(Math.random() * characterWord.length)];
    word = word.replace(/\s/g, "_");
   
    console.log(characterWord);
    
    buttons();
    storedGeusses = [ ];
    strikes = 8;
    counter = 0;
    space = 0;
    result();
    showStrikes();
    
    //hangman();
  }




  
  