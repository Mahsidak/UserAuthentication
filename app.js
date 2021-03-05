const container= document.querySelector(".container");
const card= document.querySelector(".card");
const form1=document.querySelector(".form1");
const form2=document.querySelector(".form2");
const button=document.querySelector(".form button");
const img=document.querySelector(".signup img");

container.addEventListener("mousemove", (pointer) =>{
    let xAxis=(window.innerWidth / 2 - pointer.pageX) /11 ;
    let yAxis=(window.innerHeight / 2 - pointer.pageY) /20 ;
    card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})
container.addEventListener("mouseenter", ()=>{
    form1.style.transform="translateZ(60px)";
    form2.style.transform="translateZ(75px)";
    button.style.transform="translateZ(85px)";
    img.style.transform="translateZ(100px)";
    card.style.transition= "none";
})
container.addEventListener("mouseleave", ()=>{
    card.style.transition= "all 0.8s ease";
    card.style.transform= `rotateY(0deg) rotateX(0deg)`
    form1.style.transform="translateZ(0px)";
    form1.style.transition= "all 0.8s ease";
    form2.style.transform="translateZ(0px)";
    form2.style.transition= "all 0.8s ease";
    button.style.transform="translateZ(0px)";
    button.style.transition= "all 0.8s ease";
    img.style.transform="translateZ(0px)";
    img.style.transition= "all 0.8s ease";
})



