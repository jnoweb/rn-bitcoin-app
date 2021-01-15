import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"

import Navigation from "./Navigation"

const client = new ApolloClient({
  uri:"https://graphql.bitquery.io",
  cache: new InMemoryCache()
})

export default function App() {
  
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}
