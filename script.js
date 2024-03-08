const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// this function checks the input box to ensure the user enters something then it creates a list of the text the user entered
function addTask(){
    if(inputBox.value === ''){
        alert("You must type something!")
    }
    else {
        const prioritySelect = document.getElementById("prioritySelect");
        const priority = prioritySelect.value;

        let li = document.createElement("li");
        li.textContent = inputBox.value + " (" + priority + " priority)";
        li.classList.add(priority + "-priority");

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);

        inputBox.value = "";
        saveData();

    }

}
// adds a checked mark if the user clicks the task and unchecks if user clicks checked circle. Then removes task when user clicks the x
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// stores data within the broswer so when the browser is refreshed the data is still there.
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//shows the task after broswer is refreshed
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
