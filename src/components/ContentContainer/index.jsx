import React, {
  useLayoutEffect,
  useContext,
  useRef,
  memo,
  useMemo,
} from 'react';
import { withStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'markdown-to-jsx';
import clsx from 'clsx';
import { override } from '../MarkDownComponents';
import { ContentContext, AppContext } from '../../stores';
import { ContentStyles } from './styles';
import '../../static/css/markdown.css';

/*
  Content Component
*/
const Container = withStyles(ContentStyles)(({ classes }) => {
  const { selectedContent } = useContext(ContentContext);
  const { isMobil, width } = useContext(AppContext);
  const contentRef = useRef();

  useLayoutEffect(() => {
    if (contentRef.current) contentRef.current.scrollTo(0, 0);
  }, [selectedContent]);

  return useMemo(
    () => (
      <div style={!isMobil ? { width } : {}} className={classes.container}>
        <div ref={contentRef} className={clsx('Content', classes.content)}>
          <ReactMarkdown options={override(classes)}>
            {selectedContent}
          </ReactMarkdown>
        </div>
      </div>
    ),
    [classes, width, isMobil, selectedContent]
  );
});

/*
  Define received props types for validation.
*/
Container.propTypes = {};

export default memo(Container);
