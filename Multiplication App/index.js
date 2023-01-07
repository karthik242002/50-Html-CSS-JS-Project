const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionE1 = document.getElementById("question");

const inputE1 = document.getElementById("input")
const formE1 = document.getElementById("form")
const scoreE1 = document.getElementById("score")
const timeE1 = document.getElementById("time")

let score = localStorage.getItem("score");
console.log(score);
scoreE1.innerHTML = "score : " + score

questionE1.innerText = `What is ${num1} multiply by ${num2}?`
const correctAns = num1 * num2;


formE1.addEventListener("submit", ()=>{
    const userAns = inputE1.value
    console.log(userAns,correctAns);
    if(userAns == correctAns){
        score++
        updateLocalStorage()

    } else{
        score--
        updateLocalStorage()
    }
    if(score <= 0 ){
        score = 0
        updateLocalStorage()
    }
    
});
function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
let count = 0
let colors = [
    "green",
    "rgb(0, 128, 90)",
    "rgb(0, 128, 122)",
    "rgb(0, 51, 128)",
    "rgb(0, 15, 128)",
    "rgb(70, 0, 128)",
    "rgb(128, 0, 119)",
    "rgb(128, 0, 38)",
    "rgb(128, 0, 41)",
    "rgb(128, 0, 0)",
]
function updatetime(){
    console.log(count);
    if (count < 10){
        count++
        timeE1.style.color = colors[count - 1]
        timeE1.innerHTML = "Time : " + count
    }else{
        score--
        if(score <= 0 ){
            score = 0
            updateLocalStorage()
        }
        updateLocalStorage()
        location.reload()
    }
    setTimeout(()=>{
        updatetime();

    }, 1000)
}
updatetime();
