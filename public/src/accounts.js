function findAccountById(accounts, id) {
return accounts.find((account) => account.id === id);
}
// find accounts that matches account plus matching id 


function sortAccountsByLastName(accounts) {
 return accounts.sort((accountsA, accountsB) => accountsA.name.last > accountsB.name.last ? 1 : -1);
  }

function getTotalNumberOfBorrows(account, books) {
 let counter = 0;
  books.forEach(book => book.borrows.forEach(borrow => {if (account.id === borrow.id) counter++}));
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const checkedOutBooks = [];
  for (let book of books) {
    const {borrows, authorId} = book;
    const isBorrowed = borrows[0].id === accountId && !borrows[0].returned;
    if (isBorrowed) {
      const author = authors.find((author) => author.id === authorId);
      checkedOutBooks.push({...book, author});  
      }
      }
    return checkedOutBooks;
      }

//An account object.
//An array of all book objects.
//An array of all author objects.
//It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
