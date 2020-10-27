/* let plane = document.getElementById('plane');
window.onload = function() {
        plane.style.transform = 'rotate(720deg)'
        plane.style.transition = '20s';
}  */
let entrance = document.getElementById('entrance');
window.onload = function(){
    setTimeout(() => {
        entrance.style.opacity = '1'
        entrance.style.transition = '2s'
    }, 2000);
}

let body = document.getElementById('body')
let backMain = document.getElementById('backMain')
function scrollChange(){
    body.style.transform = ('translateY(-100vh)')
    body.style.transition = '1.5s'
}
backMain.addEventListener('click', function(){
    body.style.transform = ('translateY(0vh)')
    body.style.transition = '1.5s'
})