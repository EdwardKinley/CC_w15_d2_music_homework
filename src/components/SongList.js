import React from 'react';
import SongDetail from './SongDetail.js';

class SongList extends React.Component {
  render() {
    const songComponents = this.props.songs.map((entry) => {
      return (<SongDetail
        position={this.props.songs.indexOf(entry)+1}
        image={entry["im:image"][2].label}
        title={entry["im:name"].label}
        artist={entry["im:artist"].label}
        artistLink={entry["im:artist"].attributes.href}
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
