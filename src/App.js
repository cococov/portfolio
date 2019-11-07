import React, {Component} from 'react';
import { observable, decorate  } from 'mobx';
import {cv} from './config.json'
import './static/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LateralBar from './components/LateralBar.js';
import Projects from './components/Projects.js';

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
    return (
      <div className="App">
        <LateralBar />
        <Projects />
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

export default App;
