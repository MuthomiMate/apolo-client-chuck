import * as React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import Joke from "./joke";

import "./styles.css";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://pf3c5.sse.codesandbox.io" }) as any,
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Joke />
      </div>
    </ApolloProvider>
  );
};

export default App;
