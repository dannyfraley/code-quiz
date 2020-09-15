var questions = [
    {
        ask: "How many licks does it take to get to the tootsie roll center of a tootsie pop?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        ask: "Who farted?",
        options: ["You did.", "I did.", "He did.", "She did."],
        answer: "I did."
    },
    {
        ask: "Can I borrow some money?",
        options: ["Yeah, how much do you need?", "Why do you need it?", "No fucking way.", "Sorry, I'm broke."],
        answer: "No fucking way."
    },
    {
        ask: "Who shot JFK?",
        options: ["Lee Harvey Oswald", "John Wilkes Booth", "James Earl Ray", "Meredith Baxter Birney"],
        answer: "Lee Harvey Oswald"
    },
    {
        ask: "Why you gotta be like that?",
        options: ["That's just how I am.", "Be like what?", "What the hell is that supposed to mean?", "Deal with it."],
        answer: "Be like what?"
    }
];
var quesCounter = 0;
var score = 0;
var time = 60;
/*var timeDisplay = document.querySelector("#time");
var timeHide = document.querySelector(".go-away");
var timerText = document.querySelector("#time-style");*/

var startButton = document.querySelector("#start");
var welcomeScreen = document.querySelector("#quizBody");

startButton.addEventListener("click", function () {
    quizBody.style.display = quizBody.style.display === 'none' ? '' : 'none';
    document.querySelector("#questions").style.display = "block";
    loadQuiz(quesCounter);
});

function loadQuiz(num){
    var p = document.createElement("h2");
    p.textContent = questions[num].ask;
    document.querySelector("#questions").append(p);
    for(var i=0;i<questions[num].options.length;i++){
        var answerButton = document.createElement("button");
        answerButton.setAttribute("class", "answerButton");
        answerButton.setAttribute("data-ans", questions[num].options[i]);
        answerButton.textContent = questions[num].options[i];
        document.querySelector("#questions").append(answerButton);
        answerButton.onclick = ansCheck;
    }
}
    //check if counter variable is not equal to questions.length
    //then we will create <p> to add question and loop over options array and create button for each option
    //add data attribute "data-ans" to each button and valur would be each option
    //append question and options to div in HTML file
    //handle click event for options and get user answer via data-ans attribute
    //compare user answer with actual answer from array and if it's correct increment score by 10 else decrement number of seconds from timer variable
    //increment quesCounter for next question
    //store user score to the localstorage
    /*
    var temp = JSON.parse(localstorage.getItem("userData")) || [];
    var uData = {
        initials: textboix initials value,
        score:score
    }
    temp.push(uData);
    localstorage.setItem("userData", JSON.stringify(temp));
    */

function ansCheck(){
    var userAns = this.getAttribute("data-ans");
    console.log("User Ans: "+userAns);
    
    
    if(userAns === questions[quesCounter].answer){
        score = score + 10;
        quesCounter++;
        loadQuiz(quesCounter);
    }
    else{
        time = time - 5;
        quesCounter++;
        loadQuiz(quesCounter);
    }
}

/*var time = 59;
var timeElapsed = 0;
// Will be using later . . .
var interval;

function renderTime() {
  console.log({timeElapsed, tillEnd: time - timeElapsed});
}

function startTimer() {
  renderTime();

  // setInterval format = setInterval(function(){}, delay);
  interval = setInterval(function() {
    // Stop condition for the timer 
    // (must be within the setInterval)
    if (time - timeElapsed <= 0) {
      stopTimer();
      return;
    }

    if (timeElapsed % 9 === 0) { //fakes a wrong answer
      wrongPenalty();
    } else {
      timeElapsed++;
    }

    renderTime();
  }, 1000)
}

startTimer();

function wrongPenalty() {
  timeElapsed += 5;
}

function stopTimer() {
  console.log("Time's Up!!");
  clearInterval(interval);
}*/
