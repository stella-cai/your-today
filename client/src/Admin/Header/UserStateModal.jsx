import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Button from '@material-ui/core/Button';
import { Middleware } from "../../actions/middleware"

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

const useStyles = makeStyles(theme => ({
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
  }
}));

export default function UserStateModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const userStateModalOpen = props.userStateModalOpen;
  const handleClose = props.handleClose;
  const profileState = props.profileState;
  const setProfileState = props.setProfileState;

  const updatePropfileState = (state) => {
    Middleware.setUserMood(state);
    setProfileState(state);
    handleClose();
  }
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={userStateModalOpen}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title" className={classes.title}>What is your Mood?</h2>
          <div className={classes.buttons}>
          <Button onClick={() => updatePropfileState(0)} className={classes.button}><SentimentVerySatisfiedIcon className="profile-status"></SentimentVerySatisfiedIcon></Button>
          <Button onClick={() => updatePropfileState(1)} className={classes.button}><SentimentVeryDissatisfiedIcon className="profile-status"></SentimentVeryDissatisfiedIcon></Button>
          </div>
          <UserStateModal />
        </div>
      </Modal>
    </div>
  );
}
