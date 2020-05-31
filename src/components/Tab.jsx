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
const Tab = withStyles(TabStyles)(({
  classes,
  selected,
  index,
  text,
  ico,
  handleClick
}) => {

  const handleClick = () => {
    handleClick(index);
  };

  return (
    <div
      className={clsx('', ((selected) ? classes.selected : classes.tab))}
      onClick={handleClick}
    >
      <Typography
        className={clsx('text-left align-middle mt-1 ml-2')}
        variant="inherit"
      >
        {ico}{text}
      </Typography>
    </div>
  );
});

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