import {users, posts} from './_data.js'

export const resolvers =  {
    Query: {
        allUsers: () => users,
        allPosts: () => posts,
        userBy: (_, {id}) => users.find(user => user.id === id),
        postBy: (_, {id}) => posts.find(post => post.id === id),

        friendFeed: (_, {id}) => {
            const user = users.find(user => user.id === id)
            const friendPosts = posts.filter(post => user.friends.includes(post.author.id))
            return {posts: friendPosts}
        }
      
    },

    Mutation: {
        addFriend: (_, {userId, friendId}) => {
            const user = users.find(user => user.id === userId)
            const friendsList = user.friends.push(friendId)
            console.log(friendsList)
            console.log(users)
            console.log(user)
            return user
        }
    }
}

