// DATA BASE

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDm8FlwTzdBIGUg39rmx1nCVRMiVWB1mI4",
    authDomain: "quizapp-with-database.firebaseapp.com",
    projectId: "quizapp-with-database",
    storageBucket: "quizapp-with-database.appspot.com",
    messagingSenderId: "666129858874",
    appId: "1:666129858874:web:e14331d2f7a1fa45fd5003",
    measurementId: "G-8BG0ELFY1Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const databs = getDatabase();
// DATA BASE







var questions = [{

    question: "What do you understand by HTML?",
    answer: ["HTML describes the structure of a webpage", "HTML is the standard markup language mainly used to create web pages", "HTML consists of a set of elements that helps the browser how to view the content"," All of the above"],
    correct: "All of Above",
},

{
    question: "Who is the father of HTML?",
    answer: [" Rasmus Lerdorf","Tim Berners-Lee"," Brendan Eich"," Sergey Brin"],
    correct: "Tim Berners-Lee", 
},

{
    question: "Que 3: HTML stands for ___?",
    answer: ["  HyperText Markup Language"," HyperText Machine Language","  HyperText Marking Language","  HighText Marking Language"],
    correct: "HyperText Markup Language", 
 
},
{
    question: "Which is used to read an HTML page and render it?",
    answer: [" Web server"," Web network","  Web browser","  Web matrix"],
    correct: "Web browser",
},

{
    question: "Which tag is used for inserting the largest heading in HTML?",
    answer: [" head"," h1"," h6","heading"],
    correct: "h1",

},
]


window.sendValue =function(){
    
    
    console.log(questions)
    var reference =ref( databs ,"questions/")
    set(reference, {text:questions})
}

sendValue();

var question = document.getElementById("question")
var currentQuestion = document.getElementById("currentQuestion")
var totalQuestions = document.getElementById("totalQuestions")
var answerParent = document.getElementById("answerParent")
var indexNumber = 0;
var Score = 0;

function startQuiz(){
    question.innerHTML = questions[indexNumber].question;
    answerParent.innerHTML = " ";
    for (var i=0; i < questions[indexNumber].answer.length; i++) {
        answerParent.innerHTML += `<div class="col-md-6 py-2">
        <button onclick="checkQuestion(this,${questions[indexNumber].answer[i]},${questions[indexNumber].correct})" class="btn w-100 btn-info">${questions[indexNumber].answer[i]}</button>
        </div>`;
    }
    totalQuestions.innerHTML = questions.length;
    currentQuestion.innerHTML = indexNumber + 1


    
}

startQuiz();


window.nextQuestion = function(){
    if (indexNumber == questions.length - 1) {
        alert("quiz completed");
    } else {
        indexNumber = indexNumber + 1 ;
        startQuiz();
    }
}

// function nextQuestion(){
//     if (indexNumber == questions.length -1) {
//         alert("quiz completed");
//     } else {
//         indexNumber = indexNumber + 1 ;
//         startQuiz();
//     }
// }

function checkQuestion(userOption, correct) {
    var userOption = elem.innerHTML;
    if (userOption == correct) {
        Score = Score + 1 ;
    }

    
    var allOptionBtns = answerParent.getElementsByTagName("button");
    for (var i =0; i < allOptionBtns.length; i++) {
        allOptionBtns[i].disabled = true;
        if (allOptionBtns[i].innerHTML == correctoption){
            allOptionBtns[i].className += "bg-success";
        } else{
            allOptionBtns[i].className += "bg-danger"
        }
    }
}

