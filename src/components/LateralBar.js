import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { observable, decorate  } from 'mobx';
import { lateralBarStyles } from '../styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';


class LateralBar extends Component {
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

  render () {
    const { classes } = this.props;
    return (
      <div
        className={classes.list}
        role="presentation"
      >
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            <ListItem button key={'1'}>
              <ListItemText primary={'1'} />
            </ListItem>
            <ListItem button key={'2'}>
              <ListItemText primary={'2'} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

// Define received props types for validation.
LateralBar.propTypes = {
};

decorate(LateralBar, {
  pageState: observable
});

export default withStyles(lateralBarStyles)(LateralBar);