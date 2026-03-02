const interviewButtons = document.getElementsByClassName("interview-btn");

for (let btn of interviewButtons) {
  btn.addEventListener("click", function () {

    const card = btn.closest(".job-card");
    const appliedBtn = card.querySelector(".applyed-btn");

    if (card.dataset.status !== "interview") {

      card.dataset.status = "interview";

      appliedBtn.innerText = "APPLIED";
      appliedBtn.classList.remove("text-gray-400");
      appliedBtn.classList.add("text-blue-500");

      const interviewCount = document.getElementById("add-interview");
      let current = parseInt(interviewCount.innerText);
      interviewCount.innerText = current + 1;
    }
  });
}