import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./Loading.css";

/* Component for the Home page */
class Loading extends React.Component {
  componentDidMount(){ 
    document.title = "Today | Project for CSC309" 
    } 
  render() {
    return (
      <div className="home__bg-image center">
        <Link className="home__button-link center" to={"./../Login"}>
          <Button className="home__button">Start Your Today {this.props.state.abc}</Button>
        </Link> 
      </div>
    );
  }
}

export {Loading};
