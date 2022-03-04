import React from "react";
import AddComponents from "./AddComponents";
import ChildComponents from "./ChildComponents";
class MyComponents extends React.Component {
 
  //key:value
  state = {
    arrCountry: [
      { id: "thu nhat", title: "vietnam", tien: "5000" },
      { id: "thu hai", title: "trung quoc", tien: "50" },
      { id: "thu ba", title: "my", tien: "5" },
    ],
  };
  render() {
    return (
      //this. la chi vao component hien tai
      <section>
        <AddComponents></AddComponents>

        <ChildComponents arrCountry={this.state.arrCountry} />
      </section>
    );
  }
}
export default MyComponents;
