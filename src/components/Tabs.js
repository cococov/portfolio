import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { TabsStyles } from '../styles';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Person, School, Work, Build } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tab from './Tab'
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Tabs Main Class
*/
class Tabs extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {};
  }

  handleChange = (newValue) => {
    this.props.handleChangeTab(newValue);
  };

  render() {
    const { classes, selectedTab, selectedProject } = this.props;
    return (
      <div className={clsx('headerContainer', classes.headerContainer)}>
        <AppBar className={clsx('header', classes.header)} position="sticky">
          <Toolbar className="pl-0">
            <Tab
              index={0}
              text="Profile"
              selected={(selectedTab === 0)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<Person className="mr-2" />}
            />
            <Tab
              index={1}
              text="Experience"
              selected={(selectedTab === 1)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<Work className="mr-2" />}
            />
            <Tab
              index={2}
              text="Education"
              selected={(selectedTab === 2)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<School className="mr-2" />}
            />
            <Tab
              index={3}
              text="Skills"
              selected={(selectedTab === 3)}
              className="border border-dark"
              handleClick={this.handleChange}
              ico={<Build className="mr-2" />}
            />
            {
              (() => {
                if (selectedProject) {
                  return (
                    <Tab
                      index={4}
                      text="Project"
                      selected={(selectedTab === 4)}
                      className="border border-dark"
                      handleClick={this.handleChange}
                      ico={<FontAwesomeIcon className="mr-2 fa-lg" icon={['fab', '']} />}
                    />
                  )
                }
              })()
            }
          </Toolbar>
        </AppBar>
        <AppBar className={clsx('subHeader', classes.subHeader)} position="sticky">
          <Typography variant="caption" className={clsx('m-1 ml-3')}>
            src > portfolio > {
              (() => {
                switch (selectedTab) {
                  case 0:
                    return 'Profile'
                  case 1:
                    return 'Experience'
                  case 2:
                    return 'Education'
                  case 3:
                    return 'Skills'
                  default:
                    return `Projects > ${''}`
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