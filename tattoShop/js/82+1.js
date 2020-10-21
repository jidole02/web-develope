/* let arrow = document.getElementById('arrow');
window.onload = function(){
    setTimeout(function(){
        arrow.style.opacity = '1';
        arrow.style.transition = '1s';
    },0)
} // 2초 뒤 화살표 생성 */


/* window.addEventListener('scroll',function(){
    let scrollVal = document.documentElement.scrollTop;
    let header = document.getElementById('header');
    console.log(scrollVal)
   if(scrollVal > 50){
       header.style.opacity = '0';
       header.style.transition = '1s';
    }
    else{
        header.style.opacity = '1'
        header.style.transition = '1s';
    }
    if(scrollVal > 400){
        arrow.style.opacity = '0';
        arrow.style.transition = '1s';
    } // 스크롤시 방향키 사라짐
}) */

let consulting = document.getElementById('consulting');
consulting.addEventListener('mouseover',function(){
    consulting.innerHTML = 'CONSULTING >'
})
consulting.addEventListener('mouseout',function(){
    consulting.innerHTML = 'CONSULTING'
}) // 컨설팅 버튼 호버

let pageContainer = document.getElementById('pageContainer');
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')

button1.addEventListener('click',function(){
    pageContainer.style.transform = 'translateX(0vw)';
})
button2.addEventListener('click',function(){
    pageContainer.style.transform = 'translateX(-100vw)';
})
button3.addEventListener('click',function(){
    pageContainer.style.transform = 'translateX(-200vw)';
})
button4.addEventListener('click',function(){
    pageContainer.style.transform = 'translateX(-300vw)';
})