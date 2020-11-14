import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../modules/pages/Login';
import { ListLabs } from '../modules/pages/ListLabs';
import { MyReserves } from '../modules/pages/MyReserves';
import { Reserve } from '../modules/pages/Reserve';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/list-labs" exact component={ListLabs} />
        <Route path="/my-reserves" exact component={MyReserves} />
        <Route path="/reserve" exact component={Reserve} />
      </Switch>
    </BrowserRouter>
  );
};

export { Routes };
