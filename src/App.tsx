import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Switch, Route} from 'react-router-dom';

import About from './features/about/About';
import Contact from './features/contact/Contact';
import Home from './features/home/Home';
import Projects from './features/projects/Projects';
import Resume from './features/resume/Resume';
import Art from './features/art/Art';


const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/art' component={Art} />
      </Switch>
    </>
  );
};

export default App;