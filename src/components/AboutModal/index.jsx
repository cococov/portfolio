import React, { useContext, useMemo } from 'react';
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
import { linkedin, github } from '../../config.json';
import { AppContext } from '../../stores';
import { About } from './styles';

/*
  About Modal Component
*/
const AboutModal = withStyles(About)(({ classes }) => {
  const { isAboutOpen, handleCloseAbout } = useContext(AppContext);

  const goPage = async (index) => {
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
    const win = url ? window.open(url, '_blank') : window;
    win.focus();
  };

  return useMemo(
    () => (
      <Modal
        open={isAboutOpen}
        onClose={handleCloseAbout}
        className={classes.modal}
        disableAutoFocus
        disableEnforceFocus
      >
        <Card className={classes.card}>
          <CardHeader
            title="About"
            action={
              <IconButton className={classes.close} onClick={handleCloseAbout}>
                <Close />
              </IconButton>
            }
          />
          <Divider />
          <CardContent>
            <div className={classes.lineContainer}>
              <Typography variant="body1" className={classes.item}>
                E-mail:
              </Typography>
              <Typography component="code" className={classes.mail}>
                contact@juanlamas.dev
              </Typography>
            </div>
            <div className={classes.lineContainer}>
              <Typography variant="body1" className={classes.copyright}>
                © Juan Carlos Lamas Alfaro. All rights reserved.
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <IconButton
              title="LinkedIn"
              className={classes.icon}
              onClick={() => goPage('linkedin')}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              title="GitHub"
              className={classes.icon}
              onClick={() => goPage('github')}
            >
              <GitHub />
            </IconButton>
          </CardActions>
        </Card>
      </Modal>
    ),
    [classes, isAboutOpen, handleCloseAbout]
  );
});

export default AboutModal;
