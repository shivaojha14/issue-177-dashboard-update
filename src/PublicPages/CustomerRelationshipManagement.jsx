import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import sagif from "../Images/sagif.gif";
import sa1 from "../Images/sales-automation.jpg";
import sa3 from "../Images/cst.jpg";
import sa6 from "../Images/digitalmarketing.jpg";
import sa5 from "../Images/con1.jpg";
import sa8 from "../Images/sa8.png";
import sa4 from "../Images/lead5.jpg";
import sfgif from "../Images/CRMImage.jpg";

export default function CustomerRelationshipManagement() {
    return (
        <>
          {/* <!-- Required meta tags --> */}
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Sales forecasting predicts what your sales pipeline may look like in the future. By using an INDSAC-  with sales forecast services, sales teams can fine-tune their selling strategy"/>
        <meta property="og:title" content="Sales Forecasting"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="https://indsaccrm.com/salesforecasting"/>
        <meta property="og:image" content="https://www.indsaccrm.com/static/media/sfgif.gif"/>
        <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/sfgif.gif"/>
        <meta property="og:site_name" content="indsaccrm.com"/>
        <meta property="og:description" content="Sales forecasting predicts what your sales pipeline may look like in the future. By using an INDSAC-  with sales forecast services, sales teams can fine-tune their selling strategy"/>
        <meta property="og:locale" content="en_US" />
    
            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Sales Forecasting",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://indsaccrm.com/salesforecasting"`}`
            </script>
    
        <title>Customer Relationship Management (CRM) | Best  Software | Indsac Crm :: indsaccrm.com</title>
        <Navbar/>
    
        {/* <!-- breadcrumbs --> */}
        <section className="w3l-inner-banner-main">
            <div className="about-inner inner2">
                <div className="container seen-w3">
                    <ul className="breadcrumbs-custom-path">
                        <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                        <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                         <li className="active">Customer Relationship Management (CRM)</li>
                    </ul>
                </div>
            </div>
        </section>
    {/* <!-- breadcrumbs //--> */}
    <section className="w3l-content-with-photo-4">
        <div className="content-with-photo4-block">
            <div className="container">
                  <div className="main-titles-head text-center">
                    <h3 className="header-name">
                    Customer Relationship Management (CRM)
                    </h3> 
    
                </div>
                <div className="cwp4-two row">
                <div className="col-xl-6 cwp4-image ">
                    <img src={sfgif} alt="product" className="img-responsive "/>
                </div>
                    <div className="cwp4-text col-xl-6">
                      
                        <p className="para"> The CRM module in an ERP system is designed to manage and analyze customer interactions throughout
                             the customer lifecycle. It integrates various functions that are essential for acquiring, retaining, and 
                             nurturing customer relationships.

                        </p><br/>
                       <p className="para">  By using an INDSAC with sales forecast services, sales teams can fine-tune their selling strategy. </p><br/>
                           <p className="para">Sales reps can see how they're tracking against their quotas at any given moment, while sales managers can make more informed business decisions on how to manage their resources.</p><br/>
                         <p className="para"> Then, you can eventually use it to shape your forecast. <br/>
                             When you do, you may notice the accuracy of your predictions goes up.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="w3l-features-4">
                <div className="features4-block">
                    <div className="container">
                        <div className="main-titles-head text-center">

                            <h3 className="header-name">
                                Focus on the Customer Relationship Management (CRM) for Faster Growth
                            </h3>
                        </div>
                        <div className="features-effect row text-center">


                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/salesforceautomation"><img className="img-responsive" src={sa1} alt=" " /></Link>
                                    <h4><Link to="/salesforceautomation" className="title-head">Sales Force Automation</Link></h4>
                                    <p className="para">Sales Force Automation (SFA) is a key component of the CRM module that automates the sales process, from lead generation to order fulfillment. This module 
                                        provides tools for managing sales pipelines, tracking sales activities, and forecasting sales revenue.
                                    </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/customerservicemanagement"><img className="img-responsive" src={sa3}alt=" " /></Link>
                                    <h4><Link to="/customerservicemanagement" className="title-head">Customer Service Management</Link></h4>
                                    <p className="para">Customer Service Management focuses on delivering exceptional customer support by 
                                        managing service requests, incidents, and customer inquiries. This module provides tools for creating and
                                         tracking support tickets, managing service-level agreements (SLAs), and resolving customer issues promptly.
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/marketingautomation"><img className="img-responsive" src={sa6} alt=" " /></Link><br />
                                    <h4><Link to="/marketingautomation" className="title-head">Marketing Automation </Link></h4><br />
                                    <p className="para">Marketing Automation streamlines marketing processes by automating tasks such as
                                         campaign management, email marketing, and lead nurturing. This module helps organizations design,
                                         execute, and track marketing campaigns across multiple channels, including email, social media, and web.

                                    </p>
                                </div>
                            </div>


                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/contactmanagement"><img className="img-responsive" src={sa5}alt=" " /></Link>
                                    <h4><Link to="/contactmanagement" className="title-head"> Contact Management</Link></h4><br />
                                    <p className="para">SContact Management is a core function of the CRM module that centralizes all customer information in one place.
                                         It stores details such as contact information, communication history, and customer preferences.
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/leadandopportunitymanagement"><img className="img-responsive" src={sa4} alt=" " /></Link>
                                    <h4><Link to="/leadandopportunitymanagement" className="title-head">Lead and Opportunity Management</Link></h4>
                                    <p className="para">Lead and Opportunity Management focuses on capturing, tracking, and managing leads throughout the sales funnel. This module provides 
                                        tools for qualifying leads, assigning them to sales representatives, and tracking their progress through the sales pipeline.
                                    </p>
                                </div>
                            </div>

                        
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
      )
}
