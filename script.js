var questions = [
    {
        ask: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answer: "<script>"
    },
    {
        ask: "Where is the correct place to insert a JavaScript?",
        options: ["The <head> section", "Both the <head> section and the <body> section are correct", "The <body> section", "The <rhythm> section"],
        answer: "Both the <head> section and the <body> section are correct"
    },
    {
        ask: "How does a while loop start?",
        options: ["while (i <=10)", "while i = 1 to 10", "while (i <= 10; i++)", "while e. coyote"],
        answer: "while (i <=10)"
    },
    {
        ask: "How does a for loop start?",
        options: ["for (i = 0; i <=5)", "for i = 1 to 5", "for (i = 0; i <=5; i++)", "for (i <= 5; i++)"],
        answer: "for (i = 0; i <=5; i++)"
    },
    {
        ask: "How can you add a comment in JavaScript?",
        options: ["`This is a comment", "//This is a comment", "<!--This is a comment-->", "THIS IS A COMMENT!"],
        answer: "//This is a comment"
        
    }
];
var quesCounter = 0;
var score = 0;
var time = 60;
var endGame = false;


var startButton = document.querySelector("#start");
var welcomeScreen = document.querySelector("#quizBody");

startButton.addEventListener("click", function () {
    quizBody.style.display = quizBody.style.display === 'none' ? '' : 'none';
    document.querySelector("#questions").style.display = "block";
    loadQuiz(quesCounter);
});

function loadQuiz(num){
    if (num >= questions.length-1) {
        endGame = true;
        console.log(endGame);
    }
    var p = document.createElement("h2");
    p.textContent = questions[num].ask;
    document.querySelector("#questions").innerHTML = "";
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

function ansCheck(){
    var userAns = this.getAttribute("data-ans");
    console.log("User Ans: "+userAns);
    
    
    if(userAns === questions[quesCounter].answer){
        score = score + 10;
    }
    else{
        time = time - 5;
       
    }
    console.log("endGame ", endGame)
    if (endGame){
        return endQuiz()
    }
    quesCounter++;
    loadQuiz(quesCounter);
}

function endQuiz() {
    document.querySelector("#questions").innerHTML = "";
    var finalScore = document.createElement("h2");
    finalScore.textContent = "Congratulations! Your final score is " +score + "!";
    document.querySelector("#questions").append(finalScore);
}




// var time = 59;
// var timeElapsed = 0;
// // Will be using later . . .
// var interval;

// function renderTime() {
//   console.log({timeElapsed, tillEnd: time - timeElapsed});
// }

// function startTimer() {
//   renderTime();

//   // setInterval format = setInterval(function(){}, delay);
//   interval = setInterval(function() {
//     // Stop condition for the timer 
//     // (must be within the setInterval)
//     if (time - timeElapsed <= 0) {
//       stopTimer();
//       return;
//     }
//     else {
//       timeElapsed++;
//     }

//     renderTime();
//   }, 1000)
// }

// startTimer();

// function wrongPenalty() {
//   timeElapsed += 5;
// }

// function stopTimer() {
//   console.log("Time's Up!!");
//   clearInterval(interval);
// }

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
