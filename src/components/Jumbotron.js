import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SearchBar from 'material-ui-search-bar';
import FlatButton from 'material-ui/FlatButton';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Jumbo extends Component{
	render(){
		return(
			
		    	<div className="container" style={{marginTop:22}} >
					<div class="header-call-to-action">
                        <h1>Real Estate Material Design Template</h1>
                        <h2>
                            Ut aliquam sed mauris id sodales. Nulla suscipit, tellus et posuere ornare, lectus tellus volutpat odio, quis laoreet mi enim quis arcu. Curabitur at commodo turpis, at tempus tellus. Duis non quam ut lorem hendrerit dapibus sit amet id quam.
                        </h2>

                        <div class="buttons">
                            <a href="headers-call-to-action.html#" class="btn btn-lg">The agents</a>
                            <a href="headers-call-to-action.html#" class="btn btn-lg">The agencies</a>
                            <a href="headers-call-to-action.html#" class="btn btn-lg">The users</a>
                        </div>
                    </div>
					<SearchBar
				      onChange={() => console.log('onChange')}
				      onRequestSearch={() => console.log('onRequestSearch')}
				      style={{
				        margin: '0 auto',
				        maxWidth: 800
				      }}
				    />
					<h1 className="text-center">Featured Listings</h1>
				    <div className="row">
				    	<div className="col-md-3">
							<Card>
							    
							    <CardMedia
							      overlay={<CardTitle title="Overlay title"/>}
							    >
							      <img src="http://bootstrapsale.com/projects/roost/v1-0/img/demo/listing/thumbs/2.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Card title" />
							    <CardText>
							      Lorem ipsum dolor sit amet
							      .
							
							    </CardText>
							    <CardActions>
							      <FlatButton label="Action1" />
							      <FlatButton label="Action2" />
							    </CardActions>
							 </Card>
				    	</div>
				    	<div className="col-md-3">
							<Card>
							    
							    <CardMedia
							      overlay={<CardTitle title="Overlay title"/>}
							    >
							      <img src="http://bootstrapsale.com/projects/roost/v1-0/img/demo/listing/thumbs/2.jpg" alt="" />
							    </CardMedia>
							    <CardTitle title="Card title" />
							    
							 </Card>
				    	</div>
				    	
				    	
				    </div>
		    	</div>
			
			);
	}
}