import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { nanoid } from "nanoid";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "my immortal",
          artist: "evenescence",
          genre: "rock",
          rating: "★★★★★",
        },
        {
          id: 2,
          title: "crawling",
          artist: "linkin park",
          genre: "rock",
          rating: "★★★★★",
        },
        {
          id: 3,
          title: "something just like this",
          artist: "the chainsmockers",
          genre: "pop",
          rating: "★★★★☆",
        },
      ],
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

  deleteSong = (id) => {
    const currentList = this.state.songs;
    const newList = currentList.filter((song) => song.id !== id);
    this.setState({ songs: newList });
  };

  render() {
    return (
      <div>
        <SongForm onSubmit={this.addNewSong} />
        <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default SongOverview;
