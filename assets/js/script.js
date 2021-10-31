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




function countdown() {
    var timeLeft = 60;
console.log("countdown");
    var timeInterval = setInterval(function() {
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
        //optionsButton.onclick = answerCheck
        console.log()
    });
}



function startQuiz() {
    countdown();
    getQuestion();
}

buttonEl.addEventListener("click", function(){
    startQuiz();
});


