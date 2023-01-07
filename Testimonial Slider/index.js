const testimonial = [
    {
        name: "Robyn B",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
        text: "I can't say enough about Apple. Keep up the excellent work. I will let my mum know about this,she could really make use of Apple! After using Apple my business skyrocketed!.",
    },
    {
        name: "Valli H.",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "It's all good. No matter where you go, Apple is the coolest, most happening thing around! If you aren't sure, always go for Apple. We've used Apple for the last five years.",
         
    },
    {
        name: "Wyn W.",
        photoUrl: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        text: "Apple was the best investment I ever made. We were treated like royalty. I would also like to say thank you to all your staff.",
         
    },
]

const imgE1 = document.querySelector("img")
const testE1 = document.querySelector(".text")
const usernameE1 = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const { name, photoUrl, text } = testimonials[idx];
    imgE1.src = photoUrl
    textE1.innerText = textE1
    usernameE1.innerText = name
    if(idx === testimonials.length){
        idx = 0

    }
    idx++
    setTimeout(()=>{
        updateTestimonial()

    }, 2000)



}