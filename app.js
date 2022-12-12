


const startQuiz = document.querySelector(".MyBtn");
const myQuizApp = document.querySelector(".MyQuizApp");
const rulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".ExitButton");
const continueButton = document.querySelector(".continueButton");
const questions = document.querySelector(".Questions");


startQuiz.addEventListener("click",function(){
         myQuizApp .style.display = "none";
         rulesBox.classList.add("activeInfo");
})


exitButton.addEventListener("click",function(){
     myQuizApp .style.display = "block";
     rulesBox.classList.remove("activeInfo");
});

continueButton.addEventListener("click",function(){
     rulesBox.classList.remove("activeInfo");
     questions.classList.add("activeQuiz");
     showQuestions(0);
});


const showQuestions = (index)=>{

     let mainQuestion = document.querySelector(".text");
     let quizOptions = document.querySelector(".options");

     mainQuestion.innerHTML = `<span>${Questions[index].numb}. ${Questions[index].question}</span>`;
     
     // for(let i = 0; i <=Questions[index].options.length-1 ; i++){

                
     //           let optionTag = `<span>${Questions[i].options[i]}</span>`;
     //           quizOptions.innerHTML = optionTag;
     // }

       let optionTag = `<span>${Questions[0].options[0]}</span>`;
       quizOptions.innerHTML = optionTag;


}


 