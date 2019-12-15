import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { withStyles } from '@material-ui/core/styles';
import { lateralBarStyles } from '../styles';
import { cv, linkedin, github } from '../config.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { List, ListItem, Drawer } from '@material-ui/core';
import { CloudDownload, LinkedIn, GitHub } from '@material-ui/icons';

/*
  LateralBar Main Class
*/
class LateralBar extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {};
  };

  onClickIcon = index => {
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
    const { classes } = this.props;
    return (
      <div className={classes.list} role="presentation">
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <List>
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