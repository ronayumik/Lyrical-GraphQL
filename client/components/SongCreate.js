import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSong';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query }]
    }). then( () => hashHistory.push('/'));
  }

  render() {
    return (
        <div>
          <Link to="/">
            Back
          </Link>
          <h3>Create a New Song</h3>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Song Title: </label>
            <input type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} />
          </form>
        </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title){
      title
    }
  } 
`;

export default graphql(mutation)(SongCreate);
