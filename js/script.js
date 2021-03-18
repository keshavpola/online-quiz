
console.log("quiz page");
var que = [
  {
    "question": "which supports multiple inhritance in java ",
    option:[
     "inheritance",
     "method overloading",
     "abstraction",
     "interface",
  ],
    answer: "interface"
},
    {
        "question": "Inside which HTML element do we put the javascript ",
        option:[
         "<script></script>",
         "<javascript>",
         "<js>",
         "<scripting>",
      ],
        answer: "<script>"
      },
      {
        "question": " HTML stands for",
        option:[
         "hyper text mark up language",
         "abc",
         "<js>",
         "<scripting>",
      ],
        answer: 3
      },
      {
        "question": "Inside which HTML the JavaScript??",
        option:[
         "<script>",
         "<javascript>",
         "<js>",
         "<scripting>",
      ],
        answer: "<js>"
      },
  ]
  let index=0;
let attempt=0;
let  score=0;
let wrong=0;
let questions = que.sort(function(){
    return 0.5 -Math.random();
}) ;
// console.log(questions);
let totalQuestion =questions.length;


 $(function () {
     //timer code starts here
     let totalTime=200;//200 sec for timer
     let min=0;
     let sec=0;
     let counter=0;

     let timer=setTimeout(function () {
         counter++;
         min=Math.floor((totalTime - counter) /60);//calculating minute
         sec=totalTime - min *60 - counter;
 $(".timerBox span").text(min + ":" + sec);

 if(counter==totalTime)
{
    alert("time is up: press ok to see result");
     result();
     clearInterval(timer);
 }
         //console.log("min ="+min);
         //console.log("sec ="+sec);
     })
    //timer code ends here

    //print questions
     printquestion(index);
 });
//function to print question start
function printquestion(i) {
    console.log(questions[i].answer);

    $(".questionBox").text(questions[i].question);
    $("#1").text(questions[i].option[0]);
    $("#2").text(questions[i].option[1]);
    $("#3").text(questions[i].option[2]);
    $("#4").text(questions[i].option[3]);
}

//function to print question end

//function to check answer start

function checkAnswer(option) {
    attempt++;
    let optionClicked =$(option).data("opt");
    console.log(questions[index]);

    if(optionClicked === questions[index].answer){
        $(option).addClass("right");
        score++;
    }
    else{
        $(option).addClass("wrong")
        wrong++;
    }
    $(".scoreBox span").text(score);
    $(".optionBox span").attr("onclick","");
}
//function to check answer end


//function for the next start
function showNext(){

    if(index >= (questions.length - 1)){
         showResult(0);
         return;
    }
    index++;


    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick","checkAnswer(this)");
    printquestion(index);
}
//function for the next end

//function for result start
function showResult(j){
    if(j == 1 && index < questions.length-1 &&!confirm("Quiz has not finished yet: press ok to skip quiz and ger the final result")){
        return ;
    }


  result();
    

}

//function for result end

//result function start
function result(){
    $("#questionScreen").hide();
    $("#resultScreen").show();

    $("#totalQuestion").text(totalQuestion);
    $("#attemptedQuestion").text(attempt);
    $("#correctAnswer").text(score);
    $("#wrongAnswer").text(wrong);

}
//result function end 