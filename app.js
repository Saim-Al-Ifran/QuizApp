
const startQuiz = document.querySelector(".MyBtn");
const myQuizApp = document.querySelector(".MyQuizApp");
const rulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".ExitButton");
const continueButton = document.querySelector(".continueButton");
const questions = document.querySelector(".Questions");
const nextBtn = document.querySelector(".nextBtn");
let timeLine = document.querySelector(".time_lines");
let exitQuiz = document.querySelector(".quit");

let count = 0;
const tickIcon  = `<div class="tick icon"><i class="fas fa-check"></i></div>`;
const corssIcon = `<div class="cross icon"><i class="fas fa-times"></i></div>`;
let timeCount = 15;
let countTimer;
let widthValue = 0;
let animationTimer;
let userScore = 0;




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
     lineAnimtion(widthValue);
  


});



nextBtn.addEventListener("click",function(){
            count++;
           if(count < Questions.length){     
               showQuestions(count);
           }else{
                showResultBox()

           }
           this.style.display = "none";
            
           startTimer(timeCount);


           lineAnimtion(widthValue);
        
           
        
});

exitQuiz.addEventListener("click",function(){
       window.location.reload()
});


function showResultBox(){


       rulesBox.classList.remove("activeInfo");
       document.querySelector(".Questions").classList.remove("activeQuiz");
       document.querySelector(".result_box").classList.add("activeResult");
  
       const scoreText = document.querySelector(".score_text");
  
       if(userScore >= 1 && userScore < 3 ){
           const scoreTag = `<span>Carry On👍 You Got <p>${userScore}</p> Out Of ${Questions.length}</span>`;
           scoreText.innerHTML = scoreTag;
       }else if(userScore >= 3 && userScore < 5){
            const scoreTag = `<span>Congratulations😍 You Got <p>${userScore}</p> Out Of ${Questions.length}</span>`;
            scoreText.innerHTML = scoreTag;
       }else if(userScore >= 5){
              const scoreTag = `<span>Hurrayy!!!😍 You Got <p>${userScore}</p> Out Of ${Questions.length}</span>`;
              scoreText.innerHTML = scoreTag;
        }else{
            const scoreTag = `<span>You failed bitch😂😂 You Got <p>${userScore}</p> Out Of ${Questions.length}</span>`;
            scoreText.innerHTML = scoreTag;
       }

}

 

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
                                  userScore += 1;
                                  console.log(userScore)
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
                           clearInterval(countTimer);
                           clearInterval(animationTimer);                           

       
                })
                
       }



}


 function startTimer(time){
          countTimer = setInterval(timer,1000);
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

 function lineAnimtion(time){
       animationTimer = setInterval(timer,50);
       function timer(){
               time += 1;
                timeLine.style.width = time + "px";
               if(time == 320){
                      clearInterval(animationTimer)
               }
       }
 }

 