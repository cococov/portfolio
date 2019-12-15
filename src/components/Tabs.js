import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { TabsStyles } from '../styles';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Person, School, Work, Build } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './Tab'

/*
  Tabs Main Class
*/
class Tabs extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
      value: 0
    };
  }

  handleChange = (newValue) => {
    this.pageState.value = newValue;
  };

  render() {
    const { classes } = this.props;
    const { value } = this.pageState;
    return (
      <div className={clsx('headerContainer', classes.headerContainer)}>
        <AppBar className={clsx('header', classes.header)} position="sticky">
          <Toolbar className="pl-0">
            <Tab
              index={0}
              text="Profile"
              selected={(value === 0)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<Person className="mr-2" />}
            />
            <Tab
              index={1}
              text="Experience"
              selected={(value === 1)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<Work className="mr-2" />}
            />
            <Tab
              index={2}
              text="Education"
              selected={(value === 2)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<School className="mr-2" />}
            />
            <Tab
              index={3}
              text="Skills"
              selected={(value === 3)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<Build className="mr-2" />}
            />
          </Toolbar>
        </AppBar>
        <AppBar className={clsx('subHeader', classes.subHeader)} position="sticky">
          <Typography variant="caption" className={clsx('m-1 ml-3')}>
            src > portfolio > {
              (() => {
                switch (value) {
                  case 0:
                    return 'Profile'
                  case 1:
                    return 'Experience'
                  case 2:
                    return 'Education'
                  case 3:
                    return 'Skills'
                  default:
                    return 'ERROR!'
                }
              })()
            }
          </Typography>
        </AppBar>
      </div>
    );
  }
}

/* 
  Define received props types for validation.
*/
Tabs.propTypes = {
};

/*
  MobX decorations.
*/
decorate(Tabs, {
  pageState: observable
});

export default withStyles(TabsStyles)(observer(Tabs));