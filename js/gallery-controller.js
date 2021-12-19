'use strict'

function renderGallery() {
    showGallery();
    const strHtmls = getgImgs().map((img) => {
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
    document.querySelector('.grid-container').innerHTML = strHTMLs.join('');
}

function onSetKeyword(elKeyword) {
	console.log(elKeyword);
	if (elKeyword === 'all') {
		renderGallery();
		showGallery();
	}
	var filteredImgs = gImgs.filter(
		(img) =>
			img.keyword.keyword1 === elKeyword ||
			img.keyword.keyword2 === elKeyword
	);
	const strHTMLs = filteredImgs.map((img) => {
		return `
	    <div id="${img.id}" onclick="onImgSelect(this)" class="img img${img.id}"><img src="${img.url}" alt=""></div>
	    `;
	});
	document.querySelector('.grid-container').innerHTML = strHTMLs.join('');
}