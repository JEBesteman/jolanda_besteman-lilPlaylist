import React from "react";

const SongForm = ({ handleChange, title }) => {
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="artist"
        placeholder="artist"
        value=""
        onChange={handleChange}
      />
      <select value="" name="genre" onChange={handleChange}>
        <option>--- Choose Genre ---</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="RnB">RnB</option>
        <option value="dance">Dance</option>
      </select>
      <select value="" name="rating" onChange={handleChange}>
        <option>--- stars rating ---</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>Add song</button>
    </form>
  );
};

export default SongForm;
