import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import lead2 from "../Images/lead2.gif";
import lead3 from "../Images/lead3.png";
import lead4 from "../Images/lead4.png";
import lead5 from "../Images/lead5.jpg";
import lead6 from "../Images/Document Management Software.png";
import contractMgmt from '../Images/indsac-task-management.gif'
import purchaseOM from "../Images/inventm.png";
import InventorySFT from '../Images/inventory_management_sft.webp'
import suplyermgmt from '../Images/Inventory-management-system.png'
import { Link } from 'react-router-dom';
import { project_name } from '../Config/config'


export default function ProcurementPage() {
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

            <title> Procurement | Best CRM Software | Indsac Crm :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active"> Procurement </li>
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
                            Procurement
                            </h3>

                        </div>
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={InventorySFT} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">

                                <p class="para"> The Procurement module integrates various functions that are essential for managing purchasing 
                                    activities, supplier relationships, and contracts. It ensures that procurement processes are efficient, transparent, 
                                    and aligned with organizational goals.
                                </p><br />
                                <p class="para">In a sales process, leads from multiple channels enter your lead management system, and the sales-ready leads are converted into deals.</p><br />
                                <p class="para">From lead generation to conversion and analysis, take a look at some of the popular ways that you can find sales success with the {`${project_name}`} lead management system.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-titles-head text-center">

                    <h3 class="header-name">
                        The Procurement Process
                    </h3>
                </div>
            </section>
            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">1: Purchase Order Management  </h3> <br />
                                <p class="para">
                                Purchase Order Management is the central function of the Procurement module. It involves creating, approving, 
                                and tracking purchase orders (POs) for goods and services. This function automates the creation of POs based on
                                 requisitions or MRP suggestions, reducing manual errors and speeding up the procurement cycle. It also provides 
                                 real-time visibility into the status of POs, helping organizations manage their purchasing activities more effectively.
                                  By integrating with Inventory Management and Finance, Purchase Order Management ensures that purchases are aligned with inventory needs and budget constraints.
                                </p>
                            </div>

                            <div class="col-xl-6 cwp4-image ">
                                <img src={purchaseOM} alt="product" class="img-responsive " />
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
                                <img src={suplyermgmt} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">2: Supplier Management</h3> <br />
                                <p class="para">Supplier Management focuses on maintaining and optimizing relationships with suppliers. This function
                                    provides tools for evaluating supplier performance, managing supplier contracts, and tracking communication with 
                                    suppliers. It helps in identifying reliable suppliers, negotiating better terms, and ensuring that suppliers meet 
                                    quality and delivery standards. Supplier Management also supports supplier onboarding and 
                                    qualification processes, ensuring that all suppliers comply with organizational requirements and regulations.
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
                                <h3 class="header-name">3: Contract Management </h3> <br />
                                <p class="para"> Contract Management is responsible for creating, managing, and monitoring procurement contracts. 
                                    This function helps organizations establish clear terms and conditions with suppliers, including pricing, delivery 
                                    schedules, and payment terms. It ensures that contracts are compliant with legal and regulatory requirements and 
                                    that all parties adhere to the agreed terms. Contract Management also provides tools for tracking contract performance, 
                                    managing renewals, and addressing any contract-related issues, helping organizations mitigate risks and avoid disputes.
                                </p>
                            </div>
                            <div class="col-xl-6 cwp4-image ">
                                <img src={contractMgmt} alt="product" class="img-responsive " />
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
                                <h3 class="header-name">4: Sourcing and Tendering</h3> <br />
                                <p class="para">Sourcing and Tendering involve the process of identifying and selecting suppliers through 
                                    competitive bidding. This function provides tools for managing requests for proposals (RFPs), requests
                                     for quotations (RFQs), and tenders. It helps in comparing supplier bids, evaluating proposals, and selecting 
                                     the most suitable supplier based on criteria such as price, quality, and delivery time. Sourcing and Tendering 
                                     ensure that procurement decisions are made transparently and that the organization gets the best value for its 
                                     purchases. This function also supports strategic sourcing initiatives, helping organizations build a more resilient
                                      and cost-effective supply chain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
