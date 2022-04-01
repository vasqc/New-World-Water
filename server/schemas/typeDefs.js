const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedWater: [Water]
  }
  type Brand {
    
    source: [String]
    description: String
    image: String
    link: String
    tds: String!
    price: Int!
  }
  type Water {
    
    source: [String]
    description: String
    image: String
    link: String
    tds: String!
    price: Int!
  }
  type Auth {
    token: ID!
    user: User
  }
  input WaterInput {
    source: [String]
    description: String
    image: String
    link: String
    tds: String!
    price: Int!
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveWater(waterData: WaterInput!): User
    removeWater(waterId: brand!): User
  }
`;

module.exports = typeDefs;