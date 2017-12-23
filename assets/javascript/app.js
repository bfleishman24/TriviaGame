var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var currentQuestion = 0;
var newGame ;




var gameQsAndAs =[
    {
        question:"What is 2+2?",
        answers:["1","2","4","This is a test"],
        correctAnswer: 2,
    },
    {
        question:"Spider-Man was biten by a radioactive what?",
        answers:["spider", "Elephant", "Cheetah", "Spooder"],
        correctAnswer: 0,
    },
    {
        question:"Which Woodland Create Is the Best?",
        answers:["Chipmunk","Otter","Snake","Owl"],
        correctAnswer: 3,
    },

];



    

// create variables for correct answers and wrong answers, for the timer
//create a set time out for each question of 20 seconds
// If the question is answered before the time expires clear that timeout and display the next question
//if the user answers the question wrong display they answered the question wrong and increase the wrong question var
//if the user answers the question right display they answered the question right andincrease the right question var
//Once the game is finished display the total wins and loses
//display a button to restart the game, if this button is pressed clear all correct answers and wrong answers and run through the questions again

function countDown() {
    $('.pickAnswer').click(function() {
        $(this).data('clicked', true);
    });
    var i = 30;
    var myInterval = setInterval(function() {

        if (i < 10) {
            $('#timerSeconds').html("0" + i);
            $(".pickAnswer").on("click", function() {
                clearInterval(myInterval);
            })
        } else {
            $('#timerSeconds').html(i);
            $(".pickAnswer").on("click", function() {
                clearInterval(myInterval);
            })
        }

        if (i === 0) {
            unansweredCounter++;
            clearInterval(myInterval);
            currentQuestionIndex++;
            $('#timer').effect("pulsate", {
                times: 25
            }, 1000 * 5);
            i = 30;
            postQuestion(currentQuestionIndex);
        } else {
            i--;
        }
    }, 1000);
}


function startTimer(){
    $('.pickAnswer').click(function() {
        $(this).data('clicked', true);
    });
    
    time=25
    var interval = setInterval(function(){
    if(time < 10) {

    $('#timer').html("0" + i);
    $(".pickAnswer").on("click", function() {
        clearInterval(myInterval);
    })
       
    }else {
        $('#timer').html(time);
        $(".pickAnswer").on("click", function() {
            clearInterval(myInterval);
        })
    }
    if (time === 0) {
        unansweredCounter++;
        clearInterval(interval);
        currentQuestion++;
        $('#timer').effect("pulsate", {
            times: 25
        }, 1000 * 5);
        i = 30;
        displayTrivia(currentQuestionIndex);
    } else {
        time--;
    }

},1000);
}




  function clear (){
    $(`#questionSpot`).html("");
    $(`#answers`).html("");
    $(`#timer`).html("");
}







function getQuestion(n) {
    
            if (currentQuestion < gameQsAndAs.length) {
                $('#newQuestion').remove();
                $('.choices').remove();
                countDown(5);
                $('#questionSpot').append("<div id='newQuestion'>" + gameQsAndAs[n].question + "</div>");
                for (var i = 0; i < gameQsAndAs[n].answers.length; i++) {
                    var newDiv = $("<div>");
                    newDiv.addClass("choices").attr("indexnum", i).text(gameQsAndAs[n].answers[i]);
                    $('#answers').append(newDiv);
                }
    
    
            } else {
                clear(); // the conditional successfully loops the game
                clearTimeout(countDown); 
            }
        }


function newGame (){
    getQuestion(currentQuestion);
}


$(".choices").on("click", function() {
    var userChoice = $(this).attr('indexnum'); // stored as a string not a number
    userChoice = parseInt(userChoice);

    // checks if user is correct and will tally accordingly
    if (userChoice === questions[currentQuestion].correctAnswer) {
        correct++;
        currentQuestionIndex++

    } else {
        incorrect++;
        currentQuestionIndex++;

    }
    getQuestoin(currentQuestion);
})

