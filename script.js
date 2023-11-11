// Toggle icon navbar************************
let menuIcon =document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};
// scroll activiation **************************
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
// **********************************************************************************************************************************
const toggleSwitch = document.getElementById("toggle");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
});

// **********************************************************************************************************************************

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset =sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');
        
        if(top>= offset && top < offset + height) {
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    // sticky navbar********************************************
    let header =document.querySelector('header');
    
    header.classList.toggle('sticky',window.scrollY>100);
    
    // remove toggle icon and navbar when click navbar link***************************
    menuIcon.classList.remove('bx-x');
    Navbar.classList.remove('active');
};

    // scroll revrsal********************************************
    ScrollReveal({ 
        // reset: true,
        distance:'80px',
        duration:2000,
        delay:200

     });

     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
     
     ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
     ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    //  typed js ************************************
    const typed =new Typed('.multiple-text',{
        strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
        typespeed:500,
        backspeed:500,
        backdealy:500,
        loop:true
    });