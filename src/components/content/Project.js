import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { ProjectsContent } from '../../styles.js';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  NotFoundPage Class
*/
class Project extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={clsx('Container', classes.container)}>
        <div className={clsx('Content', classes.content)}>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
          <h1 >Project</h1>
        </div>
      </div>
    );
  }
}

/*
  Define received props types for validation.
*/
Project.propTypes = {};

/*
  MobX decorations.
*/
decorate(Project, {
  pageState: observable
});

export default withStyles(ProjectsContent)(observer(Project));
