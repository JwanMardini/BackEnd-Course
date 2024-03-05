import {users, posts} from './_data.js'

export const resolvers =  {
    Query: {
        allUsers: () => users,
        allPosts: () => posts,
        userBy: (_, {id}) => users.find(user => user.id === id),
        postBy: (_, {id}) => posts.find(post => post.id === id),
    },
    Mutation: {
        addFriend: (_, args) => users.push({id: users.length + 1, name: args.name, email: args.email})
    }
}