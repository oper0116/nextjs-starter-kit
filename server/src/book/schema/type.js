import { gql } from "apollo-server";

const type = gql`
  type Book {
    _id: String
    author: String,
  }
`;

export { type };