import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function UserStateModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const userStateModalOpen = props.userStateModalOpen;
  const handleClose = props.handleClose;
  const profileState = props.profileState;
  const setProfileState = props.setProfileState;

  const updatePropfileState = state => {
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
          <h2 id="simple-modal-title">What is your Mood?</h2>
          <Button onClick={() => updatePropfileState(0)}><SentimentVerySatisfiedIcon className="profile-status"></SentimentVerySatisfiedIcon></Button>
          <Button onClick={() => updatePropfileState(1)}><SentimentVeryDissatisfiedIcon className="profile-status"></SentimentVeryDissatisfiedIcon></Button>
          <UserStateModal />
        </div>
      </Modal>
    </div>
  );
}
