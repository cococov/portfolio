import React from 'react';
import PropTypes from 'prop-types';

/**
 * H1 custom component (Title)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const Title = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
