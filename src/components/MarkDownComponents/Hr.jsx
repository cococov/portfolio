import React from 'react';
import PropTypes from 'prop-types';

/**
 * HR custom component
 * @param {Object} props
 * @param {String} props.className
 */
export const Hr = ({ className }) => {
  return <hr className={className} />;
};

Hr.propTypes = {
  className: PropTypes.string.isRequired,
};
