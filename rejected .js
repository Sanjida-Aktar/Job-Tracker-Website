
const rejectButtons = document.getElementsByClassName("rejected-btn");

for (let btn of rejectButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".job-card"); 
    const rejectBtn = card.querySelector(".applyed-btn");
    rejectBtn.innerHTML = "Rejected";
    rejectBtn.style.color = "red";

    const rejected = document.getElementById("add-rejected");
    let currentrejected = parseInt(rejected.innerText);
    currentrejected++;
    rejected.innerText = currentrejected;
  });
}


// delete button
const deleteBtns = document.getElementsByClassName("delete-btn");

for (let btn of deleteBtns) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".job-card");
    card.remove();

     const totalJob = document.getElementById("job-count");
    let total = parseInt(totalJob.innerText);
     total --;
     totalJob.innerText = total;

     const alljob = document.getElementById("count-job");
    let all = parseInt(alljob.innerText);
     all--;
     alljob.innerText = all;
  });
}