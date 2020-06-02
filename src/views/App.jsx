import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles, getWidth } from '../styles.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJava, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import { About, LateralBar, Container, Projects, Tabs, Snackbar } from '../components';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/App.css';

/*
  App - Main Component
*/
const App = withStyles(baseStyles)(({ classes }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [width, setWidth] = useState(() => getWidth());
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    library.add([faJava, faReact, faPython]);
  });

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  const resize = async () => {
    setWidth(getWidth());
  };

  const handleChangeProject = useCallback((project) => {
    setSelectedProject(project);
    setSelectedTab(4);
  }, []);

  const handleChangeTab = useCallback((tab) => {
    setSelectedTab(tab);
  }, []);

  const handleClickAbout = useCallback(() => {
    setAboutOpen(true);
  }, []);

  const handleCloseAbout = useCallback(() => {
    setAboutOpen(false);
  }, []);

  return (
    <Fragment>
      <Snackbar />
      <About
        isOpen={isAboutOpen}
        handleClose={handleCloseAbout}
      />
      <Tabs
        selectedTab={selectedTab}
        selectedProject={selectedProject}
        handleChangeTab={handleChangeTab}
        width={width}
      />
      <div className={clsx('App', classes.app)}>
        <LateralBar handleClickAbout={handleClickAbout} />
        <Projects
          selectedProject={selectedProject}
          handleChangeProject={handleChangeProject}
        />
        <Container
          selectedTab={selectedTab}
          selectedProject={selectedProject}
          width={width}
        />
      </div>
    </Fragment>
  );
});

/*
  Define received props types for validation.
*/
App.propTypes = {};

export default App;
