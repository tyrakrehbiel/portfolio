import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './common/header/Header';
import Landing from './features/landing/Landing';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Projects from './features/projects/Projects';
import Art from './features/art/Art';


const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        <Redirect path="/" exact to={{pathname:'/about'}} />        
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/art' component={Art} />
        <Route exact path='/landing' component={Landing} />
      </Switch>
    </>
  );
};

export default App;