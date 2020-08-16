import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/**
 * IMG custom component
 * @param {Object} props
 * @param {String} props.src
 * @param {String} props.className
 * @param {String} props.title
 * @param {String} props.classNameProfile
 */
export const Img = ({
  src,
  className,
  title,
  alt,
  classNameRight,
  classNameContent,
  classNamePhoneLandscape,
  isMobil,
  isBigMobil,
}) => {
  if (
    (alt === 'ucn-logo' || alt === 'salesianos-logo') &&
    isMobil &&
    !isBigMobil
  )
    return null;
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        className,
        title === 'content' ? classNameContent : '',
        title === 'right' && !(isMobil && !isBigMobil) ? classNameRight : '',
        title === 'content-phone-landscape' ? classNamePhoneLandscape : ''
      )}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string.isRequired,
  classNameRight: PropTypes.string.isRequired,
  classNameContent: PropTypes.string.isRequired,
  classNamePhoneLandscape: PropTypes.string.isRequired,
  isMobil: PropTypes.bool,
  isBigMobil: PropTypes.bool,
};

Img.defaultProps = {
  isMobil: false,
  isBigMobil: false,
  title: 'Image',
};
