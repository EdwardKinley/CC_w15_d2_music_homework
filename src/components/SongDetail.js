import React from 'react';

const SongDetail = function(props) {
  return (
    <tr className="table-row">
      <td>#{props.position}</td>
      <td><a href={props.previewLink} target="_blank"><img src={props.image} alt={props.title} /></a></td>
      <td>{props.title}</td>
      <td><a href={props.artistLink} target="_blank">{props.artist}</a></td>
      <td>{props.price}</td>
    </tr>
  );
}

export default SongDetail;
