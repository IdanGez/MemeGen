'use strict'

var gElCanvas;
var gCtx;
// var gIsDrawing = false
// var pos = { x: 0, y: 0 };
// var gPrevPos = { x: 0, y: 0 }

function onInit(){
    console.log('lets fuckin go')
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    // resizeCanvas()
    createGallery()
    renderGallery()
    // addListeners()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

function addListeners() {
    // addMouseListeners();
    window.addEventListener('resize', () => {
      resizeCanvas();
    });
}

function showEditor() {
	document.querySelector('.meme-editor').classList.remove('hide');
	document.querySelector('.grid-container').classList.add('hide');
	document.querySelector('.search-bar').classList.add('hide');
}

function showGallery() {
	document.querySelector('.meme-editor').classList.add('hide');
	document.querySelector('.grid-container').classList.remove('hide');
}

function onAddLine(){
    addLine()
    renderMeme()

}
function onSwitchLine(){
    switchLine()
    renderMeme()
}

function onImgSelect(elImgId){
    restartGmeme()
    showEditor()
    var memeImg = getImgId(elImgId)
    setImg(elImgId)
    renderMeme()
};

function onSetText(text){
    setLineText(text)
    renderMeme()

}
function onSetColor(color) {
    setColor(color)
    renderMeme()
}
function onSetStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onIncreaseFont(){
 increaseFont()
 renderMeme()
}

function onDecreaseFont(){
decreaseFont()
renderMeme()
}

function onMoveTextUp(){
    moveTextUp()
    renderMeme()
}
function onMoveTextDown(){
    moveTextDown()
    renderMeme()
}
function onAlineLeft() {
alineLeft()
renderMeme()
}
function onAlineCenter() {
    alineCenter()
    renderMeme()

}
function onAlineRight(){
    alineRight()
    renderMeme()
}

function onDeleteLine(){
   deleteLine()
    renderMeme()
}
function renderMeme(){
    var meme = getMeme()
    var img = new Image();
    img.src = `images/sq-img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    insertTextLine(meme)
}
}

function insertTextLine(meme){
    // console.log(meme.selectedLineIdx)
    // if (meme.lines[meme.selectedLineIdx].x === undefined) return;
    // console.log(meme.lines.length, 'under')
    gCtx.beginPath();
    gCtx.rect(
        meme.lines[meme.selectedLineIdx].x-200, 
        meme.lines[meme.selectedLineIdx].y-40, 
        meme.lines[meme.selectedLineIdx].x+200, 
        60);
    gCtx.lineWidth = 4;
    gCtx.strokeStyle = '#63e43f';
    gCtx.stroke();
    gCtx.closePath();
    meme.lines.forEach((line) => {
            gCtx.textBaseline = 'middle';
            gCtx.textAlign = 'center';
            gCtx.font = `${line.size}px monospace`;
            gCtx.fillStyle = line.color;
            gCtx.lineWidth = 1;
            gCtx.strokeStyle = line.strokeColor;
            gCtx.fillText(line.txt, line.x, line.y);
            gCtx.strokeText(line.txt,  line.x, line.y);
            // text = text.toUpperCase();
            // gCtx.lineWidth = 2;
});
}


// function drawRect(meme) {
//     gCtx.beginPath();
//     gCtx.rect(meme.lines[0].x, meme.lines[0].y, meme.lines[0].x+200, meme.lines[0].y+100);
//     gCtx.fillStyle = 'yellow';
//     // gCtx.fillRect(pos.x, pos.y, gapX, gapY);
//     gCtx.strokeStyle = gStrokeColor;
//     gCtx.stroke();
//     // gCtx.moveTo(pos.x, pos.y);
//     gCtx.closePath();
//   }

// rect with dynamic height and width to text
function drawRect() {
    var currMeme = gMeme.lines[gMeme.selectedLineIdx];
    if(!currMeme.txt) return
    var x = currMeme.x;
    var y = currMeme.y;
    var sizing = document.querySelector('.sizing');
    sizing.innerText = currMeme.txt;
    sizing.style.fontSize = currMeme.size + 'px'
    var xSize = sizing.clientWidth + 4;
    var ySize = sizing.clientHeight + 4;
    gCtx.lineWidth = 2;
    gCtx.beginPath()
    gCtx.strokeStyle = 'orange';
    gCtx.rect(x - xSize / 2, y - ySize / 2, xSize, ySize);
    gCtx.stroke();
    gCtx.closePath();
}

// function onSetFillColor(color) {
//     setFillColor(color)
//   }
  
//   function onSetStrokeColor(color) {
//     setStrokeColor(color)
//   }
  
//   function onClearCanvas() {
//     gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
//   }