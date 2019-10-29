const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// give size to pixel modifier for canvas
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2d";
ctx.lineWidth = 2.5;

let paintng = false;

function stopPainting() {
    paintng = false;
}

function startPainting() {
    paintng = true;
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    if(!paintng){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        
    }
}

function onMouseDown(event){
    paintng = true;

}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}