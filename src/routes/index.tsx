import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../modules/pages/Login';
import { ListLabs } from '../modules/pages/ListUser';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/list-labs" exact component={ListLabs} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
