document.addEventListener("DOMContentLoaded", function () {

    // Interview button
    document.querySelectorAll(".interview-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const card = this.closest(".job-card");
            card.dataset.status = "interview";
        });
    });

    // Rejected button
    document.querySelectorAll(".rejected-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const card = this.closest(".job-card");
            card.dataset.status = "rejected";
        });
    });

});


function switchTab(type) {

    const cards = document.querySelectorAll(".job-card");

    let found = false;

    cards.forEach(card => {

        if (card.id === "no-job-card") return;

        const status = card.dataset.status;

        if (type === "all") {
            card.style.display = "block";
            found = true;
        }
        else if (status === type) {
            card.style.display = "block";
            found = true;
        }
        else {
            card.style.display = "none";
        }

    });

    const noJob = document.getElementById("no-job-card");

    if (!found && type !== "all") {
        noJob.classList.remove("hidden");
    } else {
        noJob.classList.add("hidden");
    }
}