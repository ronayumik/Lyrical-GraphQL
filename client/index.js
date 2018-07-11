import ApolloClient from 'apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import SongDetail from './components/SongDetail';
import LyricCreate from './components/LyricCreate';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={SongList} />
            <Route path="songs/create" component={SongCreate}/>
            <Route path="lyrics/create" component={LyricCreate}/>
            <Route path="songs/:id" component={SongDetail}/>
          </Route>
        </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
