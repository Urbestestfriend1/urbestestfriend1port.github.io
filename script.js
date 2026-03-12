function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}



const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});


faders.forEach(section => {

observer.observe(section);

});
