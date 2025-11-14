// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

// Timer
let timeInterval;

// Load difficulty
function timeDifficulty(){
  let addTime;
  const difficulty = difficultySelect.value

  if(difficulty === "hard"){
    addTime = 3;
  } else if (difficulty === "medium"){
    addTime = 4;
  } else {
    addTime = 5;
  }

  time += addTime;
  timeEl.textContent = time;
}

// Updates the ”word” element with a random item from the words array
function addWordToDom(){
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord;
}

// increment score by +1
function updateScore(){
  score ++;
  scoreEl.textContent = score;
}

text.addEventListener("text", function(e){
  const input = e.target.value.trim();
  
  if (input === randomWord){
    addWordToDom();
    updateScore();
    timeDifficulty();
    e.target.value = "";
  }
});

//  Decrements -1 from the timer every time it runs
function updateTime(){
  time --;
  timeEl.textContent = time;

  if(time <= 0){
    clearInterval(timeInterval);
    gameOver();
  };
}

// Displays the end-game-container once the timer hits zero
function gameOver(){
  endgameEl.style.display = "flex";

  endgameEl.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your final score is ${score}</p>
  <button onclick="location.reload()">Play again</button>
  `;
}

// Settings
if (settingsBtn && settings){
  settingsBtn.addEventListener("click", function(){
    settings.classList.toggle("hide");
  });
}

else if (settingsForm && difficultySelect){
  settingsForm.addEventListener("change", function(e){
    const difficulty = difficultySelect.value;
    localStorage.setItem("difficulty", difficulty);
  });
}

// Game start
addWordToDom();
timeEl.textContent = time;
text.focus();
timeInterval = setInterval(updateTime, 1000);