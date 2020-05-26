import React, { Component, Fragment } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles, getWidth } from '../styles.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJava, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import { About, LateralBar, Container, Projects, Tabs, Snackbar } from '../components';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/App.css';

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
      width: getWidth(),
      isAboutOpen: false
    };
    library.add([faJava, faReact, faPython]);
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  };

  resize = async () => {
    this.pageState.width = getWidth();
  };

  handleChangeProject = (project) => {
    this.pageState.selectedProject = project;
    this.pageState.selectedTab = 4;
  };

  handleChangeTab = (tab) => {
    this.pageState.selectedTab = tab;
  };

  handleClickAbout = () => {
    this.pageState.isAboutOpen = true;
  };

  handleCloseAbout = () => {
    this.pageState.isAboutOpen = false;
  };

  render() {
    const { selectedProject, selectedTab, width, isAboutOpen } = this.pageState;
    const { classes } = this.props;
    return (
      <Fragment>
        <Snackbar />
        <About
          isOpen={isAboutOpen}
          handleClose={this.handleCloseAbout}
        />
        <Tabs
          selectedTab={selectedTab}
          selectedProject={selectedProject}
          handleChangeTab={this.handleChangeTab}
          width={width}
        />
        <div className={clsx('App', classes.app)}>
          <LateralBar handleClickAbout={this.handleClickAbout} />
          <Projects
            selectedProject={selectedProject}
            handleChangeProject={this.handleChangeProject}
          />
          <Container
            selectedTab={selectedTab}
            selectedProject={selectedProject}
            width={width}
          />
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
