import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  published_date: { type: Date, default: Date.now }
});

const Book = mongoose.model('books', bookSchema);

export { Book };