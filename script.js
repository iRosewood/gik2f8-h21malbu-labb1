'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);


function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));


function renderBook(book) {

  const getElement = document.getElementById("bookDetail");
  const root = document.getElementById("root");

  getElement && getElement.remove();

  let html = BookDetail(book);
  root.insertAdjacentHTML("beforeend", html)

}

  
const getBook = document.querySelectorAll(".book-list__item"); 

  for(let i = 0; i < getBook.length; i++){ 

    getBook[i].addEventListener("mouseenter", (e) => {
      let book = getOne(e.target.id)
      book.then(function (result){
        renderBook(result);
      })
    });

    getBook[i].addEventListener("mouseleave", () => {
      const existElement = document.getElementById("bookDetail");
      existElement && existElement.remove();
    });

    

  }
}




  



