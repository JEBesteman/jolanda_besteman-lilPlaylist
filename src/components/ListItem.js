import React from "react";

const ListItem = ({ song, deleteSong }) => {
  return (
    <tr className="song-header">
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.genre}</td>
      <td>{song.rating}</td>
      <td>
        <button onClick={() => deleteSong(song.id)}>delete</button>
      </td>
    </tr>
  );
};

export default ListItem;
