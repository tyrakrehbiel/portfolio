import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
        <Route exact path='/' component={Landing} />        
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/art' component={Art} />
      </Switch>
    </>
  );
};

export default App;



// import CssBaseline from '@material-ui/core/CssBaseline';
// import React from 'react';
// import {  Route, Link } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';

// import Header from './common/header/Header';
// import About from './features/about/About';
// import Contact from './features/contact/Contact';
// import Projects from './features/projects/Projects';
// import Art from './features/art/Art';


// const App: React.FC = () => {
//   return (
//     <>
//       <CssBaseline />
//       <Header />
//       <Router>
//         <Route exact path="/" component={About} />
//         <Route exact path="/#/about" component={About} />
//         <Route exact path="/#/contact" component={Contact} />
//         <Route exact path="/#/projects" component={Projects} />
//         <Route exact path="/#/art" component={Art} />
//       </Router>
//     </>
//   );
// };

// export default App;