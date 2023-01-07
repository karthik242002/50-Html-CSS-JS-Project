const menuE1 = document.querySelector(".menu")
const menuTextE1 = document.querySelector(".menu p")
const socialListE1 = document.querySelector(".social-lists")
const liEls = document.querySelectorAll(".social-lists li") 

menuE1.addEventListener("click", ()=>{
    socialListE1.classList.toggle("hide");
    menuE1.classList.toggle("rotate");    
});
liEls.forEach(liEls=>{
    liEls.addEventListener("click", ()=>{
        menuTextE1.innerHTML = liEls.innerHTML
        socialListE1.classList.add("hide");
        menuE1.classList.toggle("rotate");
    })
})