import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Restaurants = React.lazy(() => import('features/Restaurants'));
const Details = React.lazy(() => import('features/Map'));

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/">
            <Restaurants />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
