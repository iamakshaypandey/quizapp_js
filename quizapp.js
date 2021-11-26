const prom=require("prompt-sync")()

var question_list=[{question:"Inside which HTML element do we put the JavaScript",
answer:["A. The <script> tag","B. scripting","C. <js>"]},
{question:"What does HTML stand for?",
answer:["A.Hyper text markup language","B. Hyperlinks and text markup language","C. Home toole markup language"]},
{question:"Who is making the Web standards?",
answer:["A. google","B. The world wide web consortium","C. microsoft"]},
{question:"What does CSS stand for?",
answer:["A. Computer Style Sheet","B. Cascading Style Sheet","C. Coloreful Style Sheet"]},
{question:"What does SQL stand for?",
answer:["A. strong question language","B. structured query language","C. structured question language"]},
{question:"Which SQL statement is used to extract data from a database?",
answer:["A. open","B. get","C. select"]},
{question:"What is MySQL?",
answer:["A. cross-plateform ,open shorce and free","B. A reletional database management system","C. developed,distributed,and supported by oracle corporation"]},
{question:"What is a correct syntax to output 'Hello World' in Python?",
answer:["A. p('Hello World')","B. python('Hello World')","C. print('Hello World')"]},
{question:"The external JavaScript file must contain the <script> tag.",
answer:["A. False","B. True"]},
{question:"How do you write 'Hello World' in an alert box?",
answer:["A. msg('Hello World')","B. alertBox('Hello World')","C. alert('Hello World')"]}]

var answer_list=["A","A","B","B","B","C","B","C","A","C"]

var score=0;
var question_number=1
var user_name=prom("what is your name? : ")
console.log("welcom to the quiz game"+" "+user_name+" "+"lets play");

let play_game=(question_list,answer_list)=>{
    for(i in question_list){
        var current_question=question_list[i]
        console.log("your question"+""+"in your screen \n\n",question_number,current_question.question);
        for(j of current_question.answer){
            console.log(j);
        }
        var user_answer=prom("plese enter your answer :")
        if(user_answer.toUpperCase()===answer_list[i]){
            console.log("right");
            score++
        }else{
            console.log(question_number+"  answer is worng!");
        }
        console.log("current score is :",score);
        question_number++

    }
    console.log("congrats you SCORED: ",score);
}
play_game(question_list,answer_list)
