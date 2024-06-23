var ypos = 200;

document.addEventListener('keydown', function(event) {
    
    if (event.key === 'w' || event.key === 'W') {
        ypos = ypos - 7;
        document.getElementById("nig").width+=0;
        ctx.drawImage(img, xpos, ypos);
    }
});




document.addEventListener('keydown', function(event) {
    
    if (event.key === 's' || event.key === 'S') {
        ypos = ypos + 7;
        document.getElementById("nig").width+=0;
        ctx.drawImage(img, xpos, ypos);
    }
});