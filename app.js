const canvas = document.getElementById("jsCanvas");

let paintng = false;

function stopPainting() {
    paintng = false;
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(evnet){
    paintng = true;
}

function onMouseUp(evnet){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}