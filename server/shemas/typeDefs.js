const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }

  type bookInput {
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }

  type User {
    _id: ID
    userName: String
    bookCount: Int
    savedBooks: [Book]
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
   me: User
    token: ID
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
