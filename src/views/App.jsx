import React, { Component, Fragment } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { baseStyles } from '../styles.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJava, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import { LateralBar, Container, Projects, Tabs } from '../components';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/App.css';

// delete on production
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

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
      underConstructionSnackbarOpen: true// delete on production
    };
    library.add([faJava, faReact, faPython]);
  }

  handleChangeProject = (project) => {
    this.pageState.selectedProject = project;
    this.pageState.selectedTab = 4;
  };

  handleChangeTab = (tab) => {
    this.pageState.selectedTab = tab;
  };

  // delete on production
  handleCloseUnderConstructionSnackbar = () => {
    this.pageState.underConstructionSnackbarOpen = false;
  };

  render() {
    const { selectedProject, selectedTab } = this.pageState;
    const { classes } = this.props;
    return (
      <Fragment>

        {/* delete on production */}
        <Snackbar
          autoHideDuration={20000}
          key={'underConstructionSnackbar'}
          open={this.pageState.underConstructionSnackbarOpen}
          onClose={this.handleCloseUnderConstructionSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="info">
            <AlertTitle>Información</AlertTitle>
            Esta página aún está en construcción, por lo que puede haber secciones sin contenido o con contenido a la mitad.
          </Alert>
        </Snackbar>

        <Tabs
          selectedTab={selectedTab}
          selectedProject={selectedProject}
          handleChangeTab={this.handleChangeTab}
        />
        <div className={clsx('App', classes.app)}>
          <LateralBar />
          <Projects
            selectedProject={selectedProject}
            handleChangeProject={this.handleChangeProject}
          />
          <Container
            selectedTab={selectedTab}
            selectedProject={selectedProject}
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
