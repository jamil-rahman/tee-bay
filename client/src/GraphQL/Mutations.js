import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
mutation createUser( $email: String!, $password: String!) {
    createUser (userInput:{email: $email, password: $password}){
      _id
      email
        password
    }
}
`;
