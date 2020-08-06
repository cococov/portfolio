import React from 'react';
import PropTypes from 'prop-types';

/**
 * H3 custom component
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const H3 = ({ children, className }) => {
  return <h3 className={className}>{children}</h3>;
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
