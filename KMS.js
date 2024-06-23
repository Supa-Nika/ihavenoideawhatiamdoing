// policz to z kolizjami bo mie coś strzeli

// if (carypos < ypos + 50 && carypos > ypos - 50 && xpos < carxpos + 86 && xpos > carxpos + 86){
//     console.log("kolizjaaaa")
// }
var dead = 0;
    function cum1(){
        if (carxpos < xpos + 50 && carxpos > xpos - 50 && ypos < carypos + 86 && ypos > carypos - 86){
            document.getElementById("nig").width+=0;
            document.getElementById("nig").style.backgroundImage="url(dead.png)";
            dead = 1
        }
    }
    function cum2(){
        if (carxpos3 < xpos + 50 && carxpos3 > xpos - 50 && ypos < carypos + 86 && ypos > carypos - 86){
            document.getElementById("nig").width+=0;
            document.getElementById("nig").style.backgroundImage="url(dead.png)";
            dead = 1
        }
    }
    function cum3(){
        if (carxpos4 < xpos + 50 && carxpos4 > xpos - 50 && ypos < carypos + 86 && ypos > carypos - 86){
            document.getElementById("nig").width+=0;
            document.getElementById("nig").style.backgroundImage="url(dead.png)";
            dead = 1
        }
    }

