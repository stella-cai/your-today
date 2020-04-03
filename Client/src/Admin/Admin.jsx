/*  Full Queue component */
// Everything here was previously in the App component.
import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import AdminPage from './AdminPage'

// Importing components
import {Header} from "../Homepage/Header";


export function Admin() {
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
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }

  const boxStyle = () => {
    return {
      position:'relative', 
      paddingLeft:"50px", 
      paddingRight: '50px', 
      paddingTop:'30px'
    }
  }

  return(      
    <div style={bgStyle()}>
      <div className="App">
        <Box style={boxStyle()}>
          <Header
            username="Admin"
            links = {links} 
            setLinks = {setLinks}
          />
        </Box>
        <AdminPage></AdminPage>
      </div>
    </div>
  );
}