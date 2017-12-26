// create an object containing questions and answers and a correct answer
// create a variable for correct answers and incorrect answers and unanswered and timer and current question which will filter thorugh the questions object

$(document).ready(function(){

    var startGameBttn = $(`<button>`);
    startGameBttn.addClass(`startGame`).text(`Start The Game!`);
    $(`#timer`).append(startGameBttn);

    $(`.startGame`).on(`click`, function(){
        displayTrivia(currentQ);
    })






})



var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time =  "";
var currentQ = 0;

var triviaQsandAs = [
    {
        question:"how many numbers are in a bakers dozen?",
        answers:["1","13","45","6"],
        correctAnswer:1,
    },
    {
        question: "The Chicago Bears were originally the",
        answers:["the Chicago Cardinals","The Chicago Fire","Nothing","The Decatur Staleys"],
        correctAnswer:3,
    },
    {
        question: "Blue and Red Make What Color",
        answers:["Pink", "Yellow","Black","Purple"],
        correctAnswer:3,
    },
    {
        question: "Which Is NOT A Fruit",
        answers:["Tomato","Avacado","Eggplant","Lime"],
        correctAnswer:2,
    },
    {
        question: "How Many Strings Does A Guitar Have",
        answers:["6","5","4","7"],
        correctAnswer:1,
    },
    {
        question: "Who Inveted The Hamburger",
        answers:["The Duke Of Hamburg","The Dutches of Burg","Oscar Myer","Who Cares, I Want One Now!"],
        correctAnswer:3,
    },
];

function displayTrivia(n) {

    if(currentQ < triviaQsandAs.length){
   
        $(`#questionSpot`).empty();
        $(`#answers`).empty();
        $(`#questionSpot`).append(`<div>` + triviaQsandAs[n].question + `<div`);
        startTimer();
        for(i = 0; i < triviaQsandAs[n].answers.length;i++){
            var newDiv = $("<div>");
            newDiv.addClass("choices").attr("indexnum", i).text(triviaQsandAs[n].answers[i]);
            $('#answers').append(newDiv);        }
    } else{
        quizFinished();
    };

    $(`.choices`).on(`click`, function(){
        var playerClick = $(this).attr(`indexnum`);
        playerClick= parseInt(playerClick);
        console.log("this worked!")
    
        if( playerClick === triviaQsandAs[currentQ].correctAnswer){
            correct++;
            currentQ++;
        }else{
            incorrect++;
            currentQ++;
        }
        displayTrivia(currentQ);
        
    })
}

function startTimer(){
    $('.choices').click(function() {
        $(this).data('clicked', true);
    });
    
    time = 25;
    var interval = setInterval(function(){
    if(time < 10) {

    $('#timer').html("0" + time);
    $(".choices").on("click", function() {
        clearInterval(interval);
    })
       
    }   else {
        $('#timer').html(time);
        $(".choices").on("click", function() {
            clearInterval(interval);
        })
    }
    if (time === 0) {
        unanswered++;
        clearInterval(interval);
        currentQ++;
        displayTrivia(currentQ);
    } else {
        time--;
    }

},1000);
}

// function restart(){

//     var startGameBttn = $(`<button>`);
//     startGameBttn.addClass(`startGame`).text(`Start The Game!`);
//     $(`#timer`).append(startGameBttn);

//     $(`.startGame`).on(`click`, function(){
//         displayTrivia(currentQ);
//     })
// };



function quizFinished(){
    $(`#questionSpot`).empty();
    $(`#answers`).empty();
    $(`#timer`).append(`<div>` + "Correct Answers :" + correct + `</div>`);
    $(`#questionSpot`).append(`<div>` + "Incorrect Answers :" + incorrect + `</div>` + `<div>` + "Questions Unanswered :" + unanswered  + `</div>`);

    // setTimout(function(){
    //     restart();
    // }, 5000 )

}

// create a function that grabs the question and auto populates it to the html with in a new div
// this funciton will also grab the questions array for the same object indecy and popluate those questions into html in new divs with a class
// each new div needs to be clickable
// when the div is clicked if its indicey matches the number for the correct answer mark it as correct and move to the next question
// if the choice they click on is wrong, reset the timer and move to the next question
// create a timer that runs once a  question is visible, if the timer runs out, move to the next question
// if the user makes a choice stop and reset the timer and move to the next question
