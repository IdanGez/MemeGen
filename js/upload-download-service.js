'use strict'

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg);
}

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.canvas-container').innerHTML = '';
    var reader = new FileReader();

    reader.onload = (event) => {
        var img = new Image();
        img.onload = onImageReady.bind(null, img);
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}

function renderImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
}   

function downloadMeme() {
    var meme = getMeme();
    var img = new Image();
    img.src = `images/sq-img/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        textWithoutFrame();
    }
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('img/jpeg');
    elLink.href = imgContent;
}