import React, { Component} from 'react';
import PageRoutes from '../../config/AppRoutes';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="page-wrapper">
				<PageRoutes />
        	</div>
        );
    }
}

export default App;
