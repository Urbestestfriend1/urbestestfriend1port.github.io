function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}



/* TAB SWITCHING */

function openTab(tabName){

let tabs = document.querySelectorAll(".tab-content");
let buttons = document.querySelectorAll(".tab");

tabs.forEach(tab => tab.classList.remove("active"));
buttons.forEach(btn => btn.classList.remove("active"));

document.getElementById(tabName).classList.add("active");

event.target.classList.add("active");

}



/* FADE ANIMATION */

const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("visible");
}

});

});

faders.forEach(section => observer.observe(section));
