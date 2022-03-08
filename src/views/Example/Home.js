import React from "react";
import { useNavigate } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigate("/todo");
      console.log("Check time out");
    }, 3000);
  }

  render() {
    return <div>Welcome home Trong</div>;
  }
}
function WithNavigate(props) {
  let navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}
export default WithNavigate;
