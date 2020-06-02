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
  About Modal Component
*/
const AboutModal = withStyles(About)(({ classes, isOpen, handleClose }) => {

  const goPage = async index => {
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
          <div className={classes.lineContainer}>
            <Typography
              variant="body1"
              className={classes.item}
            >
              E-mail:
          </Typography>
            <Typography
              component="code"
              className={classes.mail}
            >
              jclamas.95@gmail.com
          </Typography>
          </div>
          <div className={classes.lineContainer}>
            <Typography
              variant="body1"
              className={classes.copyright}
            >
              © Juan Carlos Lamas Alfaro. All rights reserved.
          </Typography>
          </div>
        </CardContent>
        <CardActions>
          <IconButton
            className={classes.icon}
            onClick={() => goPage('linkedin')}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            className={classes.icon}
            onClick={() => goPage('github')}
          >
            <GitHub />
          </IconButton>
        </CardActions>
      </Card >
    </Modal>
  );
});

export default AboutModal;