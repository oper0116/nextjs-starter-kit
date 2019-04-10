import { Book } from './model';

const bookController = {
  books: () => Book.find({}),
  addBook: (book) => {
    const newPost = new Post({
      title: book.title, author: book.author, published_date: new Data()
    });
		return newPost.save();
  },
  findOneByBookId: (bookId) => {
    return this.findOne({ bookId });
  }
}

export { bookController };