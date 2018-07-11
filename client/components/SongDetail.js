import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongDetail from '../queries/fetchSongDetail';

class SongDetail extends Component {
  onDeleteLyric(id, content) {
    return;
  }

  renderLyric() {
    const { lyrics } = this.props.data.song;
    return lyrics.map(({ content, id }) =>
        (
            <li key={id} className="collection-item">
              {content}
              <i className="material-icons right red-text"
                 onClick={() => this.onDeleteLyric(id, content)}>delete</i>
            </li>
        )
    );
  }

  render() {
    if (this.props.data.loading)
      return (<div> Loading...</div>);

    return (
        <div>
          <Link to="/">
            Back
          </Link>
          <ul className="collection">
            {this.renderLyric()}
          </ul>
        </div>
    );
  }
}

export default graphql(fetchSongDetail, {
  options: (props) => ({ variables: { id: props.params.id } })
})(SongDetail);
