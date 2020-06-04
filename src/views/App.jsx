import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles, getWidth } from '../styles.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJava, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import { About, LateralBar, Container, Projects, Tabs, Snackbar } from '../components';
import { AppProvider, ContentProvider } from '../stores';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/App.css';

/*
  App - Main Component
*/
const App = withStyles(baseStyles)(({ classes }) => {
  const [width, setWidth] = useState(() => getWidth());

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

  return (
    <AppProvider>
      <Snackbar />
      <About />
      <Tabs width={width} />
      <div className={clsx('App', classes.app)}>
        <LateralBar />
        <Projects />
        <ContentProvider>
          <Container width={width} />
        </ContentProvider>
      </div>
    </AppProvider>
  );
});

/*
Define received props types for validation.
*/
App.propTypes = {};

export default App;
