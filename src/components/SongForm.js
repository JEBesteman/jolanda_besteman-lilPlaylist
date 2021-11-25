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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
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
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="artist"
          value={this.state.artist}
          onChange={this.handleChange}
        />
        <select
          value={this.state.genre}
          name="genre"
          onChange={this.handleChange}
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
          onChange={this.handleChange}
        >
          <option value="">--- Stars Rating ---</option>
          <option value="★☆☆☆☆">★☆☆☆☆</option>
          <option value="★★☆☆☆">★★☆☆☆</option>
          <option value="★★★☆☆">★★★☆☆</option>
          <option value="★★★★☆">★★★★☆</option>
          <option value="★★★★★">★★★★★</option>
        </select>
        <button type="submit">Add song</button>
      </form>
    );
  }
}
export default SongForm;
