
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

    const jobtotal = document.getElementById("job");
    let currjob = 0;
   
    currjob++;
    parseInt(jobtotal.innerText) = currjob;
  });
}
