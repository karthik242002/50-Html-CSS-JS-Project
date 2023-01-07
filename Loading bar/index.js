const counterE1 = document.querySelector(".counter")

const barE1 = document.querySelector(".loading-bar-front")

let idx = 0;

updateNum()

function updateNum(){
    counterE1.innerText = idx + "%"
    barE1.style.width = idx + "%"
    idx++
    if(idx < 101){
        setTimeout(updateNum, 20)
    }
}
