import {bootstrap} from './mod-1.js';
export function start() {
    console.log(':: start:');
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
}
