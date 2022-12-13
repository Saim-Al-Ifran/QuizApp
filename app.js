


const startQuiz = document.querySelector(".MyBtn");
const myQuizApp = document.querySelector(".MyQuizApp");
const rulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".ExitButton");
const continueButton = document.querySelector(".continueButton");
const questions = document.querySelector(".Questions");
const nextBtn = document.querySelector(".nextBtn");

let count = 0;


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
     nextBtn.style.display = "block";

     showQuestions(0);
});


nextBtn.addEventListener("click",function(){
           count += 1;
         
           if(count < 6){
               showQuestions(count);
           }else{
               alert("you have completed your exam")
           }
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

      let totalQueTag = `<p>${Questions[index].numb} of ${Questions.length} Questions</p>`;
      totalQue.innerHTML = totalQueTag;              
                                
     quizOptions.innerHTML = optionTag;

     const selectOptions = document.querySelectorAll(".options");

       for(let i = 0; i < selectOptions.length; i++){
                selectOptions[i].addEventListener("click",function(){
                           if(this.innerText == Questions[index].answer){
                                  this.classList.add("correct");       
                           }else{
                              //     this.classList.add("correct");
                                  this.classList.add("incorrect"); 
                           }

                           for(let j = 0; j <selectOptions.length; j++){
                                  console.log(selectOptions[j])
                                  selectOptions[j].style.pointerEvents = "none";
                           }
       
                })
                
       }



}


 