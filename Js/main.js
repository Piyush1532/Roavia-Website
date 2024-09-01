let navMenu=document.getElementById("nav-menu")
let navToggle=document.getElementById("nav-toggle")
let navClose=document.getElementById("nav-close")


if(navToggle){
navToggle.addEventListener("click" ,()=>{
navMenu.classList.add("show-menu")
})
}

if (navClose) {
    navClose.addEventListener("click",()=>{
navMenu.classList.remove("show-menu")
    })
}