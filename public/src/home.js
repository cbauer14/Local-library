function getTotalBooksCount(books) {
  let result = books.length;
  return result;
}

function getTotalAccountsCount(accounts) { 
let result = accounts.length;
  return result;
}

function getBooksBorrowedCount(books) {
  //let total = 0;
  let result = books.reduce((total, book) => {if(!book.borrows[0].returned) total++; return total;}, 0);
  return result;
}

function getMostCommonGenres(books) {
  //create an array of just the genres in the provided book collection
  const genreArray = books.map((book) => book.genre)
  //now to create a counter for each...
  const counter = {};
  genreArray.map((genre) => {
    if(Object.keys(counter).includes(genre)){
      counter[genre] +=1;
    }else{
      counter[genre] = 1;
    }
    })
  //this is a second map to make our object an array.
  //I'll just tack on the sort and slice to this function
  let counterArray = Object.keys(counter).map((genre) => {
    return {'name': genre, 'count': counter[genre]}
  }).sort((a,b) => b.count - a.count).slice(0,5)
  return counterArray;
}

function getMostPopularBooks(books) {
const popularBook = books.map((book) => {
  const bookInfo = {
    name:book.title,
    count:book.borrows.length
  };
  return bookInfo;
})
    return popularBook.sort((a,b) => b.count - a.count).slice(0,5)
}

function getMostPopularAuthors(books, authors) { 
  let authorBorrows = authors.map((author) => {
    let counter = 0;
    books.forEach((book) => {
      if(book.authorId == author.id){
        counter += book.borrows.length;
      }
    })
    return {name: author.name.first + " " + author.name.last, count: counter}
  }).sort((a,b) => b.count - a.count).slice(0,5)
  return authorBorrows;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
