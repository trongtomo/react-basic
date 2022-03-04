import React from "react";

class ChildComponents extends React.Component {
  state = {
    showCountry: false,
  };
  handleShowHide = () => {
    this.setState({
      showCountry: !this.state.showCountry,
    });
  };
  handleOnClickDelete = (country) => {
    console.log("handle delete", country);
    this.props.deleteACountry(country);
  };
  render() {
    let { arrCountry } = this.props;
    let { showCountry } = this.state;
    let check =
      showCountry == true ? "showCountry =true" : "showCountry =false";
    return (
      <section>
        {showCountry === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrCountry.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.tien}$ <></>{" "}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      {" "}
                      x{" "}
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </section>
    );
  }
}
// const ChildComponents = (props) => {
//   let { arrCountry } = props;
//   return (
//     //this. la chi vao component hien tai
//     <section>
//       <div className="job-lists">
//         {arrCountry.map((item, index) => {
//           if (+item.tien >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.tien}$
//               </div>
//             );
//           }
//         })}
//       </div>
//     </section>
//   );
// };
export default ChildComponents;
