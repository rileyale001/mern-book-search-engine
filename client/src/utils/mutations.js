import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            image
            authors
            description
            title
            link   
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
        bookCount
        email
        saveBooks {
            bookId
            description
            image
            link
            title
            authors
        }
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($input: bookInput!) {
    saveBook(input: $input) {
        _id
        email
        username
        saveBooks {
            bookId
            description
            image
            link
            title
            authors
        }
      }
    }
`;
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        email
        username
        bookCount
        saveBooks {
            bookId
            title
            description
            image
            link
            authors
        }
      }
    }
`;
