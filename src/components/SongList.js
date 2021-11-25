import React from "react";
import ListItem from "./ListItem";

const SongList = ({ songs, deleteSong }) => {
  const songItems = songs.map((song) => (
    <ListItem key={song.id} song={song} deleteSong={deleteSong} />
  ));
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr className="song-header">
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
        </tr>
      </thead>
      <tbody>{songItems}</tbody>
    </table>
  );
};

export default SongList;
