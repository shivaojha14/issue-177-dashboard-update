import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import indsacmobilecrm from "../Images/indsac-mobile-crm.gif";
export default function Procurement() {
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
                                <li><Link to="/supplychainmanagement">Supply Chain Management (SCM) <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
    
                                <li className="active">Procurement</li>
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
                                    <h4>Procurement </h4>
                                    <p className="para"> 
                                    The Procurement module automates the process of sourcing and purchasing raw materials, goods, and services from suppliers. It 
                                    manages purchase orders, supplier contracts, and approvals, ensuring that procurement activities are efficient and cost-effective.
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
    
                                <h3>Here are some benefits of Procurement</h3>
                                <div className="row about-about">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="about-grids">
    
                                            <h4>Efficiency</h4>
                                            <p className="para"> Streamlines procurement processes, reducing administrative overhead.
                                            </p><br />
                                            <div className="mt-3 about-list">
    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 about-line-top">
                                        <div className="about-grids">
                                            <h4>Cost Savings</h4>
    
                                            <p className="para">Helps negotiate better terms with suppliers and optimize purchasing decisions.
                                            <br /><br /></p><br />
                                            <div className="mt-3 about-list">
    
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 about-line-top">
                                        <div className="about-grids">
                                            <h4> Improved Supplier Relations</h4>
                                            <p className="para">  Enhances supplier relationships through effective contract management and communication.
                                            </p><br />
                                            <div className="mt-3 about-list">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 about-line-top">
                                        <div className="about-grids">
                                            <h4> Inventory Alignment</h4>
                                            <p className="para"> Aligns purchasing decisions with inventory levels and production needs, minimizing waste.
                                            </p><br />
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
