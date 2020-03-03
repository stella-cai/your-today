/*  Full Queue component */
// Everything here was previously in the App component.
import React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// Importing components
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";


class Homepage extends React.Component {
  ///  React 'state'.
  // Allows us to keep track of changing data in this component.
  state = {
    studentName: "",
    studentCourse: "",
    students: [
      { name: "James", course: "CSC108" },
      { name: "Kate", course: "CSC309" }
    ]
  };

  // Generic handler for whenever we type in an input box.
  // We change the state for the particular property bound to the textbox from the event.
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // log(name)

    // 'this' is bound to the component in this arrow function.
    this.setState({
      [name]: value // [name] sets the object property name to the value of the 'name' variable.
    });
  };

  bgStyle = () => {
    return {
      backgroundImage: 'url(https://source.unsplash.com/T_Qe4QlMIvQ)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh'
    }
  }

  mainStyle = () => {
    return {
      width: '100%'
    }
  }

  // Each section of the Queue now has its own componenet, cleaning up the
  // JSX a lot.
  render() {
    return (
      <Box style={this.bgStyle()} width='100%' height='100%'>
        <div className="App">
          {/* Header component with text props. */}
          <Header
            username="Pan Chen"
          />
          <MainContent style={this.mainStyle()}></MainContent>
          {/* <Footer></Footer> */}
        </div>
      </Box>
    );
  }
}

export default Homepage;
