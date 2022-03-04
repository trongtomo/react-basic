import React from "react";

class AddComponents extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data:", this.state);
  };
  handleChangeTitle = (event) => {
    this.setState({
      titleCountry: event.target.value,
    });
  };
  handleChangeTien = (event) => {
    this.setState({
      tien: event.target.value,
    });
  };
  state = {
    titleCountry: "",
    tien: "",
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Country name: </label>
        <br />
        <input
          type="text"
          value={this.state.titleCountry}
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <br />
        <label htmlFor="lname">Money: </label>
        <br />
        <input
          type="text"
          value={this.state.tien}
          onChange={(event) => this.handleChangeTien(event)}
        />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        <br />
      </form>
    );
  }
}
export default AddComponents;
