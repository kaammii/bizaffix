import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state={
        	data: [
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
                {
                    cardText: 'some random text.'
                },
            ]
        }
    }

    render() {
        return (
            <div className="content col-sm-8 col-md-9">                                
                <div className="row">
                    {this.state.data.map((item,k)=>
                    <div className="col-sm-6 col-md-4" key={k} >
                        <div className="property-box">
                            <div className="property-box-image">
                                <a href="headers-call-to-action.html#">
                                    <img src="http://bootstrapsale.com/projects/roost/v1-0/img/demo/listing/thumbs/2.jpg" alt=""/>

                                    <span className="property-box-excerpt">
                                        {item.cardText}
                                    </span>
                                </a>
                            </div>

                            <div className="property-box-content">
                                <div className="property-box-meta">
                                    <div className="property-box-meta-item">
                                        <span>Baths</span>
                                        <strong>2</strong>
                                    </div>

                                    <div className="property-box-meta-item">
                                        <span>Beds</span>
                                        <strong>4</strong>
                                    </div>

                                    <div className="property-box-meta-item">
                                        <span>Garages</span>
                                        <strong>1</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="property-box-bottom">
                                <div className="property-box-price">
                                    $ 17,000
                                </div>

                                <a href="headers-call-to-action.html#" className="property-box-view">
                                    View Detail
                                </a>
                            </div>
                        </div>
                    </div>
                    )}
                </div>

                <div className="promotion">
                    <div className="promotion-inner">
                        <div className="promotion-icon">
                            <i className="fa fa-map-marker"></i>
                        </div>

                        <div className="promotion-text">
                            <a href="headers-call-to-action.html#">Download our app</a> and get notifications for new properties in<br />
                            <strong>New York, Brooklyn</strong>
                        </div>
                    </div>
                </div>

                <div className="property-carousel-wrapper">
                    <div className="property-carousel">
                        {this.state.data.map((item,k)=>
                        <div className="property-carousel-item" key={k} >
                            <div className="property-simple">
                                <a href="headers-call-to-action.html#" className="property-simple-image">
                                    <img src="http://bootstrapsale.com/projects/roost/v1-0/img/demo/listing/thumbs/2.jpg" alt=""/>
                                </a>

                                <div className="property-simple-content">
                                    <h2 className="property-simple-title"><a href="headers-call-to-action.html#">Old Leaf Quay</a></h2>

                                    <ul className="property-simple-location">
                                        <li><a href="headers-call-to-action.html#">New York</a>,</li>
                                        <li><a href="headers-call-to-action.html#">Brooklyn</a></li>
                                    </ul>

                                    <div className="property-simple-status">
                                        Price decreased by <strong className="green">-4%</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                <div className="features row">
                    <div className="feature col-sm-12 col-md-4">
                        <h3><i className="fa fa-globe"></i> Front End Submission</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate tellus. Proin eget quam odio. Maecenas nec ultrices urna. Mauris nec tempus libero.</p>
                    </div>

                    <div className="feature col-sm-12 col-md-4">
                        <h3><i className="fa fa-plug"></i> Versatile Header</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate tellus. Proin eget quam odio. Maecenas nec ultrices urna. Mauris nec tempus libero.</p>
                    </div>

                    <div className="feature col-sm-12 col-md-4">
                        <h3><i className="fa fa-bar-chart"></i> Multiple Properties</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vulputate tellus. Proin eget quam odio. Maecenas nec ultrices urna. Mauris nec tempus libero.</p>
                    </div>
                </div>

                <h2 className="page-header">Best Agents</h2>

                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="agent-medium">
                            <a className="agent-medium-image" href="headers-call-to-action.html#">
                                <img src="assets/img/tmp/agents/female.jpg" alt=""/>
                            </a>

                            <div className="agent-medium-content">
                                <h2 className="agent-medium-title">Caelan Sinclair</h2>
                                <div className="agent-medium-subtitle">13 properties</div>
                                <hr/>
                                <ul>
                                    <li><i className="fa fa-phone"></i> 0123 123 123</li>
                                    <li><i className="fa fa-at"></i> <a href="mailto:calean@example.com">calean@example.com</a></li>
                                    <li><i className="fa fa-globe"></i> <a href="http://example.com">example.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="agent-medium">
                            <a className="agent-medium-image" href="headers-call-to-action.html#">
                                <img src="assets/img/tmp/agents/male.jpg" alt=""/>
                            </a>

                            <div className="agent-medium-content">
                                <h2 className="agent-medium-title">Derick Brice</h2>
                                <div className="agent-medium-subtitle">13 properties</div>
                                <hr />
                                <ul>
                                    <li><i className="fa fa-phone"></i> 0123 123 123</li>
                                    <li><i className="fa fa-at"></i> <a href="mailto:calean@example.com">calean@example.com</a></li>
                                    <li><i className="fa fa-globe"></i> <a href="http://example.com">example.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
