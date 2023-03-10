let typed = new Typed(".multi-headline",{
    strings:["Frontend Developer",  "MERN Developer","Graphic Designer","Freelancer","Bloger"],
    typeSpeed:80,
    backSpeed:80,
    backdelay:1000,
    loop:true
})


// change bg color on scroll


let navbar = document.querySelector('header')

window.onscroll = function() {

// pageYOffset or scrollY
if (window.pageYOffset > 0) {
navbar.classList.add('scrolled')
} else {
navbar.classList.remove('scrolled')
}
}