/*  Full Queue component */
// Everything here was previously in the App component.
import React from "react";

// Importing components
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

class Homepage extends React.Component {
  ///  React 'state'.
  // Allows us to keep track of chagning data in this component.
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

  // Each section of the Queue now has its own componenet, cleaning up the
  // JSX a lot.
  render() {
    return (
      <div className="App">
        {/* Header component with text props. */}
        <Header
          username="Pan Chen"
        />
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
    );
  }
}

export default Homepage;
