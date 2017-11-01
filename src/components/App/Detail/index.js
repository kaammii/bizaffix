import React, { Component, PropTypes } from 'react';

class Detail extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Detail</div>
        );
    }
}

export default Detail;
