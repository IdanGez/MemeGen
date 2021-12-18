'use strict'

function renderGallery() {
    showGallery();
    const strHtmls = gImgs.map((img) => {
        return `
        <div id="${img.id}" onclick="onImgSelect(this.id)" class="grid-img img${img.id}"><img src="${img.url}"alt=""></div>`
    });
    document.querySelector('.grid-container').innerHTML = strHtmls.join('');
}

function renderMyMemes() {
    showGallery();
    var savedMemes = loadFromStorage(STORAGE_KEY);
    const strHTMLs = savedMemes.map((meme) => {
        return `<a href="${meme.url}" download="my-meme.jpg"><img src="${meme.url}" alt=""></a>
        `
    });
    document.querySelector('.grid-container').innerHTML = strHTMLs;
}

