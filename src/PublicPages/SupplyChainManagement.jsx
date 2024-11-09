import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import sagif from "../Images/sagif.gif";
import sa1 from "../Images/Inventory_management.png";
import sa3 from "../Images/innovative.gif";
import sa6 from "../Images/op7.png";
import sa5 from "../Images/co1.jpg";
import sa8 from "../Images/tr2.png";
import sa4 from "../Images/tr1.jpg";
import sfgif from "../Images/Supply_Chain_M.gif";

export default function SupplyChainManagement() {
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
    
        <title>Supply Chain Management | Best  Software | Indsac Crm :: indsaccrm.com</title>
        <Navbar/>
    
        {/* <!-- breadcrumbs --> */}
        <section className="w3l-inner-banner-main">
            <div className="about-inner inner2">
                <div className="container seen-w3">
                    <ul className="breadcrumbs-custom-path">
                        <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                        <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                         <li className="active">Supply Chain Management (SCM)</li>
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
                    Supply Chain Management (SCM)
                    </h3> 
    
                </div>
                <div className="cwp4-two row">
                <div className="col-xl-6 cwp4-image ">
                    <img src={sfgif} alt="product" className="img-responsive "/>
                </div>
                    <div className="cwp4-text col-xl-6">
                      
                        <p className="para"> TThe SCM module in an ERP system is designed to manage and streamline the end-to-end
                            supply chain processes, from sourcing raw materials to delivering finished products to customers. It
                             integrates various supply chain functions, ensuring seamless coordination between suppliers,
                             manufacturers, warehouses, and customers.
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
                                Focus on the Human Resources for Faster Growth
                            </h3>
                        </div>
                        <div className="features-effect row text-center">


                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/inventorymanagementscm"><img className="img-responsive" src={sa1} alt=" " /></Link>
                                    <h4><Link to="/inventorymanagementscm" className="title-head"> Inventory Management</Link></h4>
                                    <p className="para">Inventory Management is central to the SCM module, focusing on tracking and managing the stock of raw materials, work-in-progress items, and finished goods.
                                        This module provides tools for real-time inventory tracking, demand forecasting, and replenishment planning. </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/procurement"><img className="img-responsive" src={sa3}alt=" " /></Link>
                                    <h4><Link to="/procurement" className="title-head">Procurement </Link></h4>
                                    <p className="para">The Procurement module automates the process of sourcing and purchasing raw materials, goods, and services from suppliers. It manages purchase orders, supplier
                                         contracts, and approvals, ensuring that procurement activities are efficient and cost-effective.</p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/ordermanagement"><img className="img-responsive" src={sa6} alt=" " /></Link><br />
                                    <h4><Link to="/ordermanagement" className="title-head"> Order Management </Link></h4><br />
                                    <p className="para">Order Management handles the processing of customer orders, from order entry to fulfillment. This module
                                        ensures that orders are accurately captured, processed, and delivered on time.
                                    </p>
                                </div>
                            </div>


                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/warehousemanagement"><img className="img-responsive" src={sa5}alt=" " /></Link>
                                    <h4><Link to="/warehousemanagement" className="title-head"> Warehouse Management </Link></h4><br />
                                    <p className="para">The Warehouse Management module optimizes the storage, retrieval, and movement of goods within
                                        warehouses. It provides tools for managing warehouse layouts, bin locations, and stock movements.
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/logisticsandshipping"><img className="img-responsive" src={sa4} alt=" " /></Link>
                                    <h4><Link to="/logisticsandshipping" className="title-head"> Logistics and Shipping</Link></h4>
                                    <p className="para">Logistics and Shipping manage the transportation and delivery of goods to customers or distribution
                                        centers. This module coordinates with carriers, manages shipping routes, and tracks shipments in real-time.
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/suppliermanagement"><img className="img-responsive" src={sa8} alt=" " /></Link>
                                    <h4><Link to="/suppliermanagement" className="title-head"> Supplier Management </Link></h4><br />
                                    <p className="para">Supplier Management focuses on maintaining strong relationships with suppliers and ensuring that they meet the organization's quality, cost, and delivery requirements.
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
