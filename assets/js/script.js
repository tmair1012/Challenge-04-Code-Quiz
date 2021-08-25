var countDownEl = document.getElementById('timer');
var startQuizBtn = document.getElementById('start');

function timercountdown() {
var timeLeft = 75;

// Create the timer function
var quizTimer = setInterval(function(){
// Start countdown from 75 seconds    
    
// For loop to continue quiz
if (timeLeft > 1){
countDownEl.textContent = 'timeleft: ' + timeLeft;

// Decrement 'timeleft'
timeLeft--;
}
else{
    clearInterval(quizTimer);
}
}, 1000);

}
startQuizBtn.onclick = timercountdown;