
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



// deleted btn 
// document.getElementById("delete-btn").addEventListener("click",function(){
//     document.getElementById("card").style.display = "none";

//     //decrease total job
//     const totalJob = document.getElementById("total");
//     let total = parseInt(totalJob.innerText);
//      total --;
//      totalJob.innerText = total;
// });

const deleteBtns = document.getElementsByClassName("delete-btn");

for (let btn of deleteBtns) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".job-card");
    card.remove();

     const totalJob = document.getElementById("total");
    let total = parseInt(totalJob.innerText);
     total --;
     totalJob.innerText = total;
  });
}