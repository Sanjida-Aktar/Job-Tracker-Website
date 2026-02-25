// function getValueFromInput(id){
//     const input = document.getElementById(id);
//     const value = input.value;
//     return value;
// };

// document.getElementById("interview-btn").addEventListener("click",function(){
//     const interviewd = getValueFromInput("interview-btn");
//     console.log(interviewd);
    
//     document.getElementById("applyed-btn").innerHTML ="APPLYED";
//     document.getElementById("applyed-btn").style.color="blue";
    
//     const interview = document.getElementById("add-interview"); 
//     console.log(interview);
//     let currentInterview = parseInt(interview.innerText);

//     currentInterview ++;
//     interview.innerText = currentInterview;


   

// });

const interviewButtons = document.getElementsByClassName("interview-btn");

for (let btn of interviewButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".job-card"); 
    const appliedBtn = card.querySelector(".applyed-btn");
    appliedBtn.innerHTML = "APPLIED";
    appliedBtn.style.color = "blue";

    const interview = document.getElementById("add-interview");
    let currentInterview = parseInt(interview.innerText);
    currentInterview++;
    interview.innerText = currentInterview;
  });
}
