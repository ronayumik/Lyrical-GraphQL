import gql from 'graphql-tag';
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSong';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyric: ''
    };
  }

  onTitleChange(event) {
    this.setState({
      lyric: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
        <div>
          <h4>Add new lyric</h4>
          <form onSubmit={this.onSubmit.bind(this)}>
            <label>Song Lyric: </label>
            <input type="text" value={this.state.lyric} onChange={this.onTitleChange.bind(this)} />
          </form>
        </div>
    );
  }
}


export default /*graphql(mutation)*/(LyricCreate);
