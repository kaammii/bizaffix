import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import {
  App,
  Layout,
  Detail
} from '../components/Index';

const ParentApp = () => (
  <div>
    <Route exact path="/" component={Layout} {...this.props}/>
    <Route exact path="/detail" component={Detail} />
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

export const PageRoutes = () => {

  {/* Dashboard routing goes here!! */ }
  return (
    <Switch>
      
      <Route path="/detail" component={Detail} />
    </Switch>
  )
}



export default AppRoutes;