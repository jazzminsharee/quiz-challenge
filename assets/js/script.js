// function: execute(): [display message 1(appended) along with appended answers
// you can choose from click an element and it moves to the next question by registering
// click event ?


var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('start');

var listEl = document.createElement("button");

var questionsEl = document.querySelector("#questions");
var ulEl = document.createElement("ul");

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

function startQuiz() {
    countdown();
    
}

buttonEl.addEventListener("click", function(){
    startQuiz();
});


