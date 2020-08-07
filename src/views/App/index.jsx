import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faJava,
  faReact,
  faPython,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { About, LateralBar, Container, Projects, Tabs } from '../../components';
import { AppProvider, ContentProvider } from '../../stores';
import { baseStyles } from './styles';
import '../../static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  App - Main Component
*/
const App = withStyles(baseStyles)(({ classes }) => {
  useEffect(() => {
    library.add([faJava, faReact, faPython, faJsSquare, faCopyright]);
  });

  return (
    <AppProvider>
      <About />
      <Tabs />
      <div className={clsx('App', classes.app)}>
        <LateralBar />
        <Projects />
        <ContentProvider>
          <Container />
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
