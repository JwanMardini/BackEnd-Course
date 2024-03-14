import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typeDef.js';
import { resolvers } from './resolvers.js'
import pkg from "pg"

const {Pool} = pkg

const pool = new Pool ({
    user: "myadmin",
    host: "172.17.0.2",
    database: "mydb",
    password: "pw",
    port: 5432,
})


// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
const { url } = await startStandaloneServer(server, {
    context: async ({req, res}) => ({
        pool
    }), 
    listen: {port: 3000}
});
console.log(`🚀 Server ready at ${url}`);