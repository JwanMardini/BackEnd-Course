// import {users, posts} from './_data.js'
import {users, posts, userBy, postBy, friendFeed} from './db.js'


export const resolvers =  {
    Query: {
        allUsers: (_, args, context) => users(context),
        allPosts: (_, args, context) =>  posts(args, context),
        userBy: (_, args, context) => userBy(context),
        postBy: (_, args, context) => postBy(args, context),
        friendFeed: (_, args, context) => friendFeed(args, context)
    },

    Mutation: {
        // addFriend: (_, {userId, friendId}) => {
        //     const user = users.find(user => user.id === userId)
        //     const friendsList = user.friends.push(friendId)
        //     console.log(friendsList)
        //     console.log(users)
        //     console.log(user)
        //     return user
        // }
    }
}

