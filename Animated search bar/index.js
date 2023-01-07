const searchBarContainerE1 = document.querySelector(".search-bar-container")
const magnifierE1 = document.querySelector(".magnifier")

magnifierE1.addEventListener("click", ()=>{
    searchBarContainerE1.classList.toggle("active")
})