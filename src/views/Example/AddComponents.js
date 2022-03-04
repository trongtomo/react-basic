import React from "react";

class AddComponents extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.tien) {
      alert("Fill required form");
      return;
    }
    console.log("check data:", this.state);
    this.props.addNewCountry({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      tien: this.state.tien,
    });
    this.setState({
      title: "",
      tien: "",
    });
  };
  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeTien = (event) => {
    this.setState({
      tien: event.target.value,
    });
  };
  state = {
    title: "",
    tien: "",
  };
  render() {
    return (
      <form>
        <label htmlFor="fname">Country name: </label>
        <br />
        <input
          type="text"
          value={this.state.title}
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
