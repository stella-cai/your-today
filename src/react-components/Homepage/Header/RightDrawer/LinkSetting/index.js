import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const InputField = withStyles({
  root: {
      '& label.Mui-focused': {
          color: 'white',
      },
      '& label': {
          color: 'white',
      },
      '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
      },
      '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
      },
      '& 	.MuiInput-root': {
          color: 'white'
      }
      
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  url: {
    wordBreak: "break-all",
    borderBottom: 'none'
},
urlName :{
  wordBreak: "break-all",
  borderBottom: 'none'
},
urlInput: {
  width: "100%",
  wordBreak: "break-all",
  clear: "both",
},
urlNameInput: {
  width: "100%",
  wordBreak: "break-all",
  clear: "both",
},
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'rgba(52, 52, 52)',
    border: '0',
    borderRadius: '2%',
    // border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
  },
  title: {
    color: 'white',
    fontSize: "25px",
    margin: theme.spacing(2)
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    color: 'white'
  },
  input: {
    display: "block",
    width: "100%",
  }
}));

export default function LinkSetting(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const linkSettingOpen = props.linkSettingOpen
  const setLinkSettingOpen = props.setLinkSettingOpen;
  const handleClose = props.handleClose;

  const links =props.links
  const setLinks = props.setLinks

  const [url, setUrl] = useState("");
  const [urlName, setUrlName] = useState("");



  const deleteLink = index => {

    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  }




  const handleSubmit = e => {
    e.preventDefault();
    const newLinks = [...links, {url: url, name: urlName}];
    setLinks(newLinks);
    setUrl("");
    setUrlName("");
    handleClose();
}

  return (
    
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={linkSettingOpen}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title" className={classes.title}>Favorite Links</h2>
          <div className={classes.buttons}>
          {
            links.map((link, index) => (
              <div className={classes.link}>
                <Button variant="outlined" size="large" className={classes.buttonLeft} >{link.name}</Button>
                <Button onClick = {()=>deleteLink(index)}>Delete</Button>
              </div>
            ))
          }
          <div class ={classes.input}>
                <input
                    className={classes.urlInput}
                    label="Url"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    inputProps={{className: classes.input}}
                />

            <input
                    className={classes.urlNameInput}
                    label="Url Name"
                    value={urlName}
                    onChange={e => setUrlName(e.target.value)}
                    inputProps={{className: classes.input}}
                />
                <Button variant="outlined" onClick={handleSubmit} className={classes.button}>
                    Add
                </Button>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
}
