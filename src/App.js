import React from "react";
import Footer from "./Components/footer";
import "./App.css";
import Navigation from "./Components/navigation";
import { CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "./Components/pages/about";
import Contact from "./Components/pages/contact";
import Welcome from "./Components/pages/welcome";
import PageNotFound from "./Components/pages/pageNotFound";
// import ComingSoon from './Components/comingSoon'
import Projects from "./Components/pages/projects";

function App() {
  const myRef = React.createRef();
  const [showNav, setShowNav] = React.useState(true);
  const routes = [
    { path: "/welcome", name: "Home", Component: Welcome },
    { path: "/about", name: "About", Component: About },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/projects", name: "Projects", Component: Projects },
  ];
  const nodeRef = React.useRef(null);
  return (
    <div className="App">
      <Router>
        {showNav && <Navigation />}
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  nodeRef={nodeRef}
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  ref={myRef}
                  unmountOnExit
                >
                  <div className="page">
                    <Component showNav={() => setShowNav(!showNav)} />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          <Redirect exact from="/" to="welcome" />

          <Route component={PageNotFound} />
        </Switch>
      </Router>
      {showNav && <Footer />}
    </div>
  );
}

export default App;

console.log(`
██████╗  █████╗    ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔══██╗   ██╔══██╗██╔════╝██║   ██║
██║  ██║███████║   ██║  ██║█████╗  ██║   ██║
██║  ██║██╔══██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝██║  ██║██╗██████╔╝███████╗ ╚████╔╝ 
╚═════╝ ╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝  ╚═══╝  
                                            
`);
