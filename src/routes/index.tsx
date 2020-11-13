import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../modules/pages/Login';
import { PageContent } from '../components/PageContent';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/list-labs" exact component={PageContent} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
