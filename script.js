
const sideMenu =document.querySelector('#sideMenu');
const navBar =document.querySelector("nav");
const navLinks =document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform ='translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform ='translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY >50){
        navBar.classList.add('bg-white/50','backdrop-blur-lg','shadow-sm');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50')
    }else{
        navBar.classList.remove('bg-white/50','backdrop-blur-lg','shadow-sm')
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50')
    }
})

// light mode and dark mode
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);



function toggleTheme(){
    document.documentElement.classList.contains('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme='dark';
    }else{
        localStorage.theme ='light';
    }
}
