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
ScrollReveal().reveal('.uiskill, .getintouch form', { delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.devskill', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.pro img, .socialicons', { delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.pro .procontent', { delay: 500, origin: 'right', interval: 200});
ScrollReveal().reveal('.viewwork, .viewmore', { delay: 600, origin: 'bottom'});

const hamburger = document.getElementsByClassName('hamburger');
hamburger.addEventListener('click', responsiveNav);

function responsiveNav(){
    var x = document.getElementsByClassName('nav-list');

    x.style.display = 'block';
}


//for the contact form

function sendMsg(e){
    
    const form = document.querySelector('.contact_form')
    const email = document.getElementById('email');
    const mssg = document.getElementById('message');

    Email.send({
        SecureToken : "48021d20-d653-4cfd-9933-9ada686f67c325c21cdb-9fb2-4428-a3a4-f2cde0d41cbb",
        To : 'bjemiriye@gmail.com',
        From : email.value,
        Subject : "Contact Form",
        Body : mssg
    }).then(
    message => alert(message)
    );


    e.preventDefault();
}

form.addEventListener('submit', sendMsg);










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