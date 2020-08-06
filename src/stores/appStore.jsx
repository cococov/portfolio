import React, {
  createContext,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import PropTypes from 'prop-types';

/**
 * content Width getter
 * @returns {Number} display Width - Drawer width
 */
export const getWidth = () => {
  if (window.innerWidth < 500) return window.innerWidth;
  const width = window.innerWidth - 310;
  return width;
};

/**
 * Display Width getter
 * @returns {Number} display Width
 */
export const getFullWidth = () => {
  return window.innerWidth;
};

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
  const [isBigMobil, setBigMobil] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [width, setWidth] = useState(() => getWidth());
  const [selectedProject, setSelectedProject] = useState('');

  const resize = async () => {
    const actualScreenWidth = getFullWidth();
    const actualWidth = getWidth();
    setWidth(actualWidth);
    setMobil(actualWidth < 500);
    setBigMobil(actualScreenWidth < 800 && actualScreenWidth > 500);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);

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
        isBigMobil,
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

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
