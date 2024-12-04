
/*
function myFunction() {
  const person = prompt("Please enter your name",);
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}*/

//Uppgift 2
/*
        function compareWords() {
            const word1 = prompt("Enter the first word:");
            const word2 = prompt("Enter the second word:");

            if (word1 && word2) {
                if (word1.toLowerCase() < word2.toLowerCase()) {
                    alert(`"${word1}" comes before "${word2}" in the alphabet.`);
                } else if (word1.toLowerCase() > word2.toLowerCase()) {
                    alert(`"${word2}" comes before "${word1}" in the alphabet.`);
                } else {
                    alert(`The words "${word1}" and "${word2}" are the same.`);
                }
            } else {
                alert("Please enter valid words.");
            }
      
}
            */

/*
const age = prompt("How old are you?");

if (age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are under 18.");
}*/

/*function guessAnimal() {
  const correctAnimal = "dog"; // The correct answer
  let userGuess = prompt("What animal do you think I'm thinking of?");
  
  // Check if the user canceled
  if (userGuess === null) {
      alert("You canceled the guessing game.");
      return;
  }
  
  userGuess = userGuess.toLowerCase().trim(); // Normalize the user input
  
  if (userGuess === correctAnimal) {
      alert("Congratulations! You guessed correctly!");
  } else {
      const tryAgain = confirm("Wrong! Do you want to try again?");
      if (tryAgain) {
          guessAnimal(); // Recursively call the function for another attempt until it's right
      } else {
          alert("Thanks for playing!");
      }
  }
}*/

/*
        function askFavoriteColor() {
            const favoriteColor = prompt("What is your favorite color? (e.g., red, blue, green)").toLowerCase().trim();
            const resultElement = document.getElementById("result");

            if (favoriteColor === "red") { //if else to give different prompts in reaction to which color given
                resultElement.textContent = "Red is a powerful and passionate color!";
            } else if (favoriteColor === "blue") {
                resultElement.textContent = "Blue is calm and harmonious – a true classic!";
            } else if (favoriteColor === "green") {
                resultElement.textContent = "Green is the color of nature – so peaceful!";
            } else if (favoriteColor) {
                resultElement.textContent = `Hmm, "${favoriteColor}" is an interesting choice of color!`;
            } else {
                resultElement.textContent = "You didn't enter any color!";
            }
        }
*/

        function checkTestResult() {
            const score = prompt("What was your score on the test? (0-100)");
            const resultElement = document.getElementById("result");

            // Validate input
            if (score === null || score.trim() === "" || isNaN(score) || score < 0 || score > 100) {
                resultElement.textContent = "Please enter a valid score between 0 and 100.";
                return;
            }

            if (score >= 50) { //makes 50 the passing score
                resultElement.textContent = `Congratulations! You passed with a score of ${score}.`;//displays the score as a string with the $
            } else {
                resultElement.textContent = `Unfortunately, you failed with a score of ${score}.`;
            }
        }
   





