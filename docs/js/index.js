
/**** GSAP ****/

gsap.registerPlugin(ScrollTrigger);

let animar = (px) => {

    gsap.to('#loading' , {
      duration: 5,
      ease: "power2.inOut",
      x: px
  })

}

if (window.matchMedia("(max-width: 450px)").matches){

  animar(250);

}else{

  animar(480);

}

gsap.to(".box" ,{
    scrollTrigger: ".box",
    duration:1,
    scale: 2.2, 
    ease: "elastic.out(1,2)",
    delay:0.8,
    stagger: {
      amount: 1.5, 
      grid: "auto" ,
      from: "random"
    }
  });


$('.contact-link').mouseover(function(){
    gsap.to(this, {
      duration: 1,
      rotation: 360,
      scaleX: 2,
      scaleY: 2
    });
})

$('.contact-link').mouseout(function(){
  gsap.to(this, {
    duration: 1,
    rotation: 360,
    scaleX: 1,
    scaleY: 1
  });
})

window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}

