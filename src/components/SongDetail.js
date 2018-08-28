import React from 'react';

const SongDetail = function(props) {
  return (
    <tr className="table-row">
      <td>#{props.position}</td>
      <td><img src={props.image} alt={props.title} /></td>
      <td>{props.title}</td>
      <td><a href={props.artistLink}>{props.artist}</a></td>
      <td>{props.price}</td>
    </tr>
  );
}

export default SongDetail;
