var countDownEl = document.getElementById('timer');
var startQuizBtn = document.getElementById('start');

// Create the Questions
var quizQuestions = [
{ question: 'What Color is the Sky?',
answer: {
A: "Green",
B: "Red",
C: "Blue",
D: "Black"
},
correctAnswer: "C"
}, 
{ question: 'Which animal is white?',
answer: {
A: "Zebra",
B: "Giraffe",
C: "Aligator",
D: "Lion"
},
correctAnswer: "A"
}, 
{ question: 'What is not a food',
answer: {
A: "Plastic",
B: "Potato",
C: "Steak",
D: "Chip"
},
correctAnswer: "A"
}, 
{ question: 'Which is NOT a number?',
answer: {
A: "4",
B: "L",
C: "3",
D: "2"
},
correctAnswer: "B"
}, 
{ question: 'Which is not a breed of dog?',
answer: {
A: "Labrador Retriever",
B: "German Sheperd",
C: "Husky",
D: "Tabby"
},
correctAnswer: "D"
}, 
];

function timercountdown() {
var timeLeft = 5;

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

}
startQuizBtn.onclick = timercountdown;

//Create the Quiz Function
