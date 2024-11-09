import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import sagif from "../Images/mv-gif1.gif";
import sa1 from "../Images/h2.png";
import sa3 from "../Images/account.jpg";
import sa6 from "../Images/acc.png";
import sa5 from "../Images/b2.png";
import sa8 from "../Images/tel10.png";
import sa4 from "../Images/co1.jpg";
import taxm from '../Images/tel9.png'
import indsacsalesautomation from "../Images/indsac-sales-automation.gif";

export default function FinanceAndAccounting() {
    return (
        <>
            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Sales Automation is a powerful tool to increase your sales and revenue, boost employee productivity and eliminate redundancy from your business processes" />
            <meta property="og:title" content="Sales Automation" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/salesautomation" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/sagif.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/sagif.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Sales Automation is a powerful tool to increase your sales and revenue, boost employee productivity and eliminate redundancy from your business processes" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Sales Automation",
        "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/salesautomation"`}`
        </script>

            <title>Finance And Accounting | Best CRM Software | Indsac Crm :: indsaccrm.com</title>
            <Navbar />

            {/* <!-- breadcrumbs --> */}
            <section className="w3l-inner-banner-main">
                <div className="about-inner inner2">
                    <div className="container seen-w3">
                        <ul className="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li className="active">Finance And Accounting</li>
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
                            Finance And Accounting
                            </h3>

                        </div>
                        <div className="cwp4-two row">
                            <div className="col-xl-6 cwp4-image ">
                                <img src={sagif} alt="product" className="img-responsive " />
                            </div>
                            <div className="cwp4-text col-xl-6">

                                <p className="para"> The Finance and Accounting module is the backbone of any ERP system, as it deals 
                                    with the management of financial transactions, accounting records, and financial reporting. This module 
                                    ensures that all financial data is centralized, accurate, and easily accessible for decision-making.</p><br />
                                <p className="para">Sales Automation is an excellent tool to create customizable workflows automatically, and reduce time spent on manual or repetitive tasks. </p><br />
                                <p className="para"> An interesting and crucial benefit offered by Salesforce automation tools is customer and market intelligence that comes with sterling reports and analytics related to your customers.</p>
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
                                Focus on the Finance and Accounting for Faster Growth
                            </h3>
                        </div>
                        <div className="features-effect row text-center">


                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/generalladger"><img className="img-responsive" src={sa1} alt=" " /></Link>
                                    <h4><Link to="/generalladger" className="title-head"> General Ledger (GL)</Link></h4>
                                    <p className="para">The General Ledger is the core of the Finance and Accounting module. It records all the 
                                        financial transactions of an organization, categorizing them into different accounts (assets, liabilities, 
                                        equity, revenue, and expenses). </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/accountpayable"><img className="img-responsive" src={sa3}alt=" " /></Link>
                                    <h4><Link to="/accountpayable" className="title-head">Accounts Payable (AP) </Link></h4>
                                    <p className="para">The Accounts Payable module manages the organization’s obligations to pay 
                                        off short-term debts to its creditors or suppliers.
                                         It automates the process of recording invoices, approving them, and making payments.</p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/accountreceivable"><img className="img-responsive" src={sa6} alt=" " /></Link><br />
                                    <h4><Link to="/accountreceivable" className="title-head"> Accounts Receivable (AR) </Link></h4><br />
                                    <p className="para">The Accounts Receivable module handles the money owed to the company by its customers.
                                         It tracks customer invoices, ensures timely collection of payments, and manages customer credit limits. </p>
                                </div>
                            </div>


                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/fixedassets"><img className="img-responsive" src={sa5}alt=" " /></Link>
                                    <h4><Link to="/fixedassets" className="title-head"> Fixed Assets </Link></h4><br />
                                    <p className="para">The Fixed Assets module manages the lifecycle of the company’s fixed assets, such as
                                         property, equipment, and vehicles. It tracks asset acquisition, depreciation, revaluation, and disposal. </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/budgetingandforecasting"><img className="img-responsive" src={sa4} alt=" " /></Link>
                                    <h4><Link to="/budgetingandforecasting" className="title-head"> Budgeting and Forecasting</Link></h4>
                                    <p className="para">Budgeting and Forecasting are essential for financial planning and decision-making. This module allows organizations 
                                        to create detailed financial budgets, set targets, and compare actual performance against budgeted figures. </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/cashmamagement"><img className="img-responsive" src={sa8} alt=" " /></Link>
                                    <h4><Link to="/cashmanagement" className="title-head"> Cash Management </Link></h4><br />
                                    <p className="para">Cash Management is critical for maintaining liquidity and ensuring that the company can meet its financial obligations. This module provides tools for monitoring
                                         and managing cash flow, including cash inflows and outflows, bank reconciliations, and cash forecasting.  </p>
                                </div>
                            </div>
                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

<div className="back-color">
    <Link to="/taxmanagement"><img className="img-responsive" src={taxm} alt=" " /></Link>
    <h4><Link to="/taxmanagement" className="title-head"> Tax Management </Link></h4><br />
    <p className="para">Tax Management in an ERP system automates the calculation, reporting, and compliance of taxes. It ensures that the organization 
        adheres to tax regulations, reduces the risk of penalties, and simplifies the filing of tax returns.  </p>
</div>
</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
