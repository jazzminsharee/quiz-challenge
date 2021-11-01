// function: execute(): [display message 1(appended) along with appended answers
// you can choose from click an element and it moves to the next question by registering
// click event ?


var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('start');
var listEl = document.createElement("button");

var questionsEl = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var optionsDiv = document.querySelector("#options");
var questionIndex = 0;
var timeLeft = 60;
var timeInterval;



function countdown() {
     timeLeft = 60;
console.log("countdown");
    timeInterval = setInterval(function() {
        console.log("timeIntervalStarted");
        if (timeLeft > 0 ) {
            timerEl.textContent = timeLeft 
            timeLeft--
        } else if (timeLeft === 0) {
            timerEl.textContent = timeLeft
            timeLeft--
        }else {
            clearInterval(timeInterval);
        }
    }, 1000);
    
}

// call the next question
function getQuestion() {
    // current question
    var currentQuestion = questions[questionIndex];
    console.log(currentQuestion);
    // show the question
    questionTitle.textContent = currentQuestion.title;
    // loop show the choices 
    optionsDiv.textContent = "";
    currentQuestion.options.forEach((option) => {
        var optionsButton = document.createElement("button");
        optionsButton.textContent = option;
        optionsButton.setAttribute("value", option);
        optionsDiv.appendChild(optionsButton);
        optionsButton.onclick = answerCheck;
    });
}

function answerCheck() {
    // check the user selection against correct answer
    if (this.value === questions[questionIndex].answer) {
        alert("Correct!");
        questionIndex++;
        if (questionIndex < questions.length) {
            getQuestion();
        } else {
          gameEnd();
        }
    } else {
        alert("Incorrect.");
        timeLeft -= 10;
    }
} 


// end the game
function gameEnd() {
    clearInterval(timeInterval);
    timerEl.textContent = "";
    // replace questions with user's score
    questionsEl.textContent = "Your score is..." + timeLeft + "!";
    // show results screen
    saveBestScore();
}

// save best score 
function saveBestScore() {
    // prompt for initials 
    var willSave = prompt("Enter your initials.");
    if (willSave !== "") {
        var bestscores = 
          JSON.parse(window.localStorage.getItem("bestscores")) || [];
        // new score for current player
        var newScore = {
            score: timeLeft,
            initials: willSave,
        };
        grade = newScore.score;
        players = newScore.initials;
        // save to local storage
        bestscores.push(newScore);
        window.localStorage.setItem("bestscores", JSON.stringify(bestscores));
    }
}


function startQuiz() {
    countdown();
    getQuestion();
}

buttonEl.addEventListener("click", function(){
    startQuiz();
});


