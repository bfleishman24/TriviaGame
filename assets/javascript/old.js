// version .05 of my code.  I like having this in here showing where I started.  




function countDown (count) {
    if (count > 0) {
     $(`#timer`).html(count);
     setTimeout (function() { countDown(count-1); }, 1000);
     } 
  }

     var i= -1;


function startGame (){
        i = (i + 1) % gameQsAndAs.length;
        qsAsked++;
        $(`#question`).html(gameQsAndAs[i].question);
        $(`#an1`).html(gameQsAndAs[i].answers.a);
        $(`#an2`).html(gameQsAndAs[i].answers.b);
        $(`#an3`).html(gameQsAndAs[i].answers.c);
        $(`#an4`).html(gameQsAndAs[i].answers.d);
        console.log(qsAsked);
        newGame = setTimeout(startGame, 5000);
        countDown(5);
        if(qsAsked > gameQsAndAs.length){
            clearTimeout(startGame);
            clearTimeout(newGame);
            clear();
            console.log("this is running")
        }
       
   
   
}




function clear (){
    $(`#question`).html("");
    $(`#an1`).html("");
    $(`#an2`).html("");
    $(`#an3`).html("");
    $(`#an4`).html("");
    $(`#timer`).html("");
}

//answer one button
    $( "#an1" ).click(function(){
    if( this.attr(gameQsAndAs[i].correctAnswer)){
        correct++;
      alert("Correct!"); 
      console.log(gameQsAndAs[i].correctAnswer);
    } 
    else{ alert("Wrong");
    incorrect++;
    console.log(gameQsAndAs[i].correctAnswer)}
    });

    // answer 2 button
    $( "#an2" ).click(function() {
    if( gameQsAndAs[i].correctAnswer === true){
        correct++;
       alert("Correct!"); 
    } 
    else{ alert("Wrong")}
    incorrect++;
    
    });

    // answer 3 button
    $( "#an3" ).click(function() {
    if( gameQsAndAs[i].correctAnswer === true){
        correct++;
        alert("Correct!"); 
     } 
     else{ alert("Wrong")}
     incorrect++;
     
    });

    // answer 4 button
    $( "#an4" ).click(function() {
    if(gameQsAndAs[i].correctAnswer === true){
            correct++;
            alert("Correct!"); 
    } 
      else{ alert("Wrong")}
      incorrect++;
      
    });




// function countDown() {
//     $('.choices').click(function() {
//         $(this).data('clicked', true);
//     });

//     var i = 5;
//     var myInterval = setInterval(function() {

//         if (i < 10) {
//             $('#timer').html("0" + i);
//             $(".choices").on("click", function() {
//                 clearInterval(myInterval);
//             })
//         } else {
//             $('#timer').html(i);
//             $(".choices").on("click", function() {
//                 clearInterval(myInterval);
//             })
//         }

//         if (i === 0) {
//             noAnswer++;
//             clearInterval(myInterval);
//             currentQuestionIndex++;
//             i = 30;
//             postQuestion(currentQuestionIndex);
//         } else {
//             i--;
//         }
//     }, 1000);
// }
