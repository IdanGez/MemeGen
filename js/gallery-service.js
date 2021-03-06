'use strict'
//Global Variables
var gNextIdx = 0;
var gImgs = [{id:gNextIdx, url:`images/sq-img/${gNextIdx++}.jpg`, keywords: []}];
var gKeywords = [
    {
        keyword1: 'celberity',
        keyword2: 'politics'
    },
    {
        keyword1: 'animal',
        keyword2: 'cute'
    },
    {
        keyword1: 'animal',
        keyword2: 'baby'
    },
    {
        keyword1: 'animal',
        keyword2: 'cute'
    },
    {
        keyword1: 'baby',
        keyword2: 'win'
    },
    {
        keyword1: 'sience',
        keyword2: 'funny'
    },
    {
        keyword1: 'baby',
        keyword2: 'funny'
    },
    {
        keyword1: 'funny',
        keyword2: 'tv'
    },
    {
        keyword1: 'funny',
        keyword2: 'baby'
    },
    {
        keyword1: 'funny',
        keyword2: 'politics'
    },
    {
        keyword1: 'sports',
        keyword2: 'couple'
    },
    {
        keyword1: 'celberity',
        keyword2: 'tv'
    },
    {
        keyword1: 'celberity',
        keyword2: 'movies'
    },
    {
        keyword1: 'celberity',
        keyword2: 'movies'
    },
    {
        keyword1: 'celberity',
        keyword2: 'movies'
    },
    {
        keyword1: 'celberity',
        keyword2: 'movies'
    },
    {
        keyword1: 'celberity',
        keyword2: 'politics'
    },
    {
        keyword1: 'funny',
        keyword2: 'movies'
    },
];

function createGallery() {
    gImgs = gKeywords.map((keyword) =>{
        return createImg(keyword);
    });
}

function createImg(keyword) {
    return {
        id: gNextIdx,
        url: `images/sq-img/${gNextIdx++}.jpg`,
        keyword: keyword,
    }

}

function getgImgs(){
    return gImgs;
}