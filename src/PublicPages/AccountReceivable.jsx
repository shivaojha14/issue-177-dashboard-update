import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import indsacmobilecrm from "../Images/indsac-mobile-crm.gif";
import { project_name } from '../Config/config';

export default function AccountReceivable() {
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
    <title>Finance and Account| Account Receivable :: indsaccrm.com</title>

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
                <li><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>                        
                <li><Link to="/financeandaccounting">Finance and Account <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                <li className="active">Account Receivable</li>
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
                        <h4>Account Receivable (AR) </h4>
                        <p className="para">  The Accounts Receivable module handles the money owed to the company by its customers. 
                            It tracks customer invoices, ensures timely collection of payments, and manages customer credit limits. 
                            The AR module is crucial for maintaining cash flow and providing insights into customer payment behaviors.
                             It includes features for generating invoices, aging analysis, and handling disputes or discrepancies in payments.</p>
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
                                <p className="para">With the help of mobile ERP, employees can have access to important data irrespective of their location.</p>
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
                
                    <h3>Here are some benefits of Accounts Receivable</h3>
                    <div className="row about-about">
                        <div className="col-lg-4 col-md-6">
                            <div className="about-grids">

                                <h4>Improved Cash Flow</h4>
                                <p className="para">  Ensures timely collection of payments from customers,
                                     which is essential for maintaining a healthy cash flow.</p><br />
                                <div className="mt-3 about-list">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 about-line-top">
                            <div className="about-grids">
                                <h4>Credit Management </h4>

                                <p className="para"> Tracks customer credit limits and payment behaviours, helping to manage credit risk effectively.
                                <br /><br /></p><br />
                                <div className="mt-3 about-list">

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 about-line-top">
                            <div className="about-grids">
                                <h4>Dispute Resolution </h4>
                                <p className="para">  Provides tools for handling payment disputes and discrepancies, ensuring accurate and fair resolutions.
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
