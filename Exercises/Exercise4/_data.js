export const users = [
    { id: 1, name: 'John', email: "john@example", friends: [1, 2, 3, 4, 5]},
    { id: 2, name: 'Jane', email: "jane@example", friends: [1, 2, 3, 4]},
    { id: 3, name: 'Jim', email: "jim@example", friends: [3, 4 ,2]},
    { id: 4, name: 'Jill', email: "jill@example", friends: [1, 3, 5]},
    { id: 5, name: 'Jack', email: "jack@example", friends: [1, 4, 2]},
]


export const posts = [
    { id: 1, content: 'This is a post', author: users[0]},
    { id: 2, content: 'This is another post', author: users[1]},
    { id: 3, content: 'This is yet another post', author: users[2]},
    { id: 4, content: 'This is a post', author: users[3]},
    { id: 5, content: 'This is another post', author: users[4]},
]