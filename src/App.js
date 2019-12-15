import React, { Component, Fragment } from 'react';
import { observable, decorate } from 'mobx';
import './static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles } from './styles.js';
import clsx from 'clsx';
import LateralBar from './components/LateralBar.js';
import Projects from './components/Projects.js';
import Tabs from './components/Tabs.js';
import Content from './components/Content.js';

/*
  App Main Class
*/
class App extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Tabs />
        <div className={clsx('App', classes.app)}>
          <LateralBar />
          <Projects />          
          <Content />          
        </div>
      </Fragment>
    );
  }
}

/* 
  Define received props types for validation. 
*/
App.propTypes = {};

/*
  MobX decorations.
*/
decorate(App, {
  pageState: observable
});

export default withStyles(baseStyles)(App);
