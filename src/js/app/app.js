import {bootstrap} from './mod-1.js';
//import TweenMax from gsap;
//import TweenMax from "gsap";

window.addEventListener ?
window.addEventListener("load",start(),false) :
window.attachEvent && window.attachEvent("onload",start());
// start();
// window.onload = function(){
//     console.log('fica');
// }();
function start() {
    var div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    document.body.appendChild(div);
    div.style.backgroundColor = '#000099';
    div.style.position = 'absolute';
    div.style.left = '100px';
    div.style.top = '100px';

    TweenMax.to(div, 1, {left: 500, delay: .5});
    bootstrap();

    console.log(window.PIXI);
}
