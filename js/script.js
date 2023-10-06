let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let sound = document.querySelector('audio');
btn.onclick = function(){
    body.classList.toggle('on');
    sound.play();
}