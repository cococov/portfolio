import React, { memo, useMemo, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Person, School, Work, Build } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projects } from '../content/projects';
import { TabsStyles } from '../styles';
import { AppContext } from '../stores';
import Tab from './Tab';

/*
  Tabs Component
*/
const Tabs = withStyles(TabsStyles)(({ classes }) => {
  const {
    width,
    isMobil,
    selectedTab,
    selectedProject,
    handleChangeTab,
  } = useContext(AppContext);

  return (
    <div className={classes.headerContainer} style={!isMobil ? { width } : {}}>
      <AppBar className={classes.header} position="sticky">
        <Toolbar className={classes.toolbar}>
          <Tab
            index={0}
            text={width > 730 ? 'Profile' : ''}
            selected={selectedTab === 0}
            handleClick={handleChangeTab}
            ico={useMemo(
              () => (
                <Person className={classes.tabIco} />
              ),
              [classes.tabIco]
            )}
          />
          <Tab
            index={1}
            text={width > 730 ? 'Experience' : ''}
            selected={selectedTab === 1}
            handleClick={handleChangeTab}
            ico={useMemo(
              () => (
                <Work className={classes.tabIco} />
              ),
              [classes.tabIco]
            )}
          />
          <Tab
            index={2}
            text={width > 730 ? 'Education' : ''}
            selected={selectedTab === 2}
            handleClick={handleChangeTab}
            ico={useMemo(
              () => (
                <School className={classes.tabIco} />
              ),
              [classes.tabIco]
            )}
          />
          <Tab
            index={3}
            text={width > 730 ? 'Skills' : ''}
            selected={selectedTab === 3}
            handleClick={handleChangeTab}
            ico={useMemo(
              () => (
                <Build className={classes.tabIco} />
              ),
              [classes.tabIco]
            )}
          />
          {(() => {
            if (selectedProject) {
              return (
                <Tab
                  index={4}
                  text={width > 730 ? projects[selectedProject].name : ''}
                  selected={selectedTab === 4}
                  handleClick={handleChangeTab}
                  ico={
                    <FontAwesomeIcon
                      className={classes.tabIco}
                      icon={['fab', projects[selectedProject].ico]}
                    />
                  }
                />
              );
            }
            return null;
          })()}
        </Toolbar>
      </AppBar>
      <AppBar className={classes.subHeader} position="sticky">
        <Typography variant="caption" className={classes.rute}>
          {`src > portfolio > `}
          {(() => {
            switch (selectedTab) {
              case 0:
                return 'Profile';
              case 1:
                return 'Experience';
              case 2:
                return 'Education';
              case 3:
                return 'Skills';
              default:
                return `Projects > ${projects[selectedProject].name}`;
            }
          })()}
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
