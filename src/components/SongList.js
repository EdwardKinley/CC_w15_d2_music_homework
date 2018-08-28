import React from 'react';
import SongDetail from './SongDetail.js';

class SongList extends React.Component {
  render() {
    const songComponents = this.props.songs.map((entry) => {
      return (<SongDetail
        position={this.props.songs.indexOf(entry)+1}
        title={entry["im:name"].label}
        artist={entry["im:artist"].label}
        price={entry["im:price"].label}
      />);
    });

    return (
      <tbody>
        {songComponents}
      </tbody>
    );
  }
}

export default SongList;
