let body = document.getElementById('planet')
let i = 1;
let p = body.children
let toggle = true;

$(document).keydown(function(event) {
    if (event.keyCode == '39') {
        if(toggle == false){
            i = i+2;
            toggle = !toggle;
        }

        if(i == 4){
            i = 1;
            body.style.transform = 'translateX(0vw)'
            p[3].className = 'earth';
            p[0].className = 'earth p1';
        }
        else{
            console.log(p)
            p[i-1].className = 'earth';
            p[i].className = 'earth p1';
            body.style.transform = 'translateX(-' + i*27 + 'vw)'
            i++;
        }
        console.log(toggle)
    } // 오른쪽으로 움직이기
    else if (event.keyCode == '37') {
        if(toggle == true){
            i = i-2;
            toggle = !toggle;
        }
        if(i == -1){
            i = 2;
            body.style.transform = 'translateX(-81vw)'
            p[0].className = 'earth';
            p[3].className = 'earth p1';
        } 
        else{
            p[i+1].className = 'earth';
            p[i].className = 'earth p1';
            body.style.transform = 'translateX(-' + i*27 + 'vw)'
            i--;
        }
        console.log(toggle)
    } // 오른쪽으로 움직이기
})