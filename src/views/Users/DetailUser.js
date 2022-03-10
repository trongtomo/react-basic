import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
  handleBackButton = () => {
    this.props.navigate("/user");
  };
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.router && this.props.router.params) {
      let id = this.props.router.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
      // console.log("check user", res);
    }
  }
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Hello User :{this.props.router.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              User's name: {user.first_name}-{user.last_name}
            </div>
            <div>User's email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              {/* <button
                type="button"
                onClick={() => this.handleBackButton()}
              >
                Back
              </button> */}
            </div>
          </>
        )}
      </>
    );
  }
}
function withRouter(DetailUser) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <DetailUser {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
export default withRouter(DetailUser);
