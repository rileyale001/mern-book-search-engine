import { gql } from '@apollo/client';
export const GET_USER = gql`
  {
    me {
        _id
        email
        username
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
`;