import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import {
  App
} from '../components/Index';

const ParentApp = () => (
  <div>
    <Route exact path="/" component={App} />
    {/* App routing goes here!! */}
    
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
    </Switch>
  )
}



export default AppRoutes;