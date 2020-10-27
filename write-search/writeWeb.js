let button = {
    title : document.getElementById('title'),
    text : document.getElementById('text')
}

let titleVal;
let titleArr = [100];
let textVal;
let i = 0;

function titleSub(){
    titleVal = button.title.value;
}

function textSub(){
    textVal = button.text.value;
}
let here = document.getElementById('here');

function check(){
    if(titleVal == undefined){
        alert('제목을 입력하세요.');
    }else if(textVal == undefined){
        alert('글을 입력하세요');
    }
    else{
        titleArr[i]  = titleVal;
        here.insertAdjacentHTML('beforebegin','<div class="titleList"><a href="">제목 : ' + titleVal + '</a><br><button>보러가기 ></button></div>');
        title.value = "";
        text.value = "";
        titleVal = undefined;
        textVal = undefined;
        i++;
    }
}
function searchUp(){
    let search = document.getElementById('search')
    console.log(titleArr[i-1])
    for(let j = 0; j < 100; j++){
        if(titleArr[j] == search.value){
            alert(titleArr[j] + '가 검색되었습니다.')
        }
    }
    document.getElementById('search').value = "";
}