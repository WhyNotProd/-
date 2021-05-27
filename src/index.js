import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import About from "views/Components/About.js";
import Services from "views/Components/Services.js";
import Feedback from "views/Components/Feedback.js";
import Contacts from "views/Components/Contacts.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
        <Route path="/services-page" component={Services} />
        <Route path="/feedback-page" component={Feedback} />
        <Route path="/about-page" component={About} />
        <Route path="/contacts-page" component={Contacts} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
