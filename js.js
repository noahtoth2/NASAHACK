let bg = document.getElementById("bg");
let sol= document.getElementById("sol");
let gato= document.getElementById("gato");
let nave= document.getElementById("nave");
let text= document.getElementById("text")
window.addEventListener('scroll', function(){
    var value = this.window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    sol.style.left= -value * 0.5 + 'px';
    nave.style.top= value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    gato.style.left = -value * -0.3 + 'px';
})