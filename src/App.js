import React, { Component } from 'react';
import AppRoutes from './config/AppRoutes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {store} from './store/index';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<MuiThemeProvider>
      		<AppRoutes />
      	</MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
