import React, { Component } from 'react';
import { observable, decorate, action } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { TabStyles } from '../styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Tap Main Class
*/
class Tab extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
    };
  };

  handleClick = () => {
    this.props.handleClick(this.props.index);
  };

  render() {
    const { classes, selected, text, ico } = this.props;
    return (
      <div
        className={clsx('', ((selected) ? classes.selected : classes.tab))}
        onClick={this.handleClick}
      >
        <Typography
          className={clsx('text-left align-middle mt-1 ml-2')}
          variant="inherit"
        >
          {ico}{text}
        </Typography>
      </div>
    );
  };
}

/*
  Define received props types for validation.
*/
Tab.propTypes = {
};

/*
  MobX decorations.
*/
decorate(Tab, {
  pageState: observable,
  handleClick: action
});

export default withStyles(TabStyles)(observer(Tab));