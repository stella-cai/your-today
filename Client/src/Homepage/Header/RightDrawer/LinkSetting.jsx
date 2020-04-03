import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { Middleware } from "../../../actions/middleware"

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
  urlName: {
    wordBreak: "break-all",
    borderBottom: 'none'
  },
  input: {
    width: "100%",
    wordBreak: "break-all",
    clear: "both",
    border: theme.spacing(1)
  },
  paper: {
    position: 'absolute',
    width: '500px',
    height: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
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
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    height: "auto",
    flexWrap: 'wrap',
    justifyContent: 'flex-start',

  },
  button: {
    color: "white",
    border: "1.5px solid white",
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    width: "100%",
  },
  buttondiv: {
    padding: theme.spacing(1)
  },
  input: {
    display: "block",
    width: "100%",
  },
  delete: {
    padding: '0px',
    float: 'right',
    marginLeft: theme.spacing(1),
    color: 'white'
  },
  add: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  }
}));

export default function LinkSetting(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const linkSettingOpen = props.linkSettingOpen
  const setLinkSettingOpen = props.setLinkSettingOpen;
  const handleClose = props.handleClose;

  const links = props.links
  const setLinks = props.setLinks

  const [url, setUrl] = useState("");
  const [urlName, setUrlName] = useState("");

  const deleteLink = index => {

    Middleware.deleteLink(links[index]._id).then(function(result) {
      if (result == "success") {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const addedLink = Middleware.addLink({ url: url, displayName: urlName })
    addedLink.then(function(result) {
      const newLinks = [...links, result];
      setLinks(newLinks);
      setUrl("");
      setUrlName("");
      handleClose();
    });
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
                  <div className={classes.buttondiv}>
                  <Button className={classes.button} ariant="outlined" size="large">
                  {link.displayName}
                  <IconButton onClick={() => deleteLink(index)} className={classes.delete}><ClearIcon /></IconButton>
                  </Button>
                  </div>
                </div>
              ))
            }
            <div class={classes.input}>
              <InputField
                className={classes.input}
                label="Url"
                value={url} fullWidth
                onChange={e => setUrl(e.target.value)}
                inputProps={{ className: classes.input }}
              />

              <InputField
                className={classes.input}
                label="Url Name"
                value={urlName} fullWidth
                onChange={e => setUrlName(e.target.value)}
                inputProps={{ className: classes.input }}
              />
              <div className={classes.add}>
              <Button variant="outlined" onClick={handleSubmit} className={classes.button}>
                Add
                </Button>
              </div>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
}
