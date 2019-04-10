import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { mergeSchemas } from 'graphql-tools';

import resolvers from './resolvers';
import schemas from './schemas';

const port = process.env.PORT || 8080;

const MONGO_PORT = 27017;
const MONGO_URL = "localhost";
const DB_NAME = "mongoose-dev1";


// [LOAD PACKAGES]

mongoose.set("debug", true);
mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/${DB_NAME}`);


const schema = mergeSchemas({
  schemas,
  resolvers
});


const server = new ApolloServer({
  schema,
  context: async(context) => {
    console.debug('context');
  },
  tracing: true
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
})