import React, { useState, useEffect, memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ContentStyles } from '../styles.js';
import ReactMarkdown from 'markdown-to-jsx';
import { error } from '../content';
import { profile, education, experience, skills } from '../content/spa';
import clsx from 'clsx';
import { override } from './MarkDownComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/markdown.css';

/**
 * Load the markdown document of the selected section
 * @param {Number} selectedTab - selected tab number (0...n)
 * @param {Function} setMarkdown - markdown setter
 */
const loadMd = async (selectedTab, setMarkdown) => {
  let md = await (await fetchSelected(selectedTab)).text();
  setMarkdown(md);
};

/**
 * Fetch the selected Markdown document
 * @param {Number} selectedTab - selected tab number (0...n)
 */
const fetchSelected = async selectedTab => {
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

/*
  Content Component
*/
const Container = withStyles(ContentStyles)(({ classes, width, selectedTab }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    loadMd(selectedTab, setMarkdown);
  }, [selectedTab]);

  return (
    <div
    style={{ width: width }}
    className={clsx('Container', classes.container)}
    >
      <div
        className={clsx('Content', classes.content)}
      >
        <ReactMarkdown
          options={override(classes)}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
});

/*
  Define received props types for validation.
*/
Container.propTypes = {};

export default memo(Container);