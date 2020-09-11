import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './common/header/Header';

import About from './features/about/About';
import Contact from './features/contact/Contact';
import Projects from './features/projects/Projects';
import Resume from './features/resume/Resume';
import Art from './features/art/Art';


const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Switch>
        {/* <Redirect path="/" exact to={{pathname:'/about'}} />         */}
        <Route exact path='/tkrehbielportfolio/' component={About} />
        <Route exact path='/tkrehbielportfolio/about' component={About} />
        <Route exact path='/tkrehbielportfolio/contact' component={Contact} />
        <Route exact path='/tkrehbielportfolio/projects' component={Projects} />
        <Route exact path='/tkrehbielportfolio/resume' component={Resume} />
        <Route exact path='/tkrehbielportfolio/art' component={Art} />
      </Switch>
    </>
  );
};

export default App;