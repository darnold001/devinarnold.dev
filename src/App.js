import React from "react";
import Footer from './Components/footer'
import "./App.css";
import Navigation from './Components/navigation'
import { CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./Components/pages/about";
import Contact from "./Components/pages/contact";
import Welcome from './Components/pages/welcomeModal'


function App() {
  const [showNav, setShowNav] = React.useState(true)
  const routes = [
    { path: '/', name: 'Home', Component: Welcome },
    { path: '/about', name: 'About', Component: About },
    { path: '/contact', name: 'Contact', Component: Contact },
  ]

  return (
    <div className="App">
          <Router>
          {showNav && <Navigation />}
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component showNav = {() => setShowNav(!showNav)}/>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          </Router>
          {showNav && <Footer />}
    </div>
  );
}

export default App;
