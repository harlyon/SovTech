import React from 'react';
import client from './config/config';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import Categories from './components/categories';
import './App.css';
import Category from './components/category';

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
      <Router>
        <>
          <div className="container App">
            <Switch>
              <Route exact path="/" component={Categories} />
              <Route exact path="/:item" component={Category} />
            </Switch>
          </div>
        </>
      </Router>
      </ApolloHooksProvider>
    </ApolloProvider>

  );
}

export default App;
