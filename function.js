let currentTab = "all";


document.addEventListener("DOMContentLoaded", function(){
    switchTab("all");
});


const tabActive = ["bg-blue-500","border-blue", 'text-white'];
const tabinActive = ['bg-transparent', "text-blue-700", 'border-blue-700'];


const allConteinar= document.getElementById("all-conteinar");
const interviewConteinar= document.getElementById("interview-conteinar");
const rejectedConteinar= document.getElementById("rejected-conteinar");



function switchTab(tab){
    console.log(tab);
const tabs= ["all","interview","rejected"]
    
    for(const t of tabs)
    {
        const tabname = document.getElementById(t + '-job');
        if(t=== tab)
        {
            tabname.classList.remove(...tabinActive);
            // console.log("apply");
        
        
            tabname.classList.add(...tabActive);
        }
        else{

        tabname.classList.remove(...tabActive);
        tabname.classList.add(...tabinActive);
    }

}


}

function countCard(){
const count = document.querySelectorAll("#job-conteinar .job-card").length;
console.log("job card:" ,count);
document.getElementById("job-count").textContent = count;
document.getElementById("count-job").textContent = count;

}
countCard();


