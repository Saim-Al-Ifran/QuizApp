
const MyBtn = document.querySelector(".MyBtn");
const RulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".Buttons .ExitButton");
const continueButton = document.querySelector(".continueButton");
const questions = document.querySelector(".Questions");
const timeCount = document.querySelector(".TimeCount .Seconds");
const timeLine = document.querySelector(".time_lines");


MyBtn.onclick = () =>{
    RulesBox.classList.add("activeInfo");
     
    document.querySelector(".MyQuizApp").style.display = "none";     
}

exitButton.onclick =()=>{
     RulesBox.classList.remove("activeInfo");
     document.querySelector(".MyQuizApp").style.display = "block";
     
}
continueButton.onclick = () =>{
    RulesBox.classList.remove("activeInfo");
    questions.classList.add("activeQuiz");
    showQuestions(0);
    startTimer(timeValue);
    startTimerLine(0);
}

 const nextBtn = document.querySelector(".nextBtn");

 const resultBox = document.querySelector(".result_box");
 const quitQuiz = document.querySelector(".quit");

 
 
 quitQuiz.onclick = () =>{
        window.location.reload();
 }

 let queCount = 0;
 let counter;
 let timeValue = 15;
 let counterLine;
 let widthValue = 0;
 let userScore = 0;

 nextBtn.onclick = () =>{
       if(queCount < Questions.length -1){
            queCount++;
            showQuestions(queCount)
       }else{
          //   alert("Congratulations You compeleted your task😍");
            showResultBox()
       }
       clearInterval(counter);
       startTimer(timeValue);

       clearInterval(counterLine);
       startTimerLine(widthValue);
       nextBtn.style.display = "none";  



 }




function showQuestions(index){
   let   que_text = document.querySelector(".text");
   const optionList = document.querySelector(".MyOptions");
   let   optionTag = `<div class="options">`+ Questions[index].options[0]+`</div>`
                      +`<div class="options">`+ Questions[index].options[1]+`</div>`
                      +`<div class="options">`+ Questions[index].options[2]+`</div>`
                      +`<div class="options">`+ Questions[index].options[3]+`</div>`;

   let que_tag = "<span>" + Questions[index].numb+ '.' + Questions[index].question+ " </span>";
   const totalQuestion = document.querySelector(".total_que");
   let totalQuestionTag = '<p>'+Questions[index].numb+" of 5 Questions"+'</p>';

   que_text.innerHTML = que_tag;
   optionList.innerHTML = optionTag;
   totalQuestion.innerHTML = totalQuestionTag;


   const option = document.querySelectorAll(".options");
   
   for(let i = 0; i <option.length; i++){
         option[i].setAttribute("onclick","optionSelected(this)");
        
        // console.log(option[i])
   }
  
    
}

let tickIcon ='<div class="tick icon"><i class="fas fa-check"></i></div>';
let crossIcon =' <div class="cross icon"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
        console.log(answer); 
      clearInterval(counter);
      clearInterval(counterLine);
       let userAnswer = answer.innerText;
       let correctAnswer = Questions[queCount].answer;
       const option = document.querySelectorAll(".options");

       if(userAnswer == correctAnswer){
             userScore += 1
             console.log(userScore)
             answer.classList.add("correct");
               
             for(let i = 0; i <option.length; i++){
                  option[i].style.pointerEvents = "none";
             }
             answer.insertAdjacentHTML("beforeend",tickIcon);

       }else{
              
             answer.classList.add("incorrect");
             
             for(let i = 0; i <option.length; i++){
                  option[i].style.pointerEvents = "none";
                  
                  if(option[i].textContent == correctAnswer){
                          option[i].setAttribute("class","options correct");
                          option[i].insertAdjacentHTML("beforeend",tickIcon);
                  }
             }
             answer.insertAdjacentHTML("beforeend",crossIcon);
       }

       nextBtn.style.display = "block";  
     
}

function showResultBox(){
     RulesBox.classList.remove("activeInfo");
     questions.classList.remove("activeQuiz");
     resultBox.classList.add("activeResult");

     const scoreText = document.querySelector(".score_text");

     if(userScore >= 1){
         const scoreTag = '<span>Carry On👍 You Got <p>'+userScore+'</p> Out Of'+Questions.length+'</span>';
         scoreText.innerHTML = scoreTag;
     }else if(userScore > 3){
          const scoreTag = '<span>Congratulations😍 You Got <p>'+userScore+'</p> Out Of'+Questions.length+'</span>';
          scoreText.innerHTML = scoreTag;
     }else{
          const scoreTag = '<span>You failed bitch😂😂 You Got <p>'+userScore+'</p> Out Of '+Questions.length+'</span>';
          scoreText.innerHTML = scoreTag;
     }
}

function startTimer(time){
        counter = setInterval(timer, 1000);
     function timer(){
          timeCount.textContent = time;
          time--;
          if(time < 9){
               let addZero = timeCount.textContent;
               timeCount.textContent = 0 + addZero;
                
          }
          if(time < 0){
                clearInterval(counter);
                timeCount.textContent = "00";
               
          }
     }

}

function startTimerLine(time){

    counterLine = setInterval(timer,50);
    function timer(){
         time += 1;
         timeLine.style.width = time + "px";
         if(time > 319){
            clearInterval(counterLine);
         }
    }
        
}