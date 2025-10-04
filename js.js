let bg = document.getElementById("bg");
let sol= document.getElementById("sol");
let gato= document.getElementById("gato");
let nave= document.getElementById("nave");
let text= document.getElementById("text");

let luna = document.getElementById("luna");
let gatoqn = document.getElementById("gatoqn");

let fichaDerecha = document.querySelector(".ficha-derecha");

window.addEventListener('scroll', function(){
    let value = window.scrollY;

 
    bg.style.top = value * 0.5 + 'px';
    sol.style.left= -value * 0.5 + 'px';
    nave.style.top= value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    gato.style.left = value * 0.3 + 'px'; 

    
    let start = fichaDerecha.offsetTop; 
    let end = start + fichaDerecha.offsetHeight;


    if(value >= start && value <= end){
        let relativeScroll = value - start; 

    
        gatoqn.style.top = -relativeScroll * 0.8 + 'px';
    }
});
