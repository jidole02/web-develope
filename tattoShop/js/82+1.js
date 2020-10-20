let arrow = document.getElementById('arrow');
window.onload = function(){
    setTimeout(function(){
        arrow.style.opacity = '1';
        arrow.style.transition = '1s';
    },2000)
} // 2초 뒤 화살표 생성


window.addEventListener('scroll',function(){
    let scrollVal = document.documentElement.scrollTop;
    console.log(scrollVal)
    if(scrollVal > 400){
        arrow.style.opacity = '0';
        arrow.style.transition = '1s';
    }
})

