import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { withStyles } from '@material-ui/core/styles';
import { ContentStyles } from '../styles.js';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Content Main Class
*/
class Content extends Component {
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

        </div>
      </div>
    );
  }
}

/*  
  Define received props types for validation.
*/
Content.propTypes = {
};

/*
  MobX decorations.
*/
decorate(Content, {
  pageState: observable
});

export default withStyles(ContentStyles)(Content);