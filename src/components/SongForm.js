import React, { Component } from "react";

class SongForm extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: "",
    };
  }

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   console.log(event.target.value);
  // };

  titleInput = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  artistInput = (event) => {
    this.setState({
      artist: event.target.value,
    });
  };

  genreInput = (event) => {
    this.setState({
      genre: event.target.value,
    });
  };

  ratingInput = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.title !== "" &&
      this.state.artist !== "" &&
      this.state.genre !== "" &&
      this.state.rating !== ""
    ) {
      this.props.onSubmit({
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.genre,
        rating: this.state.rating,
      });
      this.setState({
        title: "",
        artist: "",
        genre: "",
        rating: "",
      });
    } else {
      alert(
        "Je moet alle waarden invoeren om een nieuwe song toe te voegen aan je playlist"
      );
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.titleInput}
        />
        <input
          type="text"
          name="artist"
          placeholder="artist"
          value={this.state.artist}
          onChange={this.artistInput}
        />
        <select
          value={this.state.genre}
          name="genre"
          onChange={this.genreInput}
        >
          <option value="">--- Choose Genre ---</option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="RnB">RnB</option>
          <option value="dance">Dance</option>
        </select>
        <select
          value={this.state.rating}
          name="rating"
          onChange={this.ratingInput}
        >
          <option value="">--- stars rating ---</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Add song</button>
      </form>
    );
  }
}
export default SongForm;
