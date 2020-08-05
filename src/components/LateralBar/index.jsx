import React, { memo, useContext, useMemo } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Drawer, Typography } from '@material-ui/core';
import { CloudDownload, LinkedIn, GitHub } from '@material-ui/icons';
import { lateralBarStyles } from './styles';
import { cv, linkedin, github } from '../../config.json';
import { AppContext } from '../../stores';

/*
  LateralBar Component
*/
const LateralBar = withStyles(lateralBarStyles)(({ classes }) => {
  const { isMobil, handleClickAbout } = useContext(AppContext);

  const onClickIcon = async (index) => {
    let url = null;
    switch (index) {
      case 'download':
        url = `${process.env.PUBLIC_URL}${cv}`;
        break;
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
      <div className={classes.list} role="presentation">
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={!isMobil}
          classes={{
            paper: clsx('Content', classes.drawerPaper),
          }}
        >
          <List className={classes.listInside}>
            <ListItem
              button
              key="Download"
              component="li"
              title="Download CV"
              onClick={() => onClickIcon('download')}
            >
              <CloudDownload className={classes.lateralIcon} />
            </ListItem>
            <ListItem
              button
              key="LinkedIn"
              title="LinkedIn"
              component="li"
              onClick={() => onClickIcon('linkedin')}
            >
              <LinkedIn className={classes.lateralIcon} />
            </ListItem>
            <ListItem
              button
              key="GitHub"
              title="GitHub"
              component="li"
              onClick={() => onClickIcon('github')}
            >
              <GitHub className={classes.lateralIcon} />
            </ListItem>
            <li className={classes.about}>
              <ListItem
                button
                key="About"
                title="About"
                onClick={handleClickAbout}
              >
                <Typography className={classes.aboutText}>About</Typography>
              </ListItem>
            </li>
          </List>
        </Drawer>
      </div>
    ),
    [classes, isMobil, handleClickAbout]
  );
});

/*
  Define received props types for validation.
*/
LateralBar.propTypes = {};

export default memo(LateralBar);
