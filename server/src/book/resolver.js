import { bookController } from './controller';

const resolver = {
  Query: {
		books(root, args, context) {
      return bookController.books(root, args);
    }
  }
};

export { resolver };