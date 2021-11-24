import React from "react";
import ListItem from "./ListItem";

const SongList = ({ songs }) => {
  const songItems = songs.map((song) => <ListItem key={song.id} song={song} />);
  return (
    <table style={{ width: "100%" }}>
      <tr className="song-header">
        <th className="song-row__item">Song</th>
        <th className="song-row__item">Artist</th>
        <th className="song-row__item">Genre</th>
        <th className="song-row__item">Rating</th>
      </tr>
      {songItems}
    </table>
  );
};

export default SongList;
