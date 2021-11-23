import React, { Component } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";


class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      title: "",
      artist: "",
      genre: "",
      rating: 0,

    };
  }

  handleChange = (event) => {
    // const { name, value } = event.target;
    // this.setState({
    //   [name] : value
    // })
    console.log(event.target.value);
  }

  // addSong = (song) => {
  //   // doe iets om de state aan te passen
  // };

  render() {
    return (
      <div>
        <SongForm handleChange={this.handleChange} />
        {/* <SongForm addSong={this.addSong} />
        <table style={{ width: "100%" }}>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>
        <SongList songs={this.state.songs} /> */}
        <SongList />
      </div>
    );
  }
}

export default SongOverview;
