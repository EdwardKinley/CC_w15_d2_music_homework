import React from 'react';

const SongDetail = function(props) {
  return (
    <tr>
      <td>#{props.position}</td>
      <td>{props.title}</td>
      <td>{props.artist}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default SongDetail;
