
export const users = async ({pool}) => {
    const res = await pool.query("SELECT * FROM users")
    return res.rows
}

export const posts = async ({id}, {pool}) => {
    const res = await pool.query("SELECT * FROM posts WHERE author_id = $1", [id])
    return res.rows
     
}

export const userBy = async ({id}, {pool}) => {
    const res = await pool.query("SELECT * FROM users WHERE id = $1", [id])
    return res.rows[0]
}

export const postBy = async ({id}, {pool}) => {
    const res = await pool.query("SELECT * FROM posts WHERE id = $1", [id])
    return res.rows[0]
}


export const friendFeed = async ({id}, {pool}) => {
    const res = await pool.query(`
    SELECT posts.id, posts.content, posts.author_id FROM posts
    JOIN friendships ON friendships.friend_id = posts.author_id
    WHERE friendships.user_id = $1
    `, [id]);
    return { posts: res.rows };
}

