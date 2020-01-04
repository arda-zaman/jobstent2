import React from "react";
import { Route, Switch } from "react-router";
import App from "./src/components/App";
import Home from './src/components/Home';
import Header from './src/components/header';
import ResumeTemplates from './src/components/resumeTemplates';
import ResumeBuilder from './src/components/builder/builder';
import Templates from './src/components/templates';
import Login from './src/components/sign/login';
import Register from './src/components/sign/register';

const Routes = props => {
  // const firstLevelPath = typeof window !== "undefined" && window.location.pathname.split("/")[1];

  return (
    <div>
      <Header url={props} />
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/resume-templates" component={ResumeTemplates} />
          <Route exact path="/builder" component={ResumeBuilder} />
          <Route exact path="/builder/:id" render={(prop) => <ResumeBuilder resumeID={prop.match.params.id} />} />
          <Route exact path="/templates/:id/:uid" render={(prop) => <Templates templateID={prop.match.params.id} userID={prop.match.params.uid} />} />
        </Switch>
      </App>
    </div>
  );
};

module.exports = Routes;
