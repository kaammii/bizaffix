import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Featured extends Component{
	render(){
		return(
			<div className="container"> 
				<div className="col-md-12" >
					<Paper zDepth={5}>
						<Card>
							<div className="container">
								<h2>Hello World</h2>
							</div>
						</Card>
					</Paper>
				</div>
				<div className="col-md-12" >
					
					<Paper zDepth={5}>
						<Card>
						<h2> Featured</h2>
							
						</Card>
					</Paper>
				</div>
				<div className="col-md-12" >
					
					<Paper zDepth={5}>
						<Card>
						<h2> Featured</h2>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
						</Card>
					</Paper>
				</div>
				<div className="col-md-12" >
					
					<Paper zDepth={5}>
						<Card>
						<h2> Featured</h2>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
						</Card>
					</Paper>
				</div>

			</div>
			);
	}
}