/*===== toggle icon navbar=====*/
let menuIcon = document.querySelectorAll("#menu-icon");
let navbar = document.querySelectorAll('navbar');

menuIcon.onclink = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

/*=====scroll sections active link=====*/
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
          let top = window.scrolly;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id =  sec.getAttribute('id');

          if(top >= offset && top < offset + height) {
          navlinks.forEach(links => {
             links.classList.remove('active');
             document.querySelector('header nav a[href='+id + ']').classList.add('active');
            });
        };

    });



   /*========= Sticky navbar ========*/
   let header = document.querySelector('header');
   header.classList.toggle('sticky',window.scrollY > 100);

/*===== remove toggle icon and navbar when click link(scroll)=====*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*===== scroll reveal====*/
ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.Home-content,heading', { origin: 'top'});
ScrollReveal().reveal('.home-img , .secvices-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.Home-content h1,about-img', { origin: 'left'});
ScrollReveal().reveal('.Home-content p,about-content', { origin: 'left'});

/*=====typed js==*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

