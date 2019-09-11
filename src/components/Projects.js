import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observable, decorate  } from 'mobx';
import { ProjectsStyles } from '../styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import {List, ListItem, Typography, Box } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';


class Projects extends Component {
  pageState = {};

  /**
   * Class constructor.
   */
  constructor (props) {
    super(props);

    // Set the initial component state.
    this.pageState = {
    };
  }

  render () {
    const { classes } = this.props;
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
          <Box component="span" m={1} className={classes.box}>
            <Typography variant="caption" className="ml-3 p-0 mt-0"> Explorer</Typography>
          </Box>
          <div className="form-inline ml-3 p-0 mb-0 mt-0">
            <Typography variant="caption" align="left" className="p-0 mt-0 mb-0">˅</Typography>
            <Typography  className="ml-2 p-0 mt-0 mb-0"> PROJECTS</Typography>
          </div>
          <Box component="span" m={1} className={classes.box} style={{height: '87%'}}>
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