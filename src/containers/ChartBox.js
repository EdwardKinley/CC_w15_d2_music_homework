import React from 'react';
import SongList from '../components/SongList.js';

class ChartBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };

  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((songs) => {
      this.setState({ songs: songs.feed.entry });
    });
  }

  render() {
    return (
      <table className="song-table">
        <SongList songs={this.state.songs} />
      </table>
    );
  }

}

export default ChartBox;
