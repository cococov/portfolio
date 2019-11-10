import React, {Component} from 'react';
import { observable, decorate  } from 'mobx';
import {observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { TabsStyles } from '../styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tab from './Tab'
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tabs extends Component {
  pageState = {};

  /**
   * Class constructor.
   */
  constructor (props) {
    super(props);
    
    // Set the initial component state.
    this.pageState = {
      value: 0
    };
  }

  handleChange = (newValue) => {
    this.pageState.value = newValue;
  };

  render () {
    const {classes} = this.props;
    const {value} = this.pageState;
    return (
      <AppBar className={clsx("header",classes.header)} position="absolute">
        <Toolbar className="pl-0">
          <Tab className="border border-dark" selected={(value === 0)} index={0} text="Profile" handleClick={this.handleChange} ico={<PersonIcon className="mr-2"/>}/>
          <Tab className="border border-dark" selected={(value === 1)} index={1} text="Experience" handleClick={this.handleChange} ico={<WorkIcon className="mr-2"/>}/>
          <Tab className="border border-dark" selected={(value === 2)} index={2} text="Education" handleClick={this.handleChange} ico={<SchoolIcon className="mr-2"/>}/>
          <Tab className="border border-dark" selected={(value === 3)} index={3} text="Skills" handleClick={this.handleChange} ico={<BuildIcon className="mr-2"/>}/>
        </Toolbar>
      </AppBar>
    );
  }
}

// Define received props types for validation.
Tabs.propTypes = {
};

decorate(Tabs, {
  pageState: observable
});

export default withStyles(TabsStyles)(observer(Tabs));