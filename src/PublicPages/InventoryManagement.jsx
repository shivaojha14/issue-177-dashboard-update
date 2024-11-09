import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import inventory1 from "../Images/inventory1.jpg";
import { Link } from 'react-router-dom';

export default function Inventory() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Inventory management system controls and tracks a company's inventory levels, orders, sales, and deliveries. It helps in identifying the right amount of stock to order" />
            <meta property="og:title" content="Inventory Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/inventorymanagement" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/inventory1.jpg" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/inventory1.jpg" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Inventory management system controls and tracks a company's inventory levels, orders, sales, and deliveries. It helps in identifying the right amount of stock to order" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Inventory Management",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/inventorymanagement"`}`
            </script>

            <title>Inventory Management | Inventory Management :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active">Inventory Management</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- breadcrumbs //--> */}
            <section class="w3l-content-with-photo-4">
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={inventory1} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4> Inventory Management</h4>
                                <p class="para"> Inventory management system controls and tracks a company's inventory levels, orders, sales, and deliveries.
                                    It helps in identifying the right amount of stock to order. </p>
                            </div>
                            <div class="jst-two-coloums mt-4">
                                <div class="icon-text">
                                    <h5> <a href="#" ></a>
                                    </h5>
                                    <p class="para"> The inventory management system is confined to managing the critical back-end
                                        business operations such as billing and shipping details, purchase history, accounting
                                        information, financial data, and supply chain management details whereas the CRM software
                                        deals with the front end business operations such as recording the customer details and
                                        customer interactions with the company, tracking of sales, managing the sales pipeline, as
                                        well as creating the marketing campaigns.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>Why CRM Integrate with Inventory Management System</h3>
                            <p class="para">If your business manages inventory data as well as customer information on two different systems.
                                Is it becoming difficult for your team to access the important inventory information in real-time? Are your
                                billing operations and status orders getting delayed due to inaccurate inventory data? Do you miss valuable
                                customers because of your poor customer service?</p><br /><br />
                            <p class="para">Then, it's high time to integrate the inventory management system with existing
                                CRM software. Earlier, businesses used to handle inventory management as well as CRM software
                                as two separate systems.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>Indsac Inventory Management</h3>
                            <div class="row about-about">
                                <div class="col-lg-4 col-md-6">
                                    <div class="about-grids">

                                        <h4>Request and track online payments</h4>
                                        <p class="para">Send online payment requests to customers, which after being paid, reflect against their outstanding
                                            invoices in the Indsac payments module. Quotes and invoices can also be seen by customers by logging into the private
                                            customer portal.</p><br />
                                        <div class="mt-3 about-list">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 about-line-top">
                                    <div class="about-grids">
                                        <h4>Manage all orders from one location</h4>

                                        <p class="para">With business the way it is today, speed is everything. With Indsac Inventory, you or your team can create,
                                            modify, and track the status of sales orders directly from inside the app and associate those orders with your
                                            products or services.</p><br />
                                        <div class="mt-3 about-list">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 about-line-top">
                                    <div class="about-grids">
                                        <h4> Manage Products, Services, And Vendors</h4>
                                        <p class="para">Indsac inventory management system captures all information about products and services, including serial
                                            numbers, pictures, descriptions, prices, stock numbers, and more. Link those to vendors for quick purchase order
                                            creation when stock is low.</p><br />
                                        <div class="mt-3 about-list">
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
