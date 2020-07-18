import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import { TabStyles } from '../styles';

/*
  Tab Component
*/
const Tab = withStyles(TabStyles)(
  ({ ico, text, index, classes, selected, handleClick }) => {
    return (
      <div
        className={clsx('', selected ? classes.selected : classes.tab)}
        onClick={() => handleClick(index)}
        aria-hidden="true"
      >
        <Typography className={classes.tabText} variant="inherit">
          {ico}
          {text}
        </Typography>
      </div>
    );
  }
);

/*
  Define received props types for validation.
*/
Tab.propTypes = {};

export default memo(Tab);
