import React, {Component} from 'react';
import { observable, decorate, action } from 'mobx';
import {observer} from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { TabStyles } from '../styles';
import clsx from 'clsx';
import {Typography} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tab extends Component {
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

  handleClick = () => {
    this.props.handleClick(this.props.index);
  };

  render () {
    const {classes, selected, text, ico} = this.props;
    return (
      <div className={clsx('',((selected)? classes.selected:classes.tab))} onClick={this.handleClick}>
        <Typography className={clsx('text-left align-middle mt-1 ml-2')} variant="inherit">
          {ico}
          {text}
        </Typography>
      </div>
    );
  }
}

// Define received props types for validation.
Tab.propTypes = {
};

decorate(Tab, {
  pageState: observable,
  handleClick: action
});

export default withStyles(TabStyles)(observer(Tab));