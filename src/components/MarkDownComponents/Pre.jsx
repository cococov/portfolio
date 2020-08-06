import React from 'react';
import PropTypes from 'prop-types';

/**
 * PRE custom component
 * @param {Object} props
 * @param {HTMLElement} props.children
 * @param {String} props.className
 */
export const Pre = ({ children, className }) => {
  return <pre className={className}>{children}</pre>;
};

Pre.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
