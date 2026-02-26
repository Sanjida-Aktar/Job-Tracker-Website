const jobCards = document.querySelectorAll(".job-card");
const allBtn = document.getElementById("All-job");
const interviewBtn = document.getElementById("interview-job");
const rejectedBtn = document.getElementById("rejected-job");
const noJobCard = document.getElementById("no-job-card");

// Helper function: ফিল্টার করার পর মেসেজ কার্ড দেখাবে
function filterJobs(status) {
  let visibleCount = 0;

  jobCards.forEach(card => {
    // placeholder card বাদ দিয়ে কাজ করবো
    if (card.id === "no-job-card") return;

    if (status === "all" || card.dataset.status === status) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // যদি কোনো কার্ড না থাকে → placeholder card দেখাও
  if (visibleCount === 0) {
    noJobCard.classList.remove("hidden");
  } else {
    noJobCard.classList.add("hidden");
  }
}

// Filter buttons
allBtn.addEventListener("click", () => filterJobs("all"));
interviewBtn.addEventListener("click", () => filterJobs("interview"));
rejectedBtn.addEventListener("click", () => filterJobs("rejected"));

// Status Update
document.querySelectorAll(".interview-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".job-card");
    card.dataset.status = "interview";
  });
});

document.querySelectorAll(".rejected-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".job-card");
    card.dataset.status = "rejected";
  });
});