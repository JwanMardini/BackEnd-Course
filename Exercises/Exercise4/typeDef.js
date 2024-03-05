export const typeDefs = `#graphql

type User {
    id: Int!
    name: String!
    email: String
    friends: [User]!
}

type FriendFeed {
    posts: [Post]!
}

type Post{
    id: Int!
    content: String
    author: User!
}

type Query{
    allUsers: [User!]
    allPosts: [Post!]
    userBy(id: Int!): User
    postBy(id: Int!): Post
    friendFeed(id: Int!): FriendFeed
}

type Mutation {
    addFriend(): User
}

`