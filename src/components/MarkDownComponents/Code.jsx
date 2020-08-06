import React from 'react';
import PropTypes from 'prop-types';

/**
 * Code custom component (Title)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Code = ({ children, className }) => {
  return <code className={className}>{children}</code>;
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
