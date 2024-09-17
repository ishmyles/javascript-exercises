const getTheTitles = function (booksObjArr) {
  return booksObjArr.reduce((books, book) => {
    books.push(book.title);
    return books;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
