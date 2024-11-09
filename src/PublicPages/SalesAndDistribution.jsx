import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import lead2 from "../Images/salesmg.png";
import lead3 from "../Images/sa5.png";
import lead4 from "../Images/sfgif.gif";
import lead5 from "../Images/opm3.png";
import lead6 from "../Images/sg1.gif";
import lead7 from "../Images/final-e-commerce-management-0.jpeg";
import { Link } from 'react-router-dom';
import { project_name } from '../Config/config'


export default function SalesAndDistribution() {
    return (
        <>

            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Lead management is a systematic process in which incoming leads are qualified, analyzed, and nurtured so that they can be converted into new business opportunities" />
            <meta property="og:title" content="Lead Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/lead" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/lead4.png" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/lead4.png" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Lead management is a systematic process in which incoming leads are qualified, analyzed, and nurtured so that they can be converted into new business opportunities" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Lead Management",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/lead"`}`
        </script>

            <title>Sales and Distribution | Best ERP Software | Indsac Crm :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active">Sales and Distribution </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="main-titles-head text-center">
                            <h3 class="header-name">
                            Sales and Distribution
                            </h3>

                        </div>
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead2} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">

                                <p class="para"> The Sales and Distribution module is designed to handle the complexities of sales transactions and distribution logistics. It provides tools to manage customer orders, pricing, distribution, and returns efficiently.
                                </p><br />
                                <p class="para">In a sales process, leads from multiple channels enter your lead management system, and the sales-ready leads are converted into deals.</p><br />
                                <p class="para">From lead generation to conversion and analysis, take a look at some of the popular ways that you can find sales success with the {`${project_name}`} lead management system.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-titles-head text-center">

                    <h3 class="header-name">
                        The Sales And Distribution Process
                    </h3>
                </div>
            </section>
            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">1: Sales Order Processing  </h3> <br />
                                <p class="para">
                                Sales Order Processing is the backbone of the Sales and Distribution module. It involves the entry, tracking, and 
                                management of customer orders from the initial quote to final delivery. This function automates the order entry process, reducing 
                                manual errors and speeding up the order cycle. It also provides real-time visibility into order status, inventory levels, and 
                                customer history, ensuring that orders are processed accurately and efficiently. Integration with Inventory Management 
                                and Production Planning ensures that orders can be fulfilled without delays.
                                </p>
                            </div>

                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead3} alt="product" class="img-responsive " />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead4} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">2: Pricing Management</h3> <br />
                                <p class="para">Pricing Management allows businesses to manage and adjust prices based on various factors 
                                    such as market demand, customer segments, and promotional campaigns. This function provides tools for 
                                    setting up pricing rules, discounts, and special offers, ensuring that pricing strategies are aligned 
                                    with business goals. It also supports dynamic pricing models, enabling organizations to respond quickly 
                                    to market changes. By integrating with the Sales Order Processing function, Pricing Management ensures 
                                    that customers are charged accurately and consistently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">3: Distribution Management </h3> <br />
                                <p class="para"> Distribution Management focuses on the efficient movement of products from warehouses to 
                                    customers or retail outlets. This function helps in planning and optimizing distribution routes, managing 
                                    shipping schedules, and coordinating with logistics providers. It ensures that products are delivered on 
                                    time and in the right condition, reducing transportation costs and improving customer satisfaction. Distribution 
                                    Management also integrates with Warehouse Management to ensure that inventory is picked, packed, and shipped 
                                    efficiently.
                                </p>
                            </div>
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead5} alt="product" class="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead6} alt="product" class="img-responsive "/>
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">4: Customer Order Management</h3> <br />
                                <p class="para">Customer Order Management provides a comprehensive view of all customer orders, from 
                                    initial inquiry to final delivery. This function helps in managing order workflows, tracking order 
                                    status, and communicating with customers about their orders. It ensures that orders are fulfilled 
                                    according to customer expectations and contractual agreements. Customer Order Management also supports 
                                    order modifications, cancellations, and tracking, providing customers with real-time updates on their 
                                    order status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">5: Returns Management</h3> <br />
                                <p class="para">Returns Management handles the processing of returned products, whether due to defects, 
                                    customer dissatisfaction, or other reasons. This function provides tools for managing return requests, 
                                    issuing refunds or replacements, and tracking returned inventory. It helps in analyzing return patterns, 
                                    identifying the root causes of returns, and implementing corrective actions to reduce return rates. By 
                                    integrating with Inventory Management and Customer Service, Returns Management ensures that returns are 
                                    handled efficiently and that customer satisfaction is maintained.
                                </p>
                            </div>
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead7}alt="product" class="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
