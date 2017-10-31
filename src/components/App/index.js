import React, { Component} from 'react';
import Navigation from './navigation';


class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="page-wrapper">
				<Navigation />
        	</div>
        );
    }
}

export default Index;
