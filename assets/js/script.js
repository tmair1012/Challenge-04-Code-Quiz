var countDownEl = document.getElementById('timer');
var startQuizBtn = document.getElementById('start');
var currentQuestion = 0;
var showQuestion = document.getElementById('show-question')
var choiceA = document.getElementById("btn-A1");
var choiceB = document.getElementById("btn-A2");
var choiceC = document.getElementById("btn-A3");
var choiceD = document.getElementById('btn-A4');
var timeLeft = 75;
startQuizBtn.addEventListener("click", timercountdown);

// Create the Questions
var quizQuestions = [
{ question: 'What Color is the Sky?',
answer: {
answerA: "Green",
answerB: "Red",
answerC: "Blue",
answerD: "Black"
},
correctAnswer: "answerC",
},
{ question: 'Which animal is white?',
answer: {
answerA: "Zebra",
answerB: "Giraffe",
answerC: "Aligator",
answerD: "Lion"
},
correctAnswer: "answerA"
}, 
{ question: 'What is not a food',
answer: {
answerA: "Plastic",
answerB: "Potato",
answerC: "Steak",
answerD: "Chip"
},
correctAnswer: "answerA"
}, 
{ question: 'Which is NOT a number?',
answer: {
answerA: "4",
answerB: "L",
answerC: "3",
answerD: "2"
},
correctAnswer: "answerB"
}, 
{ question: 'Which is not a breed of dog?',
answer: {
answerA: "Labrador Retriever",
answerB: "German Sheperd",
answerC: "Husky",
answerD: "Tabby"
},
correctAnswer: "answerD"
}
];

function timercountdown() {


// Create the timer function
var quizTimer = setInterval(function(){
// Start countdown from 75 seconds    
    
// For loop to continue quiz
if (timeLeft > 1){
countDownEl.textContent = 'Time Left: ' + timeLeft + ' Seconds Remaining!';

// Decrement 'timeleft'
timeLeft--;
}
else if(timeLeft === 1){
    countDownEl.textContent = 'Time Left ' + timeLeft + ' Second Remaining!'
}
else {
    clearInterval(quizTimer);
}
}, 1000);
addQuestions();
}


//Create the Quiz Function
function addQuestions (){
    if ( currentQuestion < 5){
    
        showQuestion.innerHTML = quizQuestions[currentQuestion].question;
        choiceA.innerHTML = quizQuestions[currentQuestion].answer.answerA;
        choiceB.innerHTML = quizQuestions[currentQuestion].answer.answerB;
        choiceC.innerHTML = quizQuestions[currentQuestion].answer.answerC;
        choiceD.innerHTML = quizQuestions[currentQuestion].answer.answerD;

       
    }
    
    }
    choiceA.addEventListener("click", getCorrect);
    choiceB.addEventListener("click", getCorrect);
    choiceC.addEventListener("click", getCorrect);
    choiceD.addEventListener("click", getCorrect);

// check to find correct answer
function getCorrect (){
    
    if(choiceA.value[currentQuestion] !== quizQuestions[currentQuestion].correctAnswer) {
        timeLeft -= 15;
    }
    currentQuestion++;

    showQuestion.innerHTML = quizQuestions[currentQuestion].question;
    choiceA.innerHTML = quizQuestions[currentQuestion].answer.answerA;
    choiceB.innerHTML = quizQuestions[currentQuestion].answer.answerB;
    choiceC.innerHTML = quizQuestions[currentQuestion].answer.answerC;
    choiceD.innerHTML = quizQuestions[currentQuestion].answer.answerD;
    
}



// Stop the quiz and take user to enter their score
function endQuiz(){
var finalScore = timeLeft;
var finalScoreNotify = "Your final Score: " + finalScore;
finalScoreNotify = document.getElementById("show-quiz");


}