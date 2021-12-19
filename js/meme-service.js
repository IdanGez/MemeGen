'use strict'
var gSavedMemes = [];
var gNewMemeIdx = getgImgs().length + 1;
var gElCanvas = 0;
var gCtx;
var gMeme;

function restartGmeme() {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [{
            txt: 'Text Here',
            size: 30,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            font: 'impact',
            x: gElCanvas.width * 0.1,
            y: gElCanvas.height * 0.1,
        }, {
            txt: 'Text Here ',
            size: 30,
            align: 'left',
            color: 'black',
            strokeColor: 'white',
            font: 'impact',
            x: gElCanvas.width * 0.1,
            y: gElCanvas.height * 0.8,
        }]
    }
}

function setImg(memeImg) {
    gMeme.selectedImgId = memeImg;
}

function getCurrLine() {
    if (!gMeme) return
    return gMeme.lines[gMeme.selectedLineIdx]
}

function setFont(value) {
    getCurrLine().font = value;
}

function getImgId(elImgId) {
    return gImgs.find((img) => img.id === +elImgId);
}

function saveMeme() {
    var currMeme = gMeme;
    currMeme.url = gElCanvas.toDataURL('img/jpeg');
    currMeme.id = gNewMemeIdx;
    gSavedMemes.push(currMeme);
    saveToStorage(STORAGE_KEY, gSavedMemes);
    gNewMemeIdx++;
}

function getMeme() {
    return gMeme;
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx--
}

function setColor(color) {
    getCurrLine().color = color;
}

function setStrokeColor(color) {
    getCurrLine().strokeColor = color;
}

function setLineText(text) {
    getCurrLine().txt = text;
}

function setFontSize(value) {
    if (value === 'inc') {
        if (getCurrLine().size === 55) return
        getCurrLine().size += 2.5;
    } else if (value === 'dec') {
        if (getCurrLine().size === 20) return
        getCurrLine().size -= 2.5;
    }
}

function moveText(value) {
    if (value === 'up') {
        if (getCurrLine().y === 30) return;
        getCurrLine().y -= 5;
    } else if (value ==='down') {
        if (getCurrLine().y === gElCanvas.height - 20) return;
        getCurrLine().y += 5;
    }
  }

function alignText(value){
    if (value === 'left') {
        getCurrLine().align = 'left';
        getCurrLine().x = gElCanvas.width * .1;
    } else if (value === 'center') {
        getCurrLine().align = 'center';
        getCurrLine().x = gElCanvas.width / 2;
    } else if (value === 'right') {
        getCurrLine().align = 'right';
        getCurrLine().x = (gElCanvas.width) * .85;
    }
}

function addLine() {
    gMeme.lines.push({
        txt: 'Text Here',
        size: 30,
        align: 'left',
        color: 'black',
        strokeColor: 'white',
        font: 'impact',
        x: gElCanvas.width * .1,
        y: gElCanvas.height / 2,
    });
}

function switchLine() {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0;
}

function flashMsg() {
    var el = document.querySelector('.flash-modal')
    // el.style.bottom = '0';
    el.classList.add('open')
    setTimeout(() => {
        el.classList.remove('open') 
    }, 2500);
    
}
