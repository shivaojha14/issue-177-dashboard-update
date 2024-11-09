import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import indsacmobilecrm from "../Images/indsac-mobile-crm.gif";

export default function GeneralLadger() {
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

                            <li className="active">General Ladger</li>
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
                                <h4>General Ladger </h4>
                                <p className="para">  The General Ledger is the core of the Finance and Accounting module.
                                    It records all the financial transactions of an organization, categorizing them into
                                    different accounts (assets, liabilities, equity, revenue, and expenses). The GL provides
                                    a comprehensive view of the company’s financial health, enabling the preparation of
                                    financial statements such as the balance sheet and income statement. It also supports
                                    multi-currency transactions, intercompany transactions, and consolidations for businesses
                                    operating in multiple regions.
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

                            <h3>General Ladger Benefits for Employees</h3>
                            <div className="row about-about">
                                <div className="col-lg-4 col-md-6">
                                    <div className="about-grids">

                                        <h4>Comprehensive Financial Overview</h4>
                                        <p className="para"> The GL provides a centralized record of all financial transactions, offering a clear and complete view of the company's financial health.
                                        </p><br />
                                        <div className="mt-3 about-list">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 about-line-top">
                                    <div className="about-grids">
                                        <h4>Accurate Financial Reporting:</h4>

                                        <p className="para">Facilitates the preparation of accurate financial statements, which are crucial for stakeholders, investors, and regulatory compliance.<br /><br /></p><br />
                                        <div className="mt-3 about-list">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 about-line-top">
                                    <div className="about-grids">
                                        <h4> Multi-Currency and Intercompany Transactions</h4>
                                        <p className="para">Supports global operations by managing transactions in multiple currencies and across different entities within the organization.
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
