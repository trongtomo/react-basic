import React from "react";
import ChildComponents from "./ChildComponents";
class MyComponents extends React.Component {
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data:", this.state);
  };
  //key:value
  state = {
    firstName: "",
    lastName: "",
    arrCountry: [
      { id: "thu nhat", title: "vietnam", tien: "5000vnd" },
      { id: "thu hai", title: "trung quoc", tien: "5000ndt" },
      { id: "thu ba", title: "my", tien: "5usd" },
    ],
  };
  render() {
    return (
      //this. la chi vao component hien tai
      <section>
        <form>
          <label htmlFor="fname">First name: </label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name: </label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
          <br />
        </form>
        <ChildComponents
          name={this.state.firstName}
          age={"25"}
          address={"69"}
          arrCountry={this.state.arrCountry}
        />
      </section>
    );
  }
}
export default MyComponents;
