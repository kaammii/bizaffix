import React, { Component } from 'react';
import AppRoutes from './config/AppRoutes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import {store} from './store/index';
import AppTheme from './app-theme';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      	<MuiThemeProvider muiTheme={AppTheme} >
      		<AppRoutes />
      	</MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
