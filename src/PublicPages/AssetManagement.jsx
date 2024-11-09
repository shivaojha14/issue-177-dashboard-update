import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import lead2 from "../Images/opp1.gif";
import lead3 from "../Images/lead3.png";
import lead4 from "../Images/lead4.png";
import lead5 from "../Images/lead5.jpg";
import lead6 from "../Images/lead6.jpg";
import lead7 from "../Images/lead7.jpg";
import { Link } from 'react-router-dom';
import { project_name } from '../Config/config';

export default function AssetManagement() {
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

            <title>Asset Management | Best ERP Software | {`${project_name}`} :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active">Asset Management </li>
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
                                Asset Management
                            </h3>

                        </div>
                        <div class="cwp4-two row">
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead2} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">

                                <p class="para"> Asset Management in an ERP system helps businesses efficiently manage, track, and maintain their physical and digital assets throughout their lifecycle. Proper asset management ensures that organizations can maximize the value of their assets, minimize downtime, and reduce costs associated with maintenance and replacement. Whether dealing with machinery, equipment, or IT infrastructure, a robust Asset Management module plays a crucial role in maintaining operational efficiency and ensuring long-term asset sustainability.</p><br />
                                <p class="para">Effective Asset Management involves not only keeping track of the assets but also optimizing their use, ensuring timely maintenance, and extending their lifespan. By integrating this module into your ERP system, you gain better visibility into asset performance, usage, and costs, enabling smarter decision-making and better resource allocation.</p><br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-content-with-photo-4">
            <h3 class="header-name">Asset Management Strategies</h3>
                <div class="content-with-photo4-block">
                    <div class="container">
                        <div class="cwp4-two row">
                            <div class="cwp4-text col-xl-6">
                                <h3 class="header-name">1: Asset Lifecycle Management</h3> <br />
                                <p class="para">
                                Asset Lifecycle Management involves managing assets from acquisition through to disposal. This includes tracking asset acquisition costs, depreciation, maintenance schedules, and eventual decommissioning or replacement. Proper lifecycle management ensures that businesses get the most value out of their assets, avoid unexpected downtime, and make informed decisions on repairs versus replacements. By maintaining detailed records of each asset's lifecycle, businesses can plan for future investments and optimize asset utilization.
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
                                <h3 class="header-name">2: Asset Tracking </h3> <br />
                                <p class="para">Asset Tracking helps businesses monitor the location, condition, and status of their assets in real-time. This function ensures that assets are used where needed, preventing losses or theft, and enhancing accountability. By integrating with other ERP functions such as Inventory Management and Maintenance, Asset Tracking ensures that businesses have a clear view of where their assets are and how they are being utilized. This real-time data also helps in forecasting asset needs and managing resource allocation more efficiently.</p>
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
                                <h3 class="header-name">3: Maintenance Management </h3> <br />
                                <p class="para">Maintenance Management focuses on scheduling and managing maintenance tasks to keep assets in optimal working condition. This includes preventive maintenance, repairs, and inspections, which are essential for minimizing equipment downtime and extending asset lifespans. Proper maintenance management reduces the risk of unexpected breakdowns, improves safety, and ensures compliance with industry standards. By tracking maintenance history and upcoming service needs, businesses can avoid costly repairs and extend the longevity of their assets.</p>
                            </div>
                            <div class="col-xl-6 cwp4-image ">
                                <img src={lead5} alt="product" class="img-responsive " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
