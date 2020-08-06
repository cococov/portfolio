import React from 'react';
import PropTypes from 'prop-types';

/**
 * UL custom component
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Ul = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

Ul.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
