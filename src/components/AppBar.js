import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default class Appbar extends Component{
	render(){
		return(
			<div>
				<Paper zDepth={5}>
					<AppBar
					title="Bizaffix"
					
					iconElementRight={
						<div>
							<FlatButton label="Register" />
							<FlatButton label="Login" />
						</div>
						}
					iconElementLeft={<div></div>}
			  		/>
				</Paper>
			</div>
			);
	}
}