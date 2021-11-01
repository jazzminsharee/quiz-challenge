// function to display the saved scores
function showLastScore() {
    let showScore = JSON.parse(localStorage.getItem("bestscores"));
    showScore.forEach((score) => {
        document.getElementById("saved-name").innerHTML += `${score.initials}<br>`;
        document.getElementById("saved-score").innerHTML += `${score.score}<br>`;
    });
}

// As soon as the page opens
function init() {
    showLastScore();
}

init();
