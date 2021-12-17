'use strict'
var gFillColor = '#e66465';
var gStrokeColor = '#f6b73c';
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Text Here',
        size: 30,
        align: 'left',
        color: 'black',
        strokeColor: 'white',
        font:'impact' ,
        x: 50,
        y: 50,
    },{
        txt: 'Text Here ',
        size: 30,
        align: 'left',
        color: 'black',
        strokeColor: 'white',
        font:'impact' ,
        x: 50,
        y: 500,
    }]
}

function restartGmeme(){
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{
            txt: 'Text Here',
            size: 30,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            font:'impact' ,
            x: 50,
            y: 50,
        },{
            txt: 'Text Here ',
            size: 30,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            font:'impact' ,
            x: 50,
            y: 500,
        }]
    }
}

function setImg(memeImg) {
    gMeme.selectedImgId = memeImg

}
function setFont(value){
    gMeme.lines[gMeme.selectedLineIdx].font = value;
}

function getImgId(elImgId) {
    return gImgs.find((img) => img.id === +elImgId);
    // gMeme.selectedImgId = imgIdx.id
    // console.log(gMeme)
    // return 
}

function getMeme() {
    return gMeme;
}

function deleteLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx--
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
  }
function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color;
}

function setLineText(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
}

function increaseFont() {
    if (gMeme.lines[gMeme.selectedLineIdx].size === 55) return
    gMeme.lines[gMeme.selectedLineIdx].size +=2.5
}

function decreaseFont() {
    if (gMeme.lines[gMeme.selectedLineIdx].size === 20) return
    gMeme.lines[gMeme.selectedLineIdx].size -=2.5
}

function moveTextUp(){
    if (gMeme.lines[gMeme.selectedLineIdx].y === 30) return;
    gMeme.lines[gMeme.selectedLineIdx].y -=5
}
function moveTextDown(){
    if (gMeme.lines[gMeme.selectedLineIdx].y === 530) return;
    gMeme.lines[gMeme.selectedLineIdx].y +=5
}

function  alignLeft(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'left'
    gMeme.lines[gMeme.selectedLineIdx].x = 50
}
function  alignCenter(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'center'
    gMeme.lines[gMeme.selectedLineIdx].x = 250
}
function  alignRight(){
    gMeme.lines[gMeme.selectedLineIdx].align = 'right'
    gMeme.lines[gMeme.selectedLineIdx].x = 400
}

function addLine(){
    gMeme.lines.push({
        txt: 'Text Here',
        size: 30,
        align: 'left',
        color: 'black',
        strokeColor: 'white',
        font:'impact' ,
        x: 250,
        y: 250,
    })
}

function switchLine() {
	gMeme.selectedLineIdx++;
	if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0;
}
