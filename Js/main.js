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


const navLink=document.querySelectorAll(".nav-link")

const linkAction=()=>{
    const navMenu=document.getElementById("nav-menu")
navMenu.classList.remove("show-menu")    
}
navLink.forEach(n=>n.addEventListener("click",linkAction))


const blurHeader=()=>{
    const header=document.getElementById("header")
    this.scrollY>=50?header.classList.add("blur-header"):
     header.classList.remove("blur-header")
}
window.addEventListener("scroll",blurHeader)