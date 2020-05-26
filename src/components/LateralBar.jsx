import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { lateralBarStyles } from '../styles';
import { cv, linkedin, github } from '../config.json';
import { List, ListItem, Drawer, Typography } from '@material-ui/core';
import { CloudDownload, LinkedIn, GitHub } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  LateralBar Main Class
*/
class LateralBar extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {};
  };

  onClickIcon = async index => {
    let url = null;
    switch (index) {
      case 'download':
        url = cv;
        break;
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

  render() {
    const { classes, handleClickAbout } = this.props;
    return (
      <div className={classes.list} role="presentation">
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{
            paper: clsx('Content', classes.drawerPaper)
          }}
        >
          <List className={classes.listInside}>
            <ListItem
              button
              key={'Download'}
              title="Download CV"
              onClick={() => this.onClickIcon('download')}
            >
              <CloudDownload className={classes.lateralIcon} />
            </ListItem>
            <ListItem
              button
              key={'LinkedIn'}
              title="LinkedIn"
              onClick={() => this.onClickIcon('linkedin')}
            >
              <LinkedIn className={classes.lateralIcon} />
            </ListItem>
            <ListItem
              button
              key={'GitHub'}
              title="GitHub"
              onClick={() => this.onClickIcon('github')}
            >
              <GitHub className={classes.lateralIcon} />
            </ListItem>
            <div className={classes.about}>
              <ListItem
                button
                key={'About'}
                title="About"
                onClick={handleClickAbout}
              >
                <Typography className={classes.aboutText}>About</Typography>
              </ListItem>
            </div>
          </List>
        </Drawer>
      </div>
    );
  };
}

/*
  Define received props types for validation.
*/
LateralBar.propTypes = {};

/*
  MobX decorations.
*/
decorate(LateralBar, {
  pageState: observable
});

export default withStyles(lateralBarStyles)(LateralBar);