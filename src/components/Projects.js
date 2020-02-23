import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { ProjectsStyles } from '../styles';
import { List, ListItem, Typography, Box, Drawer } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { projects } from './content/projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const resetClasses = 'p-0 mb-0 mt-0';

class Projects extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
      isProjectsOpen: true,
    };
  }

  render() {
    const { classes, selectedProject, handleChangeProject } = this.props;
    const { isProjectsOpen } = this.pageState;
    return (
      <div
        className={classes.list}
        role="presentation"
      >
        <Drawer
          open={isProjectsOpen}
          anchor="left"
          variant="persistent"
          className={classes.drawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <Box
            component="span"
            className={classes.box}
          >
            <Typography
              variant="caption"
              className={clsx(resetClasses, 'ml-3')}
            >
              EXPLORER
            </Typography>
          </Box>
          <div
            className={clsx(classes.category, 'form-inline ml-3', resetClasses)}
          >
            {isProjectsOpen ? <ExpandMore /> : <ExpandLess />}
            <Typography
              className={clsx('ml-2', resetClasses)}
            >
              PROJECTS
            </Typography>
          </div>
          <Box
            component="span"
            className={classes.projects}
          >
            <List
              component="nav"
              className={classes.list}
            >
              {
                Object.keys(projects).map((project, index) => (
                  <ListItem
                    key={index}
                    className={(project === selectedProject) ? classes.selectedItem : ''}
                    button
                    onClick={() => {
                      handleChangeProject(project);
                    }}
                  >
                    <Typography>{projects[project]['name']}</Typography>
                  </ListItem>
                ))
              }
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