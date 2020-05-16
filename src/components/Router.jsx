import React, { memo } from 'react';
import { rootRouter, baseRouter } from '../routes/routes';
import { Switch, Route } from 'react-router';

/**
 * Create a Switch/Page router.
 * @param routes - List with the react-router page object definition.
 */
const generateRouter = routes => (
  <Switch>
    {
      routes.map(({ component, ...otherProps }, index) => {
        const Page = component;
        return (
          <Route key={index} {...otherProps}>
            <Page />
          </Route>
        )
      })
    }
  </Switch>
);

/**
 * Render the page list definition using react-router.
 */
const RootRouter = memo(() => generateRouter(rootRouter));

// Render the Page component defined for react-router.
const PageRouter = memo(() => generateRouter(baseRouter));

export {
  RootRouter,
  PageRouter
};

export default PageRouter;