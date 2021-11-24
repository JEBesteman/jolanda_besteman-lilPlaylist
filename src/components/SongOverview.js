import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { nanoid } from "nanoid"; 

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  addNewSong = (song) => {
    const newSong = {
      id: nanoid(),
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      rating: song.rating,
    };
    this.setState({ songs: this.state.songs.concat(newSong) });
  };

  render() {
    return (
      <div>
        <SongForm onSubmit={this.addNewSong} />
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongOverview;
