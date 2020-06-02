import React, { memo, useMemo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TabsStyles } from '../styles';
import clsx from 'clsx';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Person, School, Work, Build } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projects } from '../content/projects';
import Tab from './Tab'
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Tabs Component
*/
const Tabs = withStyles(TabsStyles)(({
  width,
  classes,
  selectedTab,
  selectedProject,
  handleChangeTab
}) => {

  return (
    <div className={clsx('headerContainer', classes.headerContainer)} style={{ width: width }}>
      <AppBar className={clsx('header', classes.header)} position="sticky">
        <Toolbar className="pl-0">
          <Tab
            index={0}
            text={width > 730 ? "Profile" : ""}
            selected={(selectedTab === 0)}
            className="border border-dark"
            handleClick={handleChangeTab}
            ico={useMemo(() => <Person className="mr-2" />, [])}
          />
          <Tab
            index={1}
            text={width > 730 ? "Experience" : ""}
            selected={(selectedTab === 1)}
            className="border border-dark"
            handleClick={handleChangeTab}
            ico={useMemo(() => <Work className="mr-2" />, [])}
          />
          <Tab
            index={2}
            text={width > 730 ? "Education" : ""}
            selected={(selectedTab === 2)}
            className="border border-dark"
            handleClick={handleChangeTab}
            ico={useMemo(() => <School className="mr-2" />, [])}
          />
          <Tab
            index={3}
            text={width > 730 ? "Skills" : ""}
            selected={(selectedTab === 3)}
            className="border border-dark"
            handleClick={handleChangeTab}
            ico={useMemo(() => <Build className="mr-2" />, [])}
          />
          {
            (() => {
              if (selectedProject) {
                return (
                  <Tab
                    index={4}
                    text={width > 730 ? projects[selectedProject]['name'] : ""}
                    selected={(selectedTab === 4)}
                    className="border border-dark"
                    handleClick={handleChangeTab}
                    ico={<FontAwesomeIcon className="mr-2 fa-lg" icon={['fab', projects[selectedProject]['ico']]} />}
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
                  return `Projects > ${projects[selectedProject]['name']}`
              }
            })()
          }
        </Typography>
      </AppBar>
    </div>
  );
});

/*
  Define received props types for validation.
*/
Tabs.propTypes = {};

export default memo(Tabs);