/*  Full Queue component */
// Everything here was previously in the App component.
import React, { useState } from "react";
import Box from '@material-ui/core/Box';

// Importing components
import Header from "./Header";
import MainContent from "./MainContent";


export default function Homepage() {
  const [links, setLinks] = useState(
    [
      {url:"https://www.google.com", name:"Google"},
      {url:"http://acorn.utoronto.ca", name:"Acorn"},
      {url:"http://q.utoronto.ca", name:"Quercus"},
      {url:"https://web.cs.toronto.edu", name:"UofT CS"},
      {url:"https://leetcode.com", name:"Leetcode"}
    ]
  );

  const bgStyle = () => {
    return {
      backgroundImage: 'url(https://source.unsplash.com/T_Qe4QlMIvQ)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '100vh'
    }
  }

  return(      
    <div style={bgStyle()}>
      <div className="App">
        <Box style={{position:'relative', paddingLeft:"50px", paddingRight: '50px', paddingTop:'30px'}}>
          <Header
            username="John Doe"
            links = {links} 
            setLinks = {setLinks}
          />
          <MainContent links = {links} setLinks = {setLinks}></MainContent>
        </Box>
      </div>
    </div>
  );
}



// class Homepage extends React.Component {
//   // Generic handler for whenever we type in an input box.
//   // We change the state for the particular property bound to the textbox from the event.
//   // handleInputChange = event => {
//   //   const target = event.target;
//   //   const value = target.value;
//   //   const name = target.name;

//   //   // log(name)

//   //   // 'this' is bound to the component in this arrow function.
//   //   this.setState({
//   //     [name]: value // [name] sets the object property name to the value of the 'name' variable.
//   //   });
//   // };

//   // this.setState(
//   //   {
//   //     links: ['http://acorn.utoronto.ca', 'http://q.utoronto.ca', 'https://web.cs.toronto.edu', 'http://acorn.utoronto.ca']
//   //   }
//   // )

//   bgStyle = () => {
//     return {
//       backgroundImage: 'url(https://source.unsplash.com/T_Qe4QlMIvQ)',
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       height: '100vh'
//     }
//   }

//   mainStyle = () => {
//     return {
//       width: '100%'
//     }
//   }

//   // Each section of the Queue now has its own componenet, cleaning up the
//   // JSX a lot.
//   render() {
//     return (
//       <div style={this.bgStyle()}>
//         <div className="App">
//           <Box style={{position:'relative', paddingLeft:"50px", paddingRight: '50px', paddingTop:'30px'}}>
//             {/* Header component with text props. */}
//             <Header
//               username="John Doe"
//             />
//             <MainContent></MainContent>
//             {/* <Footer></Footer> */}
//           </Box>
//         </div>
//       </div>
//     );
//   }
// }

// export default Homepage;
