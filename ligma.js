    const img2 = new Image();
    var carxpos = Math.floor(Math.random() * 450);
    var carypos = -50;

    img2.onload = () => {
    ctx.drawImage(img2, carxpos, carypos);
    };
    img2.src = "black.png";

    const img3 = new Image();
    var carxpos3 = Math.floor(Math.random() * 450);


    img3.onload = () => {
    ctx.drawImage(img3, carxpos3, carypos);
    };
    img3.src = "black1.png";


    const img4 = new Image();
    var carxpos4 = Math.floor(Math.random() * 450);


    img.onload = () => {
    ctx.drawImage(img4, carxpos4, carypos);
    };
    img4.src = "black2.png";
