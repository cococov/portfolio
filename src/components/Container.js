import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { withStyles } from '@material-ui/core/styles';
import { ContentStyles } from '../styles.js';
import { projects } from './content/projects';
import { basename } from '../routes/routes.json';
import Iframe from 'react-iframe';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Content Main Class
*/
class Container extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
    };
  }

  render() {
    const { classes, selectedProject, selectedTab } = this.props;
    return (
      <div className={clsx('Container', classes.container)}>
        <div className={clsx('Content', classes.content)}>
          <Iframe
            url={
              (() => {
                switch (selectedTab) {
                  case 0:
                    return `${basename}/profile`;
                  case 1:
                    return `${basename}/Experience`;
                  case 2:
                    return `${basename}/Education`;
                  case 3:
                    return `${basename}/Skills`;
                  default:
                    return `${basename}/${projects[selectedProject]['uri']}`;
                }
              })()
            }
            scrolling="yes"
            width="100%"
            height="100%"
            display="initial"
            position="relative"
            frameBorder="0"
          />
        </div>
      </div>
    );
  }
}

/*
  Define received props types for validation.
*/
Container.propTypes = {
};

/*
  MobX decorations.
*/
decorate(Container, {
  pageState: observable
});

export default withStyles(ContentStyles)(Container);