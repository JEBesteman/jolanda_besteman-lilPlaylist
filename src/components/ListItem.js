import React from "react";

const ListItem = ({ song, deleteSong }) => {
  return (
    <tr className="song-header">
      <th className="song-row__item">{song.title}</th>
      <th className="song-row__item">{song.artist}</th>
      <th className="song-row__item">{song.genre}</th>
      <th className="song-row__item">{song.rating}</th>
      <th>
        <button onClick={() => deleteSong(song.id)}>delete</button>
      </th>
    </tr>
  );
};

export default ListItem;
