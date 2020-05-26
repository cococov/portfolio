import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  Modal,
  Divider,
  Typography,
  IconButton,
  CardHeader,
  CardActions,
  CardContent,
} from '@material-ui/core';
import { LinkedIn, GitHub, Close } from '@material-ui/icons';
import { linkedin, github } from '../config.json';
import { About } from '../styles';

/*
  About Modal
*/
const AboutModal = withStyles(About)(({ classes, isOpen, handleClose }) => {

  const onClickIcon = async index => {
    let url = null;
    switch (index) {
      case 'linkedin':
        url = linkedin;
        break;
      case 'github':
        url = github;
        break;
      default:
    }
    let win = url ? window.open(url, '_blank') : window;
    win.focus();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className={classes.modal}
      disableAutoFocus={true}
      disableEnforceFocus={true}
    >
      <Card className={classes.card}>
        <CardHeader
          title="About"
          action={
            <IconButton
              className={classes.close}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          }
        />
        <Divider />
        <CardContent>
          <p className={classes.lineContainer}>
            <Typography
              variant="body1"
              component="body1"
              className={classes.item}
            >
              Creador:
          </Typography>
            <Typography
              variant="code"
              component="code"
              className={classes.data}
            >
              Juan Carlos Lamas Alfaro
          </Typography>
          </p>
          <p className={classes.lineContainer}>
            <Typography
              variant="body1"
              component="body1"
              className={classes.item}
            >
              E-mail:
          </Typography>
            <Typography
              variant="code"
              component="code"
              className={classes.data}
            >
              jclamas.95@gmail.com
          </Typography>
          </p>
        </CardContent>
        <CardActions>
          <IconButton
            className={classes.icon}
            onClick={() => onClickIcon('linkedin')}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            className={classes.icon}
            onClick={() => onClickIcon('github')}
          >
            <GitHub />
          </IconButton>
        </CardActions>
      </Card >
    </Modal>
  );
});

export default AboutModal;