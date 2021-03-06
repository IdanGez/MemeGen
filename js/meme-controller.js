'use strict'

function onInit() {
    restartGmeme()
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    resizeCanvas();
    createGallery();
    renderGallery();
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;
}

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

function renderShareModal() {
    var elShareModal = document.querySelector('.modal');
    elShareModal.classList.remove('about-modal');
    elShareModal.classList.add('share-modal');
    toggleModal();
    elShareModal.innerHTML = `
    <div class="save-to-mymeme" ><button onclick="onSaveMeme()">Save to My Memes</button></div >
    <div class="download"><button><a href="#" class="btn" onclick=" downloadImg(this)"
                download="my-meme.jpg">Download</a></button></div>
    `;
    downloadMeme();
}

function toggleModal() {
    document.body.classList.toggle('modal-open');
    document.querySelector('.modal').classList.toggle('hide');
}

function openAboutModal() {
    var elModal = document.querySelector('.modal');
    elModal.classList.add('about-modal');
    elModal.classList.remove('share-modal');
    toggleModal();
    elModal.innerHTML = `
    <section class="">
    <section class="" id="me" style="padding: 0px;">
    <div class="">
    <img class="" src="./images/idan/1.jpg" alt="">
    <h4>Idan Gez</h4>
    <p class="text-muted">Coding Academy <br>
                Full-Stack Developer <br>
                Student</p>
    </div>
    </section>
    </section>`;
}

function onSetFont(value) {
    if (getMeme().lines.length === 0 ) return
    setFont(value);
    document.querySelector('.dynamic-text-helper').style.fontFamily = value;
    renderMeme();
}

function onSaveMeme() {
    saveMeme();
    flashMsg()
}

function onAddLine() {
    addLine();
    renderMeme();

}

function onSwitchLine() {
    if (getMeme().lines.length === 0 ) return
    switchLine();
    renderMeme();
}

function onImgSelect(elImgId) {
    restartGmeme();
    showEditor();
    // var memeImg = getImgId(elImgId);
    setImg(elImgId);
    renderMeme();
};

function onSetText(text) {
    if (getMeme().lines.length === 0 ) return
    setLineText(text);
    renderMeme();

}

function onSetColor(color) {
    if (getMeme().lines.length === 0 ) return
    setColor(color);
    renderMeme();
}

function onSetStrokeColor(color) {
    if (getMeme().lines.length === 0 ) return
    setStrokeColor(color);
    renderMeme();
}

function onSetFontSize(value) {
    if (getMeme().lines.length === 0 ) return
    setFontSize(value);
    renderMeme();
}

function onMoveText(value) {
    if (getMeme().lines.length === 0 ) return
    moveText(value);
    renderMeme();
}

function onAlignText(value) {
    if (getMeme().lines.length === 0 ) return
    alignText(value);
    renderMeme();
}

function onDeleteLine() {
    if (getMeme().lines.length === 0 ) return
    deleteLine();
    renderMeme();
}

function renderMeme() {
    var meme = getMeme();
    var img = new Image();
    img.src = `images/sq-img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        insertTextLine(meme);
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
        gCtx.textAlign = line.align;
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
    gCtx.align = currLine.align;
    gCtx.beginPath();
    if (currLine.align === 'left') {
        gCtx.rect(
            currLine.x - 10,
            currLine.y - ySize / 2,
            xSize,
            ySize);
    } else if (currLine.align === 'center') {
        gCtx.rect(
            currLine.x - xSize / 2,
            currLine.y - ySize / 2,
            xSize,
            ySize);
    } else if (currLine.align === 'right') {
        gCtx.rect(
            currLine.x - xSize + 15,
            currLine.y - ySize / 2,
            xSize,
            ySize);
    }
    gCtx.stroke();
    gCtx.closePath();
}

function textWithoutFrame() {
    var meme = getMeme();
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

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}