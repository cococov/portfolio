import React, { createContext, useState, useCallback } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

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