


const startQuiz = document.querySelector(".MyBtn");
const myQuizApp = document.querySelector(".MyQuizApp");
const rulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".ExitButton");
const continueButton = document.querySelector(".continueButton");
const questions = document.querySelector(".Questions");
const nextBtn = document.querySelector(".nextBtn");

let count = 0;
const tickIcon  = `<div class="tick icon"><i class="fas fa-check"></i></div>`;
const corssIcon = `<div class="cross icon"><i class="fas fa-times"></i></div>`;
let timeCount = 15;




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
     nextBtn.style.display = "none";
     showQuestions(0);

     startTimer(timeCount);


});


nextBtn.addEventListener("click",function(){
           count += 1;
         
           if(count < 6){
               showQuestions(count);
           }else{
               alert("you have completed your exam")
           }
           this.style.display = "none";
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
                                  selectOptions[i].insertAdjacentHTML("beforeend",tickIcon);     
                           }else{
                                  this.classList.add("incorrect");
                                  for(let z = 0; z <selectOptions.length;z++){
                                    
                                        if(selectOptions[z].innerText == Questions[index].answer){
                                            selectOptions[z].setAttribute("class","options correct");  
                                            selectOptions[z].insertAdjacentHTML("beforeend",tickIcon);
                                        }
                                        
                                  } 
                                  selectOptions[i].insertAdjacentHTML("beforeend",corssIcon);
                                  
                           }

                           for(let j = 0; j <selectOptions.length; j++){
                              
                                  selectOptions[j].style.pointerEvents = "none";
                           }
                           nextBtn.style.display = "block";
                            
                           

       
                })
                
       }



}


 function startTimer(time){
        let countTimer = setInterval(timer,1000);
        function timer(){
                document.querySelector(".Seconds").innerText = time;
                time--;
                if(time < 9){
                      let addZero = document.querySelector(".Seconds").innerText;
                       document.querySelector(".Seconds").innerText = 0 + addZero;
                }
                if(time < 0){
                    clearInterval(countTimer);
                    document.querySelector(".Seconds").innerText = "00";
                }
        }
 }