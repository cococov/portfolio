import React from 'react';
import PropTypes from 'prop-types';

/**
 * H2 custom component (SubTitle)
 * @param {Object} props
 * @param {String} props.children
 * @param {String} props.className
 */
export const SubTitle = ({ children, className }) => {
  return <h2 className={className}>{children}</h2>;
};

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
