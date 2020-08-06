import React from 'react';
import PropTypes from 'prop-types';

/**
 * A custom component (Title)
 * @param {Object} props
 * @param {String} props.rel
 * @param {String} props.href
 * @param {String} props.children
 * @param {String} props.className
 */
export const Link = ({ children, href, className }) => {
  return (
    <a
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      className={className}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
