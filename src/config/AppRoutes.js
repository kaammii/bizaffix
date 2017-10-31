import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import {
  App,
  Signin,
  Signup,
  Home,
  Main,
  Process,
  ProcessTemplate,
  AdminTab,
  CreateTemplate,
  CreateProcess,
  ViewCompleteProcessMain
} from './../components/index';

const ParentApp = () => (
  <div>
    <App />

    {/* App routing goes here!! */}
    <Route path="/signup" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Route path="/dashboard" component={Home} />

  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route component={ParentApp} />
    </BrowserRouter>
  )
};

export const DashboardRoute = () => {

  {/* Dashboard routing goes here!! */ }
  return (
    <Switch>
      <Route exact path="/dashboard" component={Main} />
      <Route path="/dashboard/process" component={Process} />
      <Route path="/dashboard/processTemplate" component={ProcessTemplate} />
      <Route path="/dashboard/admin" component={AdminTab} />
	    {/*<Route path="/dashboard/signedTemplate" component={signedComponent} />*/}
      <Route path="/dashboard/createtemplate" component={CreateTemplate} />
      <Route path="/dashboard/createprocess" component={CreateProcess} />1
      <Route path="/dashboard/signedTemplate" component={ViewCompleteProcessMain} />
    
    </Switch>
  )
}



export default AppRoutes;