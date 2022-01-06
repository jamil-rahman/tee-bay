import { gql } from "@apollo/client";

export const getAllUsers = gql`
{
    getAllUsers{
      email
      password
    }
  }

`
export const getUser = gql`
{
    getUser(email: String){		
        email
        password
    }
    
  }
`  

export const getAllproducts = gql`
{
    getAllproducts{
        title
        price
        rent
        description
        category
    }
  }
`

export const getAProduct = gql`
{
    getAProduct(title: String){
        title
        price
        rent
        description
        category
    }
  }
  
`