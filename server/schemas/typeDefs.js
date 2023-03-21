const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input SavedBookInput {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        title: String!
        link: String
    }
    type Book {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        title: String!
        link: String
    }
    type User {
        _id: ID
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]            
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        saveBook(book: SavedBookInput): User
        removeBook(bookId: String!): User 
    }
`;

module.exports = typeDefs;