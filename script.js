window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

ScrollReveal({
     reset: true,
     distance :'60px' ,
     duration: 2500,
     delay: 400
});

ScrollReveal().reveal('.heading, .funfact, #home', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.aboutme, .grid-container, .content', { delay: 600, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.uiskill, .getintouch form, #footer', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.devskill', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.pro img, .socialicons', { delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.pro .procontent', { delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.viewwork, .viewmore', { delay: 600, origin: 'bottom'});












/* const navSlide = () => {
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
navSlide(); */