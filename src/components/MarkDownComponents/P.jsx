import React from 'react';
import PropTypes from 'prop-types';

/**
 * P custom component (Paraph)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Paraph = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

Paraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
