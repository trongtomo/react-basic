import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { useNavigate } from "react-router-dom";
class ListUser extends React.Component {
  handleViewDetailUser = (user) => {
    this.props.navigate(`/user/${user.id}`);
    // console.log("check user", user);
  };
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch All list users</div>
        <div className="list-user-container">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
function WithNavigate(props) {
  let navigate = useNavigate();
  return <ListUser {...props} navigate={navigate} />;
}
export default WithNavigate;
