let password = document.getElementById('password').children;
let numC = document.getElementsByClassName('numContainer')
let passDiv = document.getElementById('pass');
let i = 0;
let k = 0;
let j = 0;
let passwordVal = [5];
let complete = ["0","4","1","2","1","4"];
let blur = document.getElementById('blur');
let passwordDiv = document.getElementById('password')

    for(i = 0; i < 4; i++){
        for(j = 0; j < 3; j++){
            console.log(numC[i].children[j].innerHTML[0])    
            numC[i].children[j].addEventListener('click',function(){
                console.log(event.target.innerHTML[0])
                passwordVal[k] = event.target.innerHTML[0];
                password[k].style.backgroundColor = "white"
                k++;
                if(k == 6){
                     console.log(passwordVal)
                    console.log(complete) 
                        if((passwordVal[0] == "0" && passwordVal[1] == "4")&&(passwordVal[2] == "1" && passwordVal[3] == "2")&&(passwordVal[4] == "1" && passwordVal[5] == "4")){
                            passDiv.style.transform = "translateY(-100vh)";
                            blur.className = "container2"
                        }
                        else{
                            passwordDiv.style.animationName = "shake";
                            for(i = 0; i < 6; i++){
                                password[i].style.backgroundColor = "transparent";
                            }
                            setTimeout(function(){
                                location.reload();
                            },400)
                        }
                }
            })        
        }
    }

