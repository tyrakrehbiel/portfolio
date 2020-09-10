import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './features/home-page/HomePage'

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>

    </>
  );
};

export default App;