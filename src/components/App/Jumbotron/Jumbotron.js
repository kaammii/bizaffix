import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state={
        	dataSource: []
        }
    }

    render() {
        return (
            <div className="header-call-to-action">
                <h1>Bizaffix Material Design Template</h1>
                <SearchBar
                  dataSource={this.state.dataSource}
                  onChange={(value) => this.setState({dataSource: [ value, value+value, value+value+value]})}
                  onRequestSearch={() => console.log('onRequestSearch')}
                  hintText=""
                  placeholder="What are you looking for?"
                  style={{
                    margin: '0 auto',
                    maxWidth: 800
                  }}
                />
                <div className="buttons">
                    <a href="headers-call-to-action.html#" className="btn btn-lg">The agents</a>
                    <a href="headers-call-to-action.html#" className="btn btn-lg">The agencies</a>
                    <a href="headers-call-to-action.html#" className="btn btn-lg">The users</a>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
