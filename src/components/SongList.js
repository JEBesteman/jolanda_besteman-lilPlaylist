import React from "react";
import ListItem from "./ListItem";

const SongList = ({ songs, deleteSong }) => {
  const songItems = songs.map((song) => (
    <ListItem key={song.id} song={song} deleteSong={deleteSong} />
  ));
  return (
    <div className="playlist">
      <table>
        <thead>
          <tr className="song-header">
            <th>Song</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{songItems}</tbody>
      </table>
    </div>
  );
};

export default SongList;
