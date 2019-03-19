
$(document).ready(function(){
//set submit button and return feedback to user
$("#btnSubmit").click(function(event) {
  console.log("click");



if ($("input[name=choice1]:checked").val() == "Nephew") {
console.log("Correct");
//give "correct" message to user

$("#answer1").text("Answer 1 was correct");

} else {
  console.log("Wrong");   //text in console

$("#answer1").text("Answer 1 was wrong");   //give "wrong" message to user

}

if ($("input[name=choice2]:checked").val() == "Germany") {
console.log("Correct");
//output it's right answer
$("#answer2").text("Answer 2 was correct");
} else {
  console.log("Wrong");
  //output it's incorrect one
  $("#answer2").text("Answer 2 was wrong");
}


if ($("input[name=choice3]:checked").val() == "Alchemist") {
console.log("Correct");        //output it's incorrect one

$("#answer3").text("Answer 3 was correct");
} else {
  console.log("Wrong");
  $("#answer3").text("Answer 3 was wrong");     //give "wrong" message to user
}

if ($("input[name=choice4]:checked").val() == "A mountain") {
console.log("Correct");                   //output it's incorrect one
$("#answer4").text("Answer 4 was correct");
} else {
  console.log("Wrong");
  $("#answer4").text("Answer 4 was wrong");   //give "wrong" message to user
}

if ($("input[name=choice5]:checked").val() == "anxious") {
console.log("Correct");                    //output it's incorrect one


    $("#answer5").text("Answer 5 was correct");      //give "wrong" message to user

} else {
  console.log("Wrong");

    $("#answer5").text("Answer 5 was wrong");


}
event.preventDefault();


});

function submitAnswer(){       

console.log("Submit your answers")   //output of submit button
}
});