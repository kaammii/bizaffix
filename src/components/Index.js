import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App/index';

export default class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				},
				{
					name: 'Old Leaf Quay',
					location1: 'NewYork',
					location2: 'Brooklyn'
				}
			]
		}
	}
	render() {
		return (
				<MuiThemeProvider>
					<App />
				</MuiThemeProvider>
			)
	}
}