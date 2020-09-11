// import CssBaseline from '@material-ui/core/CssBaseline';
// import React from 'react';
// import { HashRouter, Route, Link } from 'react-router-dom';

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
//       <Switch>
//         <Redirect path="/portfolio/" exact to={{pathname:'/portfolio/about'}} />        
//         <Route exact path='/portfolio/about' component={About} />
//         <Route exact path='/portfolio/contact' component={Contact} />
//         <Route exact path='/portfolio/projects' component={Projects} />
//         <Route exact path='/portfolio/art' component={Art} />
//       </Switch>
//     </>
//   );
// };

// export default App;
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import Header from './common/header/Header';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import Projects from './features/projects/Projects';
import Art from './features/art/Art';


const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <HashRouter basename='/'>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/art" component={Art} />
      </HashRouter>
    </>
  );
};

export default App;