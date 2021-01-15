import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

import Root from "./components/Root"

const client = new ApolloClient({
  uri:"https://graphql.bitquery.io",
  cache: new InMemoryCache()
})

export default function App() {
  
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
}
