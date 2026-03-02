let currentTab = "all";

document.addEventListener("DOMContentLoaded", function(){
    switchTab("all");
    updateTotalJobs();   
    updateAvailableJobs(); 
});


const tabActive = ["bg-blue-500","border-blue", "text-white"];
const tabinActive = ["bg-transparent","text-blue-700", "border-blue-700"];


function switchTab(tab) {
    currentTab = tab;

    const tabs = ["all","interview","rejected"];

   
    for (const t of tabs) {
        const tabname = document.getElementById(t + "-job");
        if (!tabname) continue;
        if (t === tab) {
            tabname.classList.remove(...tabinActive);
            tabname.classList.add(...tabActive);
        } else {
            tabname.classList.remove(...tabActive);
            tabname.classList.add(...tabinActive);
        }
    }

  
    const cards = document.querySelectorAll(".job-card");
    let visibleCount = 0;

    cards.forEach(card => {
        const status = card.dataset.status || "all";

        if (tab === "all") {
            card.style.display = "block";
            visibleCount++;
        } else if (status === tab) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    // --- Add bydefaultempty state  ---
    const emptyState = document.getElementById("empty-state");

    if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }

    
    updateAvailableJobs();
}


function updateTotalJobs() {
    const cards = document.querySelectorAll(".job-card");
    document.getElementById("job-count").textContent = cards.length;
}


function updateAvailableJobs() {
    const cards = document.querySelectorAll(".job-card");
    const visibleCards = Array.from(cards).filter(card => card.style.display !== "none");
    document.getElementById("count-job").textContent = visibleCards.length;
}