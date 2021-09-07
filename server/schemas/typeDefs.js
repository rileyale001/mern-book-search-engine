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
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput!): User
    login(username: String!, email: String!, password: String!): Auth
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;