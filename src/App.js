import React, { Component, Fragment } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles } from './styles.js';
import clsx from 'clsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import LateralBar from './components/LateralBar';
import Projects from './components/Projects';
import Tabs from './components/Tabs';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/App.css';

/*
  App Main Class
*/
class App extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
      selectedProject: null,
      selectedTab: 0,
    };
    library.add(fab);
  }

  handleChangeProject = (project) => {
    this.pageState.selectedProject = project;
  };

  handleChangeTab = (tab) => {
    this.pageState.selectedTab = tab;
  };

  render() {
    const { selectedProject, selectedTab } = this.pageState;
    const { classes } = this.props;
    return (
      <Fragment>
        <Tabs
          selectedTab={selectedTab}
          selectedProject={selectedProject}
          handleChangeTab={this.handleChangeTab}
        />
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

export default withStyles(baseStyles)(observer(App));
