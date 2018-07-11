import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { compose } from 'recompose';
import swal from 'sweetalert2';
import deleteSongQuery from '../queries/deleteSong';
import fetchSongQuery from '../queries/fetchSong';

class SongList extends Component {
  deleteSong(id, title) {
    this.props.mutate({
      variables: { id }
    }).then(() => {
      this.props.data.refetch().then( () =>
      swal(
          `Success`,
          `Successfully delete ${title}`,
          'success'
      ) );
    });
  }

  renderSongs() {
    return this.props.data.songs.map(song =>
        (
            <li key={song.id} className="collection-item">
              {song.title}
              <i className="material-icons right red-text"
                 onClick={() => this.deleteSong(song.id, song.title)}>delete</i>
            </li>
        )
    );
  }

  render() {
    if (this.props.data.loading)
      return (<div> Loading...</div>);
    return (
        <div>
          <ul className="collection">
            {this.renderSongs()}
          </ul>
          <Link to="/songs/create" className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
          </Link>
        </div>
    );
  }
}

export default compose(
    graphql(fetchSongQuery),
    graphql(deleteSongQuery))
(SongList);
