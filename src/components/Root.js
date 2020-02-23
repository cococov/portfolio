import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageRouter } from './Router';
import { basename } from '../routes/routes.json';


/**
 * Root with global functionality components.
 */
const Root = () => (
  <>
    <BrowserRouter basename={`${basename}/`}>
      <PageRouter />
    </BrowserRouter>
  </>
);

/**
 * Root container.
 * Set the UI store to the context provider.
 */
const RootContainer = () => {
  return (
    <Root />
  );
};

export default RootContainer;