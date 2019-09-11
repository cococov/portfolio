import React, {Component} from 'react';
import logo from './static/img/workinprogressheader.png';
import Button from '@material-ui/core/Button';
import {cv} from './config.json'
import './static/css/App.css';

class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
    }
  }

  openCv = () => {
    window.open(cv);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="contained" size="small" onClick={this.openCv}>
            curriculum
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
