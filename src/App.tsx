import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './features/home-page/HomePage';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <HomePage />
    </>
  );
}

export default App;