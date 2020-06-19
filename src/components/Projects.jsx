import React, { useState, memo, useContext, useMemo } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography, Box, Drawer } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { projects } from '../content/projects';
import { ProjectsStyles } from '../styles';
import { AppContext } from '../stores';

/*
  Projects Component
  TODO: improve CSS and classes
*/
const Projects = withStyles(ProjectsStyles)(({ classes }) => {
  const [isProjectsOpen] = useState(true);
  const { isMobil, selectedProject, handleChangeProject } = useContext(AppContext);

  return useMemo(() => (
    <div
      className={classes.list}
      role="presentation"
    >
      <Drawer
        open={!isMobil}
        anchor="left"
        variant="persistent"
        className={classes.drawer}
        classes={{ paper: clsx('Content', classes.drawerPaper) }}
      >
        <Box
          component="span"
          className={classes.box}
        >
          <Typography
            variant="caption"
            className={clsx(classes.resetClasses, classes.explorerTitle)}
          >
            EXPLORER
            </Typography>
        </Box>
        <div
          className={clsx(classes.resetClasses, classes.category)}
        >
          {isProjectsOpen ? <ExpandMore /> : <ExpandLess />}
          <Typography
            className={clsx(classes.resetClasses, classes.categoryTitle)}
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
  ), [classes, isMobil, isProjectsOpen, selectedProject, handleChangeProject]);
});

/*
  Define received props types for validation.
*/
Projects.propTypes = {};

export default memo(Projects);