const formE1 = document.querySelector(".form");

const inputE1 = document.querySelector(".input");

const ulE1 = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));


// function- list, task-i
if(list == null) {
    console.log("no tasks")
}else{
list.forEach((task)=>{
    toDoList(task)
});
}

formE1.addEventListener("submit", (e)=>{
    e.preventDefault();
    toDoList();
});

function toDoList(task){
    let newTask = inputE1.value;
    if(task){
        newTask = task.name
    }

  
    const liE1 = document.createElement("li");
    if(task && task.checked){
     liE1.classList.add("checked");   
    }
    liE1.innerText = newTask;
    ulE1.appendChild(liE1)
    inputE1.value = ""
    const checkBtnE1 = document.createElement("div")
    checkBtnE1.innerHTML = `
    <i class="fas fa-check-square">
    `
    liE1.appendChild(checkBtnE1);
    const trashBtnE1 = document.createElement("div")
    trashBtnE1.innerHTML = `
    <i class="fas fa-trash">
    `
    liE1.appendChild(trashBtnE1);
    checkBtnE1.addEventListener("click", ()=>{
        liE1.classList.toggle("checked")
        updateLocalStorage()
    })

    trashBtnE1.addEventListener("click", ()=>{
        liE1.remove();
        updateLocalStorage()
    })
    updateLocalStorage()

};

function updateLocalStorage(){
    const liE1s = document.querySelectorAll("li")
     list = [];
    liE1s.forEach((liE1)=>{
        list.push({
            name: liE1.innerText,
            checked: liE1.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list))
};