import React, {Component, Fragment} from 'react';
import { observable, decorate  } from 'mobx';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { ProjectsStyles } from '../styles';
import {List, ListItem, Typography, Box} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Drawer from '@material-ui/core/Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';

const resetClasses = 'p-0 mb-0 mt-0';

class Projects extends Component {
  pageState = {};

  /**
   * Class constructor.
   */
  constructor (props) {
    super(props);

    // Set the initial component state.
    this.pageState = {
      isProjectsOpen: false,
    };
  }

  render () {
    const { classes } = this.props;
    const { isProjectsOpen } = this.pageState;
    return (
      <div
        className={classes.list}
        role="presentation"
      >
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box component="span" m={0} className={classes.box}>
            <Typography variant="caption" className={clsx(resetClasses,'ml-3')}> Explorer</Typography>
          </Box>
          <div className={clsx(classes.category,'form-inline ml-3',resetClasses)}>
            <Fragment align="left" className={resetClasses}>
              { isProjectsOpen ? <ExpandMoreIcon /> : <ExpandLessIcon /> }
            </Fragment>
            <Typography  className={clsx('ml-2',resetClasses)}> PROJECTS</Typography>
          </div>
          <Box component="span" m={0} className={classes.box} style={{height: '87%'}}>
          <List
            component="nav"
            className={classes.list}
          >
            <ListItem button>
            <Typography >FirstProject.js</Typography>
            </ListItem>
            <ListItem button>
            <Typography >SecondProject.java</Typography>
            </ListItem>
            <ListItem button>
            <Typography >ThirdProject.py</Typography>
            </ListItem>
          </List>
          </Box>
        </Drawer>
      </div>
    );
  }
}

// Define received props types for validation.
Projects.propTypes = {
};

decorate(Projects, {
  pageState: observable
});

export default withStyles(ProjectsStyles)(Projects);