import React, { FC } from "react";
import Footer from "./Components/footer";
import NavHeader from "./Components/NavHeader";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { About } from "./Components/pages/about";
import Contact from "./Components/pages/contact";
import Welcome from "./Components/pages/welcome";
import PageNotFound from "./Components/pages/pageNotFound";
import { Projects } from "./Components/pages/projects";
import { ThemeProvider } from "./Components/themeContext";

const App: FC = () => {
  const [showNav, setShowNav] = React.useState(true);
  const routes = [
    { path: "/welcome", name: "Home", Component: Welcome },
    { path: "/about", name: "About", Component: About },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/projects", name: "Projects", Component: Projects },
  ];

  const navProps = { setShowNav: setShowNav };
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          {showNav && <NavHeader />}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <div className="page">
                    <Component {...navProps} />
                  </div>
                )}
              </Route>
            ))}
            <Redirect exact from="/" to="welcome" />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        {showNav && <Footer />}
      </div>
    </ThemeProvider>
  );
};

export default App;

console.log(`
██████╗  █████╗    ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔══██╗   ██╔══██╗██╔════╝██║   ██║
██║  ██║███████║   ██║  ██║█████╗  ██║   ██║
██║  ██║██╔══██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝
██████╔╝██║  ██║██╗██████╔╝███████╗ ╚████╔╝ 
╚═════╝ ╚═╝  ╚═╝╚═╝╚═════╝ ╚══════╝  ╚═══╝                                     
`);
