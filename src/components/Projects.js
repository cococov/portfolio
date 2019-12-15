import React, { Component, Fragment } from 'react';
import { observable, decorate } from 'mobx';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { ProjectsStyles } from '../styles';
import { List, ListItem, Typography, Box, Drawer } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const resetClasses = 'p-0 mb-0 mt-0';

class Projects extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
      isProjectsOpen: false,
    };
  }

  render() {
    const { classes } = this.props;
    const { isProjectsOpen } = this.pageState;
    return (
      <div
        className={classes.list}
        role="presentation"
      >
        <Drawer
          open={true}
          anchor="left"
          variant="persistent"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper, }}
        >
          <Box
            m={0}
            component="span"
            className={classes.box}
          >
            <Typography variant="caption" className={clsx(resetClasses, 'ml-3')}>EXPLORER</Typography>
          </Box>
          <div
            className={clsx(classes.category, 'form-inline ml-3', resetClasses)}
          >
            <Fragment>
              {isProjectsOpen ? <ExpandMore /> : <ExpandLess />}
            </Fragment>
            <Typography className={clsx('ml-2', resetClasses)}>PROJECTS</Typography>
          </div>
          <Box
            m={0}
            component="span"
            className={classes.box}
            style={{ height: '87%' }}
          >
            <List
              component="nav"
              className={classes.list}
            >
              <ListItem button>
                <Typography>FirstProject.js</Typography>
              </ListItem>
              <ListItem button>
                <Typography>SecondProject.java</Typography>
              </ListItem>
              <ListItem button>
                <Typography>ThirdProject.py</Typography>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    );
  };
}

/*  
  Define received props types for validation.
*/
Projects.propTypes = {
};

/*
  MobX decorations.
*/
decorate(Projects, {
  pageState: observable
});

export default withStyles(ProjectsStyles)(Projects);