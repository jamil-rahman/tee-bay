const { buildSchema } = require('graphql')


module.exports = buildSchema(`

  type User {
    _id: ID!
    name: String
    email: String!
    password: String!
    createdAt: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    title: String!
    price: Int!
    description: String!
    category: [Categories!]!
    rent: Int!
  }
  
  enum Categories {
    ELECTRONICS
    FURNITURE
    HOME APPLIANCES
    SPORTING GOODS
    OUTDOOR
    TOYS
  }
  
  
  input UserInput {
    email: String!
    password: String!
  }

  input ProductInput {
    title: String!
    price: Int!
    description: String!
    category: [Categories!]!
    rent: Int!
  }

  type Query {
    getUser(email:String):User
    getAllproducts:[Product!]
    getAProduct(title:String): Product
    getAllUsers: [User!]
  }

  type Mutation {
    createProduct(product:ProductInput): Product
    updateProduct(product:ProductInput): Product
    createUser(user:UserInput): User
    login(email: String!, password: String!): User
    deleteProduct(productId: ID!): String!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)