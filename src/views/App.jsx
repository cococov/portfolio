import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles, getWidth } from '../styles.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJava, faReact, faPython, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { About, LateralBar, Container, Projects, Tabs, Snackbar } from '../components';
import { AppProvider, ContentProvider } from '../stores';
import '../static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  App - Main Component
*/
const App = withStyles(baseStyles)(({ classes }) => {
  const [width, setWidth] = useState(() => getWidth());
  const [isMobil, setMobil] = useState(false);

  useEffect(() => {
    library.add([
      faJava,
      faReact,
      faPython,
      faJsSquare
    ]);
  });

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  const resize = async () => {
    let _width = getWidth();
    setWidth(_width);
    setMobil(_width < 500);
  };

  return (
    <AppProvider>
      <Snackbar />
      <About />
      <Tabs width={width} isMobil={isMobil} />
      <div className={clsx('App', classes.app)}>
        <LateralBar isMobil={isMobil} />
        <Projects isMobil={isMobil} />
        <ContentProvider>
          <Container
            width={width}
            isMobil={isMobil}
          />
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
