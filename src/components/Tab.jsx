import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TabStyles } from '../styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Tab Component
*/
const Tab = withStyles(TabStyles)(({
  ico,
  text,
  index,
  classes,
  selected,
  handleClick
}) => {

  return (
    <div
      className={clsx('', ((selected) ? classes.selected : classes.tab))}
      onClick={() => handleClick(index)}
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
Tab.propTypes = {};

export default memo(Tab);