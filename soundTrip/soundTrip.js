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