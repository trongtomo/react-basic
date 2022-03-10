import React from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import allu from "../../assets/images/allu.png";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigate("/todo");
    //   console.log("Check time out");
    // }, 3000);
  }
  handledeleteUser = (user) => {
    // console.log("this user delte", user);
    this.props.deleteUserRedux(user);
  };
  handlecreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log("Check props redux", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>Welcome home Trong</div>
        <div>
          <img src={allu} />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} -{item.name} &nbsp;{" "}
                  <span onClick={() => this.handledeleteUser(item)}>x</span>
                  &nbsp;
                </div>
              );
            })}
          <button onClick={() => this.handlecreateUser()}>Add New</button>
        </div>
      </>
    );
  }
}
function WithNavigate(props) {
  let navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}
//export default WithNavigate;
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color(WithNavigate));
