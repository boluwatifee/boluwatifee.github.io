window.addEventListener('scroll', function(){
    const header = document.querySelector("header");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

const navSlide = () => {
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li')
   
   //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animating the links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ' ';
            }
            else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
 }
navSlide();