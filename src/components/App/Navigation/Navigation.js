import React, { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }
}

export default Navigation;
