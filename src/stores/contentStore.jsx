import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { profile, education, experience, skills } from '../content/spa';
import {
  portfolio,
  usercrud,
  magiclife,
  restalarm,
  rompricescraping,
  minesweeper,
  rewrite,
} from '../content/projects/spa';
import { error } from '../content';
import AppContext from './appStore';

/**
 * Content Context.
 */
const ContentContext = createContext();

/**
 * Fetch the selected project.
 * @param {String} selectedProject - selected project.
 * @return {Document} result - Markdown document.
 */
const fetchSelectedProject = async (selectedProject) => {
  let result = null;

  switch (selectedProject) {
    case 'portfolio.jsx':
      result = await fetch(portfolio);
      break;
    case 'user-crud.jsx':
      result = await fetch(usercrud);
      break;
    case 'magiclife.jsx':
      result = await fetch(magiclife);
      break;
    case 'rest-alarm.js':
      result = await fetch(restalarm);
      break;
    case 'rom-price-scraping.js':
      result = await fetch(rompricescraping);
      break;
    case 'minesweeper.java':
      result = await fetch(minesweeper);
      break;
    case 'rewrite.c':
      result = await fetch(rewrite);
      break;
    // put any other project here...
    default:
      result = await fetch(error);
  }
  return result;
};

/**
 * Fetch the selected content.
 * @param {Number} selectedTab - selected tab.
 * @param {String} selectedProject - selected project.
 * @return {Document} result - Markdown document.
 */
const fetchSelected = async (selectedTab, selectedProject) => {
  let result = null;

  switch (selectedTab) {
    case 0:
      result = await fetch(profile);
      break;
    case 1:
      result = await fetch(experience);
      break;
    case 2:
      result = await fetch(education);
      break;
    case 3:
      result = await fetch(skills);
      break;
    case 4:
      result = fetchSelectedProject(selectedProject);
      break;
    default:
      result = await fetch(error);
  }
  return result;
};

/**
 * Fetch and save the selected content if this isn't exists.
 * @param {Number} selectedTab - selected tab.
 * @param {String} selectedProject - selected project.
 */
const addNewContent = async (
  selectedTab,
  selectedProject,
  content,
  setContent
) => {
  // check if the document exists in memory.
  if (selectedTab !== 4 && content[selectedTab]) return false;

  if (selectedTab === 4 && content[selectedTab][selectedProject]) return false;

  // if document doesn't exists, fetch it.
  const newContent = await fetchSelected(selectedTab, selectedProject);
  const newContentText = await newContent.text();
  const actualContent = [...content];

  if (selectedTab !== 4) {
    actualContent[selectedTab] = newContentText;
  } else if (selectedTab === 4) {
    actualContent[selectedTab][selectedProject] = newContentText;
  }

  // save the document in store state.
  setContent(actualContent);

  return true;
};

/**
 * Content Provider.
 * @param {Object} props
 * @param {Component} props.children
 */
export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(['', '', '', '', {}]);
  const [selectedContent, setSelectedContent] = useState('');
  const { selectedTab, selectedProject } = useContext(AppContext);

  useEffect(() => {
    const updateContent = async () => {
      await addNewContent(selectedTab, selectedProject, content, setContent);
      const markdown =
        selectedTab === 4 && content[selectedTab][selectedProject]
          ? content[selectedTab][selectedProject]
          : content[selectedTab];
      setSelectedContent(markdown);
    };
    updateContent();
  }, [selectedTab, selectedProject, content]);

  return (
    <ContentContext.Provider value={{ content, selectedContent }}>
      {children}
    </ContentContext.Provider>
  );
};

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContext;
