
/**** GSAP ****/

gsap.registerPlugin(ScrollTrigger);


///// Header animation

let animar = (px) => {

    gsap.to('#loading' , {
      duration: 5,
      ease: "power2.inOut",
      x: px
  })

}

if (window.matchMedia("(max-width: 550px)").matches){

  animar(280);

}else{

  animar(450);

}

////// Skills animation

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


////// Contact animation

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


/******* Sticky menu *******/

window.onscroll = function() { stickyMenu() };

var menu = document.getElementById("main-menu");
var sticky = menu.offsetTop;

var nav = $('.menu-mobile');
let alturaBarra = nav.innerHeight();



function stickyMenu() {

    var mobileMenu = $('#main-menu');
    let alturaMobile = mobileMenu.innerHeight();

    if (window.pageYOffset >= sticky) {

      if ($("#main-menu").hasClass('active')) {

        menu.classList.add("fixed");
        $('body').css({'margin-top': alturaMobile+'px'});

      }else{
        menu.classList.add("fixed");
        $('body').css({'margin-top': alturaBarra+'px'});
      }


    } else {
      menu.classList.remove("fixed");
      $('body').css({'margin-top': 0});
    }

}

/***** Mobile Menu *****/

$('#menu-btn').click(function(){

  $('#navbar').slideToggle();

  if ($('#main-menu').hasClass('active')) {

    menu.classList.remove('active');
    $('body').css({'margin-top': 0});

  }else{
    menu.classList.add('active');
  }

})

