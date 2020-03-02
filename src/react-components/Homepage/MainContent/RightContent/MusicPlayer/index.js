import React, { useState } from "react";
import './styles.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

export default function MediaControlCard() {
  const [searchKey, setSearchKey] = useState("https://open.spotify.com/embed/playlist/7jKSxhWBA3PdUgdplmWy87");
  var a = ""

  const searchButtonClickHandler = (e) => {
    e.preventDefault();
    //https://open.spotify.com/playlist/7jKSxhWBA3PdUgdplmWy87
    var temp = a.split("/")
    temp = temp[0] + "//" + temp[2] + "/embed/playlist/" + temp[4]
    setSearchKey(temp)
    console.log(searchKey)
  }

  const searchTextChangeHandler = (e) => {
    a = e.target.value
  }
  return (
    <div id="spotify">
      <div id = "playlistInputContainer">
        <TextField id="input"
            placeholder="Your Spotify Playlist url"
            onChange={searchTextChangeHandler}
        >
         </TextField>
         <IconButton id="button"
         type="submit" 
         aria-label="search" 
         onClick={searchButtonClickHandler}>
           submit
        </IconButton>
      </div>
      <div>
      <iframe src={searchKey} width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
    );
}


