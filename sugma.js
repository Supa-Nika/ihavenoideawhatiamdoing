    var handle;
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

    function func() {
        if (dead == 0){
        carypos = carypos + 1.5;
        
        cum1();
        cum2();
        cum3();
        document.getElementById("nig").width += 0;
        ctx.drawImage(img, xpos, ypos);
        ctx.drawImage(img2, carxpos, carypos);
        ctx.drawImage(img3, carxpos3, carypos);
        ctx.drawImage(img4, carxpos4, carypos);
        if (carypos >= 500) {
            console.log("nic nie rozumiem");
            carypos = -50;
            carxpos = Math.floor(Math.random() * 450);
            carxpos3 = Math.floor(Math.random() * 450);
            carxpos4 = Math.floor(Math.random() * 450);
            }
        }
        else{
            document.getElementById("nig").width += 0;
        }
        
        
    }

    handle = window.setInterval(func, 1);
