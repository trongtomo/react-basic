import React from "react";

// class ChildComponents extends React.Component {
//   render() {
//     // let name = this.props.name
//     // let age = this.props.age
//     let { name, age, address, arrCountry } = this.props;
//     let a = "";
//     return (
//       //this. la chi vao component hien tai
//       <section>
//         {/* <div className="job-lists">
//           Child Components name :{name}-{age}-{address}
//         </div> */}
//         <div className="job-lists">
//           {
//             (a = arrCountry.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.tien}
//                 </div>
//               );
//             }))
//           }
//           {console.log("check map array:", a)}
//         </div>
//       </section>
//     );
//   }
// }
const ChildComponents = (props) => {
  let { arrCountry } = props;
  return (
    //this. la chi vao component hien tai
    <section>
      <div className="job-lists">
        {arrCountry.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.tien}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ChildComponents;
