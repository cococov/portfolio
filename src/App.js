import React, {Component} from 'react';
import { observable, decorate  } from 'mobx';
import {cv} from './config.json'
import './static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles } from './styles.js';
import clsx from 'clsx';
import LateralBar from './components/LateralBar.js';
import Projects from './components/Projects.js';
import Tabs from './components/Tabs.js';

class App extends Component {
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

  openCv = () => {
    window.open(cv);
  }

  render(){
    const {classes} = this.props;
    return (
      <div>
        <Tabs />
        <div className={clsx("App", classes.app)}>
          <LateralBar />
          <Projects />
        </div>
      </div>
    );
  }
}

// Define received props types for validation.
App.propTypes = {
};

decorate(App, {
  pageState: observable
});

export default withStyles(baseStyles)(App);
