let mainSection = document.getElementById("main")
let menuSection = document.getElementById("nav")
let iconMenu = document.getElementById("icon-menu")
let closeMenu = document.getElementById("icon-close")

iconMenu.addEventListener('click', () =>{
    menuSection.style.display = "block"
})

closeMenu.addEventListener('click', () =>{
    console.log("ci")
    mainSection.style.display = "block"
    menuSection.style.display = "none"
})