import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Navigation from '../Navigation/Navigation';
import Jumbotron from '../Jumbotron/index';
import Content from '../Content/index';

class Layout extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
        <div className="page-wrapper" >
            <div className="header header-standard header-call-to-action-wrapper">
                <div className="relative">
                    <div className="blur header-background overflow-hidden"></div>

                    <div className="header-background-inner">

                        <div className="container">
                            
                            <Navigation />

                            <Jumbotron />

                        </div>
                    </div>
                </div>
            </div>
            <div className="main" >
                   {/* <div className="" style={{paddingTop: '25px'}} >
                        <div className="col-md-9">
                            <div className="widget-title">
                                <h2>Best Properties</h2>
                            </div>
                            {this.state.data.map((item, k)=>
                            <div className="col-md-4" key={k} style={{marginTop: '15px'}} >
                                <Card>    
                                    <CardMedia
                                      overlay={<CardTitle title="Overlay title"/>}
                                    >
                                      <img src="http://bootstrapsale.com/projects/roost/v1-0/img/demo/listing/thumbs/2.jpg" alt="" />
                                    </CardMedia>
                                    <CardTitle title="Card title" />
                                    <CardText>
                                        {item.cardText}          
                                    </CardText>
                                    <CardActions>
                                      <FlatButton label="Action1" />
                                      <FlatButton label="Action2" />
                                    </CardActions>
                                </Card>
                            </div>
                            )}
                        </div>
                    </div> */}
                    <div className="container">
                        
                        <div className="row">
                            
                            <Content />

                            <div className="sidebar col-sm-4 col-md-3">
                                <div className="widget">
                                    <div className="widget-title">
                                        <h2>Best Agents</h2>
                                    </div>

                                    <div className="widget-content">
                                    <div className="agent-small">
                                        <div className="agent-small-inner">
                                            <div className="agent-small-image">
                                                <a href="headers-call-to-action.html#" className="agent-small-image-inner">
                                                    <img src="assets/img/tmp/agents/female.jpg" alt=""/>
                                                </a>
                                            </div>

                                            <div className="agent-small-content">
                                                <h3 className="agent-small-title">
                                                    <a href="headers-call-to-action.html#">Caelan Sinclair</a>
                                                </h3>

                                                <div className="agent-small-email">
                                                    <i className="fa fa-at"></i> <a href="headers-call-to-action.html#">E-mail Address</a>
                                                </div>

                                                <div className="agent-small-phone">
                                                    <i className="fa fa-phone"></i> 1401-123-456
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="agent-small">
                                        <div className="agent-small-inner">
                                            <div className="agent-small-image">
                                                <a href="headers-call-to-action.html#" className="agent-small-image-inner">
                                                    <img src="assets/img/tmp/agents/male.jpg" alt=""/>
                                                </a>
                                            </div>

                                            <div className="agent-small-content">
                                                <h3 className="agent-small-title">
                                                    <a href="headers-call-to-action.html#">Lee Izzy</a>
                                                </h3>

                                                <div className="agent-small-email">
                                                    <i className="fa fa-at"></i> <a href="headers-call-to-action.html#">E-mail Address</a>
                                                </div>

                                                <div className="agent-small-phone">
                                                    <i className="fa fa-phone"></i> 1401-456-789
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="agent-small">
                                        <div className="agent-small-inner">
                                            <div className="agent-small-image">
                                                <a href="headers-call-to-action.html#" className="agent-small-image-inner">
                                                    <img src="assets/img/tmp/agents/male.jpg" alt=""/>
                                                </a>
                                            </div>

                                            <div className="agent-small-content">
                                                <h3 className="agent-small-title">
                                                    <a href="headers-call-to-action.html#">Derick Brice</a>
                                                </h3>

                                                <div className="agent-small-email">
                                                    <i className="fa fa-at"></i> <a href="headers-call-to-action.html#">E-mail Address</a>
                                                </div>

                                                <div className="agent-small-phone">
                                                    <i className="fa fa-phone"></i> 1401-789-123
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="widget widget-primary">
                                    <div className="widget-content">
                                        <form method="post" action="http://html.realsite.byaviators.com/headers-call-to-action.html?">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="E-mail address here"/>
                                            </div>

                                            <button className="btn btn-simple pull-right">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget">
                                    <div className="widget-title">
                                        <h2>Custom Menu</h2>
                                    </div>

                                    <div className="widget-content">
                                        <ul className="menu">
                                            <li><a href="headers-call-to-action.html#">Properties</a></li>
                                            <li><a href="headers-call-to-action.html#">Features</a></li>
                                            <li><a href="headers-call-to-action.html#">Agents</a></li>
                                            <li><a href="headers-call-to-action.html#">Blog</a></li>
                                            <li><a href="headers-call-to-action.html#">Agencies</a></li>
                                            <li><a href="headers-call-to-action.html#">Pricing</a></li>
                                            <li><a href="headers-call-to-action.html#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="widget widget-simple">
                                    <div className="widget-title">
                                        <h2>Recent Properties</h2>
                                    </div>

                                    <div className="widget-content">
                                        <div className="property-small">
                                            <div className="property-small-inner">
                                                <div className="property-small-image">
                                                    <a href="headers-call-to-action.html#" className="property-small-image-inner">
                                                        <img src="assets/img/tmp/medium/3.jpg" alt=""/>
                                                    </a>
                                                </div>

                                                <div className="property-small-content">
                                                    <h3 className="property-small-title">
                                                        <a href="headers-call-to-action.html#">Road Drive 735</a>
                                                    </h3>

                                                    <ul className="property-small-location">
                                                        <li><a href="headers-call-to-action.html#">New York</a>,</li>
                                                        <li><a href="headers-call-to-action.html#">Brooklyn</a></li>
                                                    </ul>

                                                    <div className="property-small-price">
                                                        $ 17,000
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="property-small">
                                            <div className="property-small-inner">
                                                <div className="property-small-image">
                                                    <a href="headers-call-to-action.html#" className="property-small-image-inner">
                                                        <img src="assets/img/tmp/medium/4.jpg" alt=""/>
                                                    </a>
                                                </div>

                                                <div className="property-small-content">
                                                    <h3 className="property-small-title">
                                                        <a href="headers-call-to-action.html#">5th. Hilton Ride </a>
                                                    </h3>

                                                    <ul className="property-small-location">
                                                        <li><a href="headers-call-to-action.html#">New York</a>,</li>
                                                        <li><a href="headers-call-to-action.html#">Harlem</a></li>
                                                    </ul>

                                                    <div className="property-small-price">
                                                        $ 32,500
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="property-small">
                                            <div className="property-small-inner">
                                                <div className="property-small-image">
                                                    <a href="headers-call-to-action.html#" className="property-small-image-inner">
                                                        <img src="assets/img/tmp/medium/5.jpg" alt=""/>
                                                    </a>
                                                </div>

                                                <div className="property-small-content">
                                                    <h3 className="property-small-title">
                                                        <a href="headers-call-to-action.html#">Andersson Street</a>
                                                    </h3>

                                                    <ul className="property-small-location">
                                                        <li><a href="headers-call-to-action.html#">New York</a>,</li>
                                                        <li><a href="headers-call-to-action.html#">Manhattan</a></li>
                                                    </ul>

                                                    <div className="property-small-price">
                                                        $ 10,000
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
            <div id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-top-inner">
                            <nav>
                                <ul className="nav nav-pills">
                                    <li><a href="headers-call-to-action.html#">Home</a></li>
                                    <li><a href="headers-call-to-action.html#">Properties</a></li>
                                    <li><a href="headers-call-to-action.html#">Agencies</a></li>
                                    <li><a href="headers-call-to-action.html#">Agents</a></li>
                                    <li><a href="headers-call-to-action.html#">Pricing</a></li>
                                    <li><a href="headers-call-to-action.html#">Blog</a></li>
                                    <li><a href="headers-call-to-action.html#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-inner">
                            <div className="footer-bottom-left">
                                &copy; 2017 Bizaffix. All rights reserved.
                            </div>

                            <div className="footer-bottom-right">
                                Created by <a href="http://www.github.com/kamran1122" target="_blank" >Kamran Nazir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        );
    }
}

export default Layout;
