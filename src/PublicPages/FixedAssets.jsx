import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import indsacmobilecrm from "../Images/indsac-mobile-crm.gif";

export default function FixedAssets() {
  return (
    <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Mobile CRM can be defined as a CRM platform that has been specifically designed for mobile devices and tablets" />
            <meta property="og:title" content="Mobile CRM" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/digitalmobile.jsp" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/indsac-mobile-crm.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/indsac-mobile-crm.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Mobile CRM can be defined as a CRM platform that has been specifically designed for mobile devices and tablets" />
            <meta property="og:locale" content="en_US" />
            <title>Mobile CRM | Digital & Mobile :: indsaccrm.com</title>

            <script type="application/ld+json">
                `{`"@context":"https://schema.org","@type":"WebPage","name":"Mobile CRM",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/digitalmobile"`}`
            </script>


            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li><Link to="/financeandaccounting">Finance and Account <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>

                            <li className="active">Fixed Assets</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section className="w3l-content-with-photo-4">
                <div className="content-with-photo4-block">
                    <div className="container">
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={indsacmobilecrm} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">
                                <h4>Fixed Assets </h4>
                                <p className="para"> The Fixed Assets module manages the lifecycle of the company’s fixed assets,
                                     such as property, equipment, and vehicles. It tracks asset acquisition, depreciation, revaluation,
                                      and disposal. This module helps in accurately calculating depreciation, maintaining asset registers,
                                       and ensuring compliance with tax regulations related to asset management. 
                                    It also aids in forecasting asset-related expenses and planning for asset replacement
                                </p>
                                <div className="jst-two-coloums mt-4">
                                    <div className="icon-text">
                                        <h5> <a href="#" ></a>
                                        </h5>
                                        <p className="para">Flexibility is an essential requirement for most professionals today due to the
                                            diverse working conditions, including remote working, work from home, and more. </p>
                                    </div>
                                    <div className="icon-text mt-lx-3 pt-lx-1">
                                        <h5 ><a href="#" ></a>
                                        </h5>
                                        <p className="para">With the help of mobile CRM, employees can have access to important data irrespective of their location.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-recent-work-hobbies">
                <div className="recent-work ">
                    <div className="container">
                        <div className="left-text">

                            <h3>Fixed Assets Benefits for Employees</h3>
                            <div className="row about-about">
                                <div className="col-lg-4 col-md-6">
                                    <div className="about-grids">

                                        <h4>Accurate Depreciation Tracking</h4>
                                        <p className="para">  Automates the calculation of depreciation, ensuring that asset values are recorded accurately over time.</p><br />
                                        <div className="mt-3 about-list">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 about-line-top">
                                    <div className="about-grids">
                                        <h4>Asset Lifecycle Management</h4>

                                        <p className="para">Manages the entire lifecycle of assets, from acquisition to disposal, ensuring optimal utilization and timely replacement.
                                        <br /><br /></p><br />
                                        <div className="mt-3 about-list">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 about-line-top">
                                    <div className="about-grids">
                                        <h4> Regulatory Compliance</h4>
                                        <p className="para"> Ensures that asset management complies with tax regulations and financial reporting standards </p><br />
                                        <div className="mt-3 about-list">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />

                        </div>
                    </div>

                </div>
            </section>


            <Footer />
        </>
  )
}
