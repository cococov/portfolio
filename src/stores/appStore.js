import React, { createContext, useState, useCallback, useLayoutEffect } from 'react';
import { getWidth } from '../styles';

/**
 * App Context.
 */
const AppContext = createContext();

/**
 * App Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const AppProvider = ({ children }) => {
  const [isMobil, setMobil] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [width, setWidth] = useState(() => getWidth());
  const [selectedProject, setSelectedProject] = useState('');

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  const resize = async () => {
    let _width = getWidth();
    setWidth(_width);
    setMobil(_width < 500);
  };

  const handleChangeProject = useCallback((project) => {
    setSelectedTab(4);
    setSelectedProject(project);
  }, []);

  const handleChangeTab = useCallback((tab) => {
    setSelectedTab(tab);
  }, []);

  const handleClickAbout = useCallback(() => {
    setAboutOpen(true);
  }, []);

  const handleCloseAbout = useCallback(() => {
    setAboutOpen(false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        width,
        isMobil,
        selectedTab,
        isAboutOpen,
        selectedProject,
        handleChangeTab,
        handleClickAbout,
        handleCloseAbout,
        handleChangeProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;