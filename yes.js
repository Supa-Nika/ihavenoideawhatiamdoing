    var xpos = 200;
    const ypos = 350;
    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'd' || event.key === 'D') {
            xpos = xpos + 10;
            if(xpos < 0 || xpos > 450 || dead == 1){
                console.log("nie")
                document.getElementById("nig").width+=0;
                xpos = xpos - 10;
            }
            else{
                document.getElementById("nig").width+=0;
                ctx.drawImage(img, xpos, ypos);
                ctx.drawImage(img2, carxpos, carypos);
                ctx.drawImage(img3, carxpos3, carypos);
                ctx.drawImage(img4, carxpos4, carypos);
            }
            
            
            
        }
    });

    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'a' || event.key === 'A') {
            xpos = xpos - 10;
            if(xpos < 0 || xpos > 450 || dead == 1){
                console.log("nie")
                document.getElementById("nig").width+=0;
                xpos = xpos + 10;
            }
            else{
                document.getElementById("nig").width+=0;
                ctx.drawImage(img, xpos, ypos);
                ctx.drawImage(img2, carxpos, carypos);
                ctx.drawImage(img3, carxpos3, carypos);
                ctx.drawImage(img4, carxpos4, carypos);
            }
            
        }
    });


    function rightbutton(){
        xpos = xpos + 10;
            if(xpos < 0 || xpos > 450 || dead == 1){
                console.log("nie")
                document.getElementById("nig").width+=0;
                xpos = xpos - 10;
            }
            else{
                document.getElementById("nig").width+=0;
                ctx.drawImage(img, xpos, ypos);
                ctx.drawImage(img2, carxpos, carypos);
                ctx.drawImage(img3, carxpos3, carypos);
                ctx.drawImage(img4, carxpos4, carypos);
            }
    }

    function leftbutton(){
        xpos = xpos - 10;
            if(xpos < 0 || xpos > 450 || dead == 1){
                console.log("nie")
                document.getElementById("nig").width+=0;
                xpos = xpos + 10;
            }
            else{
                document.getElementById("nig").width+=0;
                ctx.drawImage(img, xpos, ypos);
                ctx.drawImage(img2, carxpos, carypos);
                ctx.drawImage(img3, carxpos3, carypos);
                ctx.drawImage(img4, carxpos4, carypos);
            }
    }