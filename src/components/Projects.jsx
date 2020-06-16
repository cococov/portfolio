import React, { useState, memo, useContext, useMemo } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { ProjectsStyles } from '../styles';
import { List, ListItem, Typography, Box, Drawer } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { projects } from '../content/projects';
import { AppContext } from '../stores';
import 'bootstrap/dist/css/bootstrap.min.css';

const resetClasses = 'p-0 mb-0 mt-0';

/*
  Projects Component
*/
const Projects = withStyles(ProjectsStyles)(({ classes, isMobil }) => {
  const [isProjectsOpen] = useState(true);
  const { selectedProject, handleChangeProject } = useContext(AppContext);

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
  ), [classes, isMobil, isProjectsOpen, selectedProject, handleChangeProject]);
});

/*
  Define received props types for validation.
*/
Projects.propTypes = {};

export default memo(Projects);