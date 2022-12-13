


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
     let quizOptions = document.querySelector(".MyOptions");
     let totalQue =  document.querySelector(".total_que");

     mainQuestion.innerHTML = `<span>${Questions[index].numb}. ${Questions[index].question}</span>`;
 
 
     
      let optionTag  =  `<div class="options">${Questions[index].options[0]}</div> 
                        <div class="options">${Questions[index].options[1]}</div>
                        <div class="options">${Questions[index].options[2]}</div>
                        <div class="options">${Questions[index].options[3]}</div>`;



                                      
       quizOptions.innerHTML = optionTag;


}


 