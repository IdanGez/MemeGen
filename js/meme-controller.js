'use strict'

var gElCanvas;
var gCtx;
// var gIsDrawing = false
// var pos = { x: 0, y: 0 };
// var gPrevPos = { x: 0, y: 0 }

function onInit() {
    console.log('lets fuckin go')
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    resizeCanvas()
    createGallery()
    renderGallery()
    // addListeners()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

// function addListeners() {
//     // addMouseListeners();
//     window.addEventListener('resize', () => {
//       resizeCanvas();
//     });
// }

function showEditor() {
    document.querySelector('.meme-editor').classList.remove('hide');
    document.querySelector('.grid-container').classList.add('hide');
    document.querySelector('.search-bar').classList.add('hide');
    document.querySelector('.about').classList.add('hide');
    document.querySelector('.space-helper').classList.remove('hide');

}

function showGallery() {
    document.querySelector('.meme-editor').classList.add('hide');
    document.querySelector('.grid-container').classList.remove('hide');
    document.querySelector('.search-bar').classList.remove('hide');
    document.querySelector('.about').classList.remove('hide');
    document.querySelector('.space-helper').classList.add('hide');


}
function onSetFont(value) {
    setFont(value)
    document.querySelector('.dynamic-text-helper').style.fontFamily = value
    renderMeme()

}
function onAddLine() {
    addLine()
    renderMeme()

}
function onSwitchLine() {
    switchLine()
    renderMeme()
}

function onImgSelect(elImgId) {
    restartGmeme()
    showEditor()
    var memeImg = getImgId(elImgId)
    setImg(elImgId)
    renderMeme()
};

function onSetText(text) {
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

function onIncreaseFont() {
    increaseFont()
    renderMeme()
}

function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}

function onMoveTextUp() {
    moveTextUp()
    renderMeme()
}
function onMoveTextDown() {
    moveTextDown()
    renderMeme()
}
function onAlignLeft() {
    alignLeft()
    renderMeme()
}
function onAlignCenter() {
    alignCenter()
    renderMeme()

}
function onAlignRight() {
    alignRight()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}
function renderMeme() {
    var meme = getMeme()
    // if (meme.lines.length === 0) return
    var img = new Image();
    img.src = `images/sq-img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        insertTextLine(meme)
    }
}

function insertTextLine(meme) {
    if (meme.selectedLineIdx < 0) {
        meme.selectedLineIdx++;
        return;
    }
    drawRect(meme)
    meme.lines.forEach((line) => {
        gCtx.textBaseline = 'middle';
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.fillStyle = line.color;
        gCtx.lineWidth = 1;
        gCtx.strokeStyle = line.strokeColor;
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
    });
}

function drawRect(meme) {
    var currLine = meme.lines[meme.selectedLineIdx];
    if (!currLine.txt) return
    var textSize = document.querySelector('.dynamic-text-helper');
    textSize.innerText = currLine.txt;
    textSize.style.fontSize = currLine.size + 'px'
    var xSize = textSize.clientWidth + 30;
    var ySize = textSize.clientHeight + 4;
    gCtx.lineWidth = 4;
    gCtx.strokeStyle = 'black';
    if (currLine.align === 'left') {
        gCtx.align = currLine.align
        gCtx.beginPath()
        gCtx.rect(
            currLine.x-10,
            currLine.y - ySize / 2,
            xSize,
            ySize);
        gCtx.stroke();
        gCtx.closePath();
    } else if (currLine.align === 'center') {
        gCtx.align = currLine.align
        gCtx.beginPath()
        gCtx.rect(
            currLine.x - xSize / 2,
            currLine.y - ySize / 2,
            xSize,
            ySize);
        gCtx.stroke();
            gCtx.closePath();
        } else if (currLine.align === 'right') {
        gCtx.align = currLine.align
        gCtx.beginPath()
        gCtx.rect(
            currLine.x - xSize+15,
            currLine.y - ySize / 2,
            xSize,
            ySize);
        gCtx.stroke();
        gCtx.closePath();
    }
}


function downloadMeme(elLink){
    var link = elLink
    var meme = getMeme()
    // if (meme.lines.length === 0) return
    var img = new Image();
    img.src = `images/sq-img/${meme.selectedImgId}.jpg`;
    console.log(meme.selectedImgId)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        textWithoutFrame()
        downloadImg(link)
    }
}

function textWithoutFrame() {
    var meme = getMeme()
    meme.lines.forEach((line) => {
        gCtx.textBaseline = 'middle';
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.fillStyle = line.color;
        gCtx.lineWidth = 1;
        gCtx.strokeStyle = line.strokeColor;
        gCtx.textAlign = line.align
        gCtx.fillText(line.txt, line.x, line.y);
        gCtx.strokeText(line.txt, line.x, line.y);
    });
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('img/jpeg')
    elLink.href = imgContent
}

function toggleMenu(){
    document.body.classList.toggle('burger-menu');
}