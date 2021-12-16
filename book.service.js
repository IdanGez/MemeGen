'use strict';
const STORAGE_KEY = 'bookDB';
const PAGE_SIZE = 5;

var gBooks;
var gPageIdx = 0;
var gNextId;
var gSortBy = 'title';

_createBooks();

function getBooks() {
  if (gSortBy === 'id') gBooks.sort((b1, b2) => b1.id.localeCompare(b2.id));
  if (gSortBy === 'title') gBooks.sort((b1, b2) => b1.name.localeCompare(b2.name));
  if (gSortBy === 'price') gBooks.sort((b1, b2) => b1.price - b2.price);
  const startIdx = gPageIdx * PAGE_SIZE;
  return gBooks.slice(startIdx, startIdx + PAGE_SIZE);
}

function getNumPages() {
  return Math.ceil(gBooks.length / PAGE_SIZE);
}

function addBook(name, price) {
    console.log(gNextId);
  const book = _createBook(name, price);
  gBooks.push(book);
  _saveBooksToStorage();
  return book;
}

function removeBook(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === +bookId);
  gBooks.splice(bookIdx, 1);
  if(gBooks.length % PAGE_SIZE === 0) gPageIdx--;
  _saveBooksToStorage();
}

function updateBook(bookId, newPrice) {
  const book = getBookById(bookId);
  book.price = newPrice;
  _saveBooksToStorage();
  return book;
}

function updateBookRate(bookId, newRate) {
  const book = getBookById(bookId);
  book.rate = newRate;
  _saveBooksToStorage();
  return book;
}

function getBookById(bookId) {
  return gBooks.find((book) => book.id === +bookId);
}

function setBookSort(sortBy) {
  gSortBy = sortBy
}

function goToPage(numPage) {
  gPageIdx = numPage;
}

function _createBooks() {
  var books = loadFromStorage(STORAGE_KEY);
  if (!books || !books.length) {
    books = [];
    gNextId = 1;
    books.push(_createBook('Learning Laravel', 18.9));
    books.push(_createBook('Beginning with Laravel', 6.65));
    books.push(_createBook('Java for developers', 7.2));
  }
  gBooks = books;
  gNextId = gBooks.length
  _saveBooksToStorage();
}

function _createBook(name = 'new book', price = 0) {
  return {
    // id: makeId(),
    id: gNextId++,
    name: name,
    price: price,
    // imgUrl: `<img src="img/1.png">`,
    rate: 0,
  };
}

function _saveBooksToStorage() {
  saveToStorage(STORAGE_KEY, gBooks);
}
