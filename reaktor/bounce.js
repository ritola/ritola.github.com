let speed = 15;
let scale = 0.5; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;

let logo = {
    x: 200,
    y: 300,
    xspeed: 5,
    yspeed: 5,
    img: new Image()
};

(function main(){
    canvas = document.getElementById("background");
    ctx = canvas.getContext("2d");
    logo.img.src = 'logo.svg';

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //Draw Logo and its background
        ctx.fillStyle = logoColor;
        ctx.fillRect(logo.x, logo.y, logo.img.width*scale, logo.img.height*scale);
        ctx.drawImage(logo.img, logo.x, logo.y, logo.img.width*scale, logo.img.height*scale);
        //Move the logo
        logo.x+=logo.xspeed;
        logo.y+=logo.yspeed;
        //Check for collision 
        checkHitBox()
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if(logo.x+logo.img.width*scale >= canvas.width || logo.x <= 0){
        logo.xspeed *= -1;
    }
        
    if(logo.y+logo.img.height*scale >= canvas.height || logo.y <= 0){
        logo.yspeed *= -1;
    }    
}
