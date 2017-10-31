import React, { Component} from 'react';
import Navigation from './navigation';


class App extends Component {
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

export default App;
