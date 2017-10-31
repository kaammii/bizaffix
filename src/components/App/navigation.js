import React, { Component, PropTypes } from 'react';
import SearchBar from 'material-ui-search-bar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Paper} from 'material-ui';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state ={
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
        <div className="page-wrapper" >
            <div className="header header-standard header-call-to-action-wrapper">
                <div className="relative">
                    <div className="blur header-background overflow-hidden"></div>

                    <div className="header-background-inner">

                        <div className="container">
                            <div className=""  style={{marginTop: '2%'}}>
                                <div className="header-main">
                                    <div className="header-title">
                                        <a href="index.html">
                                            <img src="assets/img/logo.png" alt="Realsite"/>

                                            <span>Bizaffix</span>
                                        </a>
                                    </div>

                                    <div className="header-navigation">
                                        <div className="nav-main-wrapper">
                                            <div className="nav-main-title visible-xs">
                                                <a href="index.html">
                                                    <img src="assets/img/logo-blue.png" alt="Realsite" />
                                                    Bizaffix
                                                </a>
                                            </div>
                                            
                                            <div className="nav-main-inner">
                                                <nav>
                                                    <ul id="nav-main" className="nav nav-pills">
                                                        <li className="has-children ">
                                                            <a href="headers-call-to-action.html#">Properties <i className="fa fa-caret-down"></i></a>

                                                            <div>
                                                                <a href="headers-call-to-action.html#">Properties <i className="fa fa-caret-down"></i></a>

                                                                <ul className="sub-menu">
                                                                    <li><a href="properties-detail.html">Detail Page</a></li>
                                                                    <li><a href="properties-row.html">Row Display</a></li>
                                                                    <li><a href="properties-grid.html">Grid</a></li>
                                                                    <li><a href="properties-table.html">Table Listing</a></li>
                                                                    <li><a href="properties-medium.html">Medium Size</a></li>
                                                                    <li><a href="properties-medium-gallery.html">Medium Size + Gallery</a></li>
                                                                    <li><a href="properties-large.html">Large Images</a></li>
                                                                    <li><a href="properties-simple.html">Simple Version</a></li>
                                                                    <li><a href="properties-isotope.html">Isotope</a></li>
                                                                    <li><a href="properties-submit.html">Submit Property</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="has-children ">
                                                            <a href="headers-call-to-action.html#">Agents <i className="fa fa-caret-down"></i></a>

                                                            <div>
                                                                <a href="headers-call-to-action.html#">Agents <i className="fa fa-caret-down"></i></a>

                                                                <ul className="sub-menu">
                                                                    <li><a className="subtitle">Agent</a></li>
                                                                    <li><a href="agents-detail.html">Detail</a></li>
                                                                    <li><a href="agents-row.html">Listing Row</a></li>
                                                                    <li><a href="agents-large.html">Listing Large</a></li>
                                                                    <li><a href="agents-medium.html">Listing Medium</a></li>
                                                                    <li><a className="subtitle">Agency</a></li>
                                                                    <li><a href="agencies-detail.html">Detail</a></li>
                                                                    <li><a href="agencies-row.html">Listing Row</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="has-children  active ">
                                                            <a href="headers-call-to-action.html#">Variants <i className="fa fa-caret-down"></i></a>

                                                            <div>
                                                                <a href="headers-call-to-action.html#">Variants <i className="fa fa-caret-down"></i></a>

                                                                <ul className="sub-menu">
                                                                    <li className="has-children">
                                                                        <a href="headers-call-to-action.html#">Headers</a>

                                                                        <div>
                                                                            <ul className="sub-menu">
                                                                                <li><a href="headers-google-map.html">Google Map</a></li>
                                                                                <li><a href="headers-search.html">Search Propety</a></li>
                                                                                <li><a href="headers-chart.html">NVD3 Chart</a></li>
                                                                                <li><a href="headers-call-to-action.html">Call to Action</a></li>
                                                                                <li><a href="headers-static-image.html">Static Image</a></li>
                                                                                <li><a href="headers-simple.html">Simple &amp; Minimal</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>

                                                                    <li className="has-children">
                                                                        <a href="headers-call-to-action.html#">Footers</a>

                                                                        <div>
                                                                            <ul className="sub-menu">
                                                                                <li><a href="footers-minimal.html#footer">Minimal</a></li>
                                                                                <li><a href="footers-navigation.html#footer">Navigation</a></li>
                                                                                <li><a href="footers-simple.html#footer">Simple</a></li>
                                                                                <li><a href="footers-4-columns.html#footer">4 Columns</a></li>
                                                                                <li><a href="footers-3-columns.html#footer">3 Columns</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="has-children ">
                                                            <a href="headers-call-to-action.html#">Pages <i className="fa fa-caret-down"></i></a>

                                                            <div>
                                                                <a href="headers-call-to-action.html#">Pages <i className="fa fa-caret-down"></i></a>

                                                                <ul className="sub-menu">
                                                                    <li><a href="pages-grid.html">Grid System</a></li>
                                                                    <li><a href="contact.html">Contact</a></li>
                                                                    <li><a href="pages-faq.html">FAQ</a></li>
                                                                    <li><a href="pages-ad-spaces.html">Ad Spaces</a></li>
                                                                    <li><a href="pages-notifications.html">Notifications</a></li>
                                                                    <li><a href="pages-pricing.html">Pricing</a></li>
                                                                    <li><a href="pages-login.html">Login Form</a></li>
                                                                    <li><a href="pages-register.html">Register Form</a></li>
                                                                    <li><a href="pages-invoice.html">Invoice Template</a></li>
                                                                    <li><a href="pages-change-password.html">Change Password</a></li>
                                                                    <li><a href="pages-terms-and-conditions.html">Terms &amp; Conditions</a></li>
                                                                    <li><a href="pages-styles.html">Page Styles</a></li>
                                                                    <li><a href="pages-features.html">Features</a></li>
                                                                    <li><a href="pages-404.html">404 - Not Found</a></li>
                                                                    <li><a href="pages-500.html">500 - Internal Error</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="has-children ">
                                                            <a href="headers-call-to-action.html#">Blog <i className="fa fa-caret-down"></i></a>

                                                            <div>
                                                                <a href="headers-call-to-action.html#">Blog <i className="fa fa-caret-down"></i></a>

                                                                <ul className="sub-menu">
                                                                    <li><a href="blog-index.html">Listing Right Sidebar</a></li>
                                                                    <li><a href="blog-index-left.html">Listing Left Sidebar</a></li>
                                                                    <li><a href="blog-detail.html">Detail Page</a></li>
                                                                </ul>
                                                            </div>
                                                        </li>

                                                        <li className="important">
                                                            <a href="admin-login.html">Admin</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>

                                        <button type="button" className="navbar-toggle">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="header-call-to-action">
                                <h1>Bizaffix Material Design Template</h1>
                                <SearchBar
                                  onChange={() => console.log('onChange')}
                                  onRequestSearch={() => console.log('onRequestSearch')}
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
                                    <div className="property-carousel-item">
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

export default Navigation;
