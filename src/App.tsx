import * as React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import Main from "./components/main";

import "./styles.css";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://pf3c5.sse.codesandbox.io" }) as any,
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          background:
            "linear-gradient(45deg,rgba(240,221,52,.8),rgba(6,9,10,.4))"
        }}
      >
        <Main />
      </div>
    </ApolloProvider>
  );
};

export default App;
