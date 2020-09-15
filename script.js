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

var startButton = document.querySelector("#start");
var welcomeScreen = document.querySelector("#quizBody");

startButton.addEventListener("click", function () {
    quizBody.style.display = quizBody.style.display === 'none' ? '' : 'none';
    document.querySelector("#questions").style.display = "block";
    loadQuiz(quesCounter);
});

function loadQuiz(num){
    var p = document.createElement("p");
    p.textContent = questions[num].ask;
    document.querySelector("#questions").append(p);

    for(var i=0;i<questions[num].options.length;i++){
        var btn = document.createElement("button");
        btn.setAttribute("class", "ans");
        btn.setAttribute("data-ans", questions[num].options[i]);
        btn.textContent = questions[num].options[i];
        document.querySelector("#questions").append(btn);
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

}

document.querySelector(".ans").addEventListener("click", function(){
    var userAns = this.getAttribute("data-ans");
    console.log("User Ans: "+userAns);

    if(userAns === questions[quesCounter].answer){
        score = score + 10;
    }
    else{
        time = time - 5;
    }
})



