'use strict'


function renderGallery() {

    const strHtmls = gImgs.map((img) => {
        return `
        <div id="${img.id}" onclick="onImgSelect(this.id)" class="grid-img img${img.id}"><img src="${img.url}"alt=""></div>`
    });
    // console.log(strHtmls)
    document.querySelector('.grid-container').innerHTML = strHtmls.join('');
}

