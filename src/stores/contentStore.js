import React, { createContext, useState, useContext, useEffect } from 'react';
import { profile, education, experience, skills } from '../content/spa';
import { error } from '../content';
import AppContext from './appStore';

/**
 * Content Context
 */
const ContentContext = createContext();

/**
   * Fetch and save the selected content if this isn't exists
   * @param {Number} selectedTab - selectect tab
   * @param {String} selectedProject - selectect project
   */
const addNewContent = async (selectedTab, selectedProject, content, setContent) => {

  if (selectedTab !== 4 && content[selectedTab])
    return false;

  if (selectedTab === 4 && content[selectedTab][selectedProject])
    return false;

  let newContent = await fetchSelected(selectedTab, selectedProject);
  let newContentText = await newContent.text();
  let actualContent = [...content];

  if (selectedTab !== 4) {
    actualContent[selectedTab] = newContentText;
  } else if (selectedTab === 4) {
    actualContent[selectedTab][selectedProject] = newContentText;
  }

  setContent(actualContent);
};

/**
 * Fetch the selectect content
 * @param {Number} selectedTab - selectect tab
 * @param {String} selectedProject - selectect project
 * @return {Document} result - Markdown document
 */
const fetchSelected = async (selectedTab, selectedProject) => {
  let result = null;

  switch (selectedTab) {
    case 0:
      result = (await fetch(profile));
      break;
    case 1:
      result = (await fetch(experience));
      break;
    case 2:
      result = (await fetch(education));
      break;
    case 3:
      result = (await fetch(skills));
      break;
    default:
      result = (await fetch(error));
  }
  return result;
};

/**
 * Content Provider
 * @param {Object} props
 */
export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(['', '', '', '', {}]);
  const [selectedContent, setSelectedContent] = useState('');
  const { selectedTab, selectedProject } = useContext(AppContext);

  useEffect(() => {
    const updateContent = async () => {
      await addNewContent(selectedTab, selectedProject, content, setContent);
      let markdown = (selectedTab === 4 && content[selectedTab][selectedProject])
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

export default ContentContext;