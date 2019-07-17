import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:1000/graphql"
});

export default client;