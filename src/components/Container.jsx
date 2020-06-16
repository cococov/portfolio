import React, { useContext, memo, useMemo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ContentStyles } from '../styles.js';
import ReactMarkdown from 'markdown-to-jsx';
import clsx from 'clsx';
import { override } from './MarkDownComponents';
import { ContentContext } from '../stores';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/markdown.css';

/*
  Content Component
*/
const Container = withStyles(ContentStyles)(({ classes, width, isMobil }) => {
  const { selectedContent } = useContext(ContentContext);

  return useMemo(() => (
    <div
      style={!isMobil ? { width } : {}}
      className={clsx('Container', classes.container)}
    >
      <div
        className={clsx('Content', classes.content)}
      >
        <ReactMarkdown
          options={override(classes)}
        >
          {selectedContent}
        </ReactMarkdown>
      </div>
    </div>
  ), [classes, width, isMobil, selectedContent])
});

/*
  Define received props types for validation.
*/
Container.propTypes = {};

export default memo(Container);