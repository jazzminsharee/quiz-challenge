// array of questions so that they can be called when quiz begins

var questions = [
    {
        title: "What do you need in order to execute a function?",
        choices: ["callback", "variable", "semicolon", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "A true or false statement in Javascript is known as:",
        choices: ["an object", "a variable", "a boolean", "a string"],
        answer: "a boolean",
    },
    {
        title: "The name:value pairs contained in an object are called ______.",
        choices: ["properties", "data", "methods", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "What syntax is used to target an event?",
        choices: ["a:hover", "event.target", "('click', function(){)", "input:focus"],
        answer: "event.target",
    },
];

// create conditional statement that moves to scores.html once questions are completed