import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($firstName: String!,$lastName: String!, $email: String!, $password: String!) {
    addProfile(firstName: $firstName,lastName: $lastName, email: $email, password: $password) {
      token
      profile {
        _id
        firstName
        lastName
        email
        password
       
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        email 
      }
    }
  }
`;
