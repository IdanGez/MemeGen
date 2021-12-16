'use strict'
var gFillColor = '#e66465';
var gStrokeColor = '#f6b73c';
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Im the first line',
        size: 30,
        align: 'left',
        color: 'red',
        strokeColor: 'white',
        x: 250,
        y: 50,
        isActive: true
    },{
        txt: 'Im the second line ',
        size: 30,
        align: 'left',
        color: 'red',
        strokeColor: 'white',
        x: 250,
        x: 250,
        y: 500,
        isActive: true
    }]
}

function restartGmeme(){
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{
            txt: 'Im the first line',
            size: 30,
            align: 'left',
            color: 'red',
            strokeColor: 'white',
            x: 250,
            y: 50,
            isActive: true
        },{
            txt: 'Im the second line ',
            size: 30,
            align: 'left',
            color: 'red',
            strokeColor: 'white',
            x: 250,
            x: 250,
            y: 500,
            isActive: true
        }]
    }
}

function setImg(memeImg) {
    gMeme.selectedImgId = memeImg

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

// function setFillColor(color) {
//     gFillColor = color;
// }

function deleteLine(){
    // console.log('before - selectedLineIdx' , gMeme.selectedLineIdx)
    // console.log( 'before - lines length' , gMeme.lines.length)
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx--
    // console.log('after- selectedLineIdx' , gMeme.selectedLineIdx)
    // console.log( 'after- lines length'  , gMeme.lines.length)
    // console.log(gMeme.selectedLineIdx)
    // gMeme.selectedLineIdx === gMeme.lines.length;
    // if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0

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

function alineLeft(){
    console.log('hi')
    gMeme.lines[gMeme.selectedLineIdx].x = 150
}
function alineCenter(){
    console.log('hi')
    gMeme.lines[gMeme.selectedLineIdx].x = 275
}
function alineRight(){
    console.log('hi')
    gMeme.lines[gMeme.selectedLineIdx].x = 400
}

function addLine(){
    gMeme.lines.push({
        txt: 'Extra Text Here!',
        size: 30,
        align: 'right',
        color: 'blue',
        x: 250,
        y: 350,
        isActive: true
    })
}

function switchLine() {
    // console.log(gMeme.selectedLineIdx)
	gMeme.selectedLineIdx++;
	if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0;
}
