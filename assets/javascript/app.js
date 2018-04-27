//1. function to start the game
//2. timer to start and end the game
//3. done function to determine right or wrong answer
//4. create variable questions


var questions = [
    {
        question: "Who was the first U.S. president that was born a citizen of the United States?",
        answers: ["George Bush", "William Howard Taft", "Martin Van Buren"],
        correctAnswer: "Martin Van Buren"
    },
    {
        question: "Which book holds the record of being the most stolen book from public libraries?",
        answers: ["The Bible", "The Koran", "Guinness Book of World Records"],
        correctAnswer: "Guinness Book of World Records"
    },{
        question: "Florence Nightingale aided the sick and wounded during which war?",
        answers: ["Spanish-American War", "Women's March on Washington", "Crimean War"],
        correctAnswer: "Crimean War"
    },
]

var timer
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,


    countdown: function () {
        game.counter--
        $("#counter").html(game.counter)
        if (game.counter === 0) {
            console.log("times up")
            game.done()
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000)
        $("#quizArea").prepend("<h2> time remaining: <span id='counter'>120</span> seconds</h2>")
        $("#start").remove()

        for (var i = 0; i < questions.length; i++) {
            $("#quizArea").append("<h2>" + questions[i].question + "</h2>")
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("quizArea").append("<input type='radio' name='question-" + i +
                    "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        $("quizArea").append("<button id='done'>Done</button>")
    },
    done: function () {
    this.result
    }
}

//result function will clear out timer and correct answerrs and incorrect, use jquery
