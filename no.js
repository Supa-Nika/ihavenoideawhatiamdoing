const ctx = document.getElementById("nig").getContext("2d");
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, xpos, ypos);
};
img.src = "Bez.png";
