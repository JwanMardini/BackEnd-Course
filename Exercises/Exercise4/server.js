import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './typeDef.js';
import { resolvers } from './resolvers.js'


// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);