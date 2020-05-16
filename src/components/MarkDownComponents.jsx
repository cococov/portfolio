import React from 'react';
import clsx from 'clsx';

export const Title = ({ children, className }) => {
  return (
    <h1
      className={className}
    >
      {children}
    </h1>
  );
};

export const SubTitle = ({ children, className }) => {
  return (
    <h2
      className={className}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }) => {
  return (
    <h3
      className={className}
    >
      {children}
    </h3>
  );
};

export const Hr = ({ className }) => {
  return (
    <hr
      className={className}
    />
  );
};

export const Paraph = ({ children, className }) => {
  return (
    <p
      className={className}
    >
      {children}
    </p>
  );
};

export const Ul = ({ children, className }) => {
  return (
    <ul
      className={className}
    >
      {children}
    </ul>
  );
};

export const Pre = ({ children, className }) => {
  return (
    <pre
      className={className}
    >
      {children}
    </pre>
  );
};

export const Img = ({ src, className, title, classNameProfile }) => {
  return (
    <img
      src={src}
      alt={title}
      className={clsx((title === 'profile') ? classNameProfile : '', className)}
    />
  );
};