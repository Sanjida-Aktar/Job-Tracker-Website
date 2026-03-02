const rejectButtons = document.getElementsByClassName("rejected-btn");

for (let btn of rejectButtons) {
  btn.addEventListener("click", function () {

    const card = btn.closest(".job-card");
    const appliedBtn = card.querySelector(".applyed-btn");

    if (card.dataset.status !== "rejected") {

      if (card.dataset.status === "interview") {
        const interviewCount = document.getElementById("add-interview");
        interviewCount.innerText = parseInt(interviewCount.innerText) - 1;
      }

      card.dataset.status = "rejected";

      appliedBtn.innerText = "REJECTED";
      appliedBtn.classList.remove("text-blue-500");
      appliedBtn.classList.add("text-red-500");

      const rejected = document.getElementById("add-rejected");
      rejected.innerText = parseInt(rejected.innerText) + 1;
    }
  });
}

// delete button
const deleteBtns = document.getElementsByClassName("delete-btn");

for (let btn of deleteBtns) {
  btn.addEventListener("click", function () {

    const card = btn.closest(".job-card");

    if (card.dataset.status === "interview") {
      const interview = document.getElementById("add-interview");
      interview.innerText = parseInt(interview.innerText) - 1;
    }

    if (card.dataset.status === "rejected") {
      const rejected = document.getElementById("add-rejected");
      rejected.innerText = parseInt(rejected.innerText) - 1;
    }

    card.remove();

    const totalJob = document.getElementById("job-count");
    totalJob.innerText = parseInt(totalJob.innerText) - 1;

    const alljob = document.getElementById("count-job");
    alljob.innerText = parseInt(alljob.innerText) - 1;
  });
}