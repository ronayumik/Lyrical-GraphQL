import ApolloClient from 'apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import SongList from './components/SongList';

const client = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SongList} />
          </Route>
        </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
