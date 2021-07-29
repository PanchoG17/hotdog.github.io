
/**** GSAP ****/

if (window.matchMedia("(max-width: 450px)").matches){

  gsap.to('#loading' , {
      duration: 5,
      ease: "power2.inOut",
      x: 230
  })

}else{
    gsap.to('#loading' , {
      duration: 5,
      ease: "power2.inOut",
      x: 400
  })
}

if (window.matchMedia("(max-width: 450px)").matches){
    gsap.to('#loading' , {
      duration: 5,
      ease: "power2.inOut",
      x: 500
})
}




gsap.to(".box" ,{
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

