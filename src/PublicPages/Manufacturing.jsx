import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import sagif from "../Images/sagif.gif";
import sa1 from "../Images/planning.jpg";
import sa3 from "../Images/sf1.jpg";
import sa6 from "../Images/pa1.jpg";
import sa5 from "../Images/wm1.png";
import sa8 from "../Images/itp1.png";
import sa4 from "../Images/ph6.png";
import sfgif from "../Images/productivitymg.png";

export default function Manufacturing() {
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
    
        <title>Manufacturing | Best  Software | Indsac Crm :: indsaccrm.com</title>
        <Navbar/>
    
        {/* <!-- breadcrumbs --> */}
        <section className="w3l-inner-banner-main">
            <div className="about-inner inner2">
                <div className="container seen-w3">
                    <ul className="breadcrumbs-custom-path">
                        <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                        <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                         <li className="active">Manufacturing</li>
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
                    Manufacturing
                    </h3> 
    
                </div>
                <div className="cwp4-two row">
                <div className="col-xl-6 cwp4-image ">
                    <img src={sfgif} alt="product" className="img-responsive "/>
                </div>
                    <div className="cwp4-text col-xl-6">
                      
                        <p className="para"> The Manufacturing module in an ERP system integrates various 
                            functions to manage the production process, from planning and scheduling to quality
                             control and maintenance. This module is crucial for ensuring that manufacturing 
                             operations are streamlined, efficient, and capable of meeting production goals.
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
                                Focus on the Manufacturing for Faster Growth
                            </h3>
                        </div>
                        <div className="features-effect row text-center">


                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/productplanning"><img className="img-responsive" src={sa1} alt=" " /></Link>
                                    <h4><Link to="/productplanning" className="title-head"> Production Planning</Link></h4>
                                    <p className="para">Production Planning is a critical component of the Manufacturing module,
                                         responsible for scheduling and managing the production process.
                                    </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/billofmaterials"><img className="img-responsive" src={sa3}alt=" " /></Link>
                                    <h4><Link to="/billofmaterials" className="title-head">Bill of Materials (BOM) </Link></h4>
                                    <p className="para">The Bill of Materials (BOM) is a comprehensive list of all the raw 
                                        materials, components, and subassemblies required to manufacture a finished product.
                                         The BOM module in an ERP system manages this information, ensuring that the correct 
                                         materials are used in production.
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/ordermanagement"><img className="img-responsive" src={sa6} alt=" " /></Link><br />
                                    <h4><Link to="/ordermanagement" className="title-head"> Material Requirements Planning (MRP) </Link></h4><br />
                                    <p className="para">Material Requirements Planning (MRP) is a key function of the Manufacturing
                                         module that helps organizations plan the procurement and use of materials needed for production.
                                          MRP uses data from the BOM, production schedules, and inventory levels to calculate the required 
                                          materials and timing for orders.

                                    </p>
                                </div>
                            </div>


                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/warehousemanagement"><img className="img-responsive" src={sa5}alt=" " /></Link>
                                    <h4><Link to="/warehousemanagement" className="title-head"> Shop Floor Control</Link></h4><br />
                                    <p className="para">Shop Floor Control focuses on managing and monitoring the day-to-day 
                                        operations on the manufacturing floor. This module tracks the progress of production 
                                        orders, manages work orders, and monitors machine and labor utilization.
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/logisticsandshipping"><img className="img-responsive" src={sa4} alt=" " /></Link>
                                    <h4><Link to="/logisticsandshipping" className="title-head">Quality Control</Link></h4>
                                    <p className="para">Quality Control is essential for ensuring that the products manufactured 
                                        meet the required quality standards. This module provides tools for inspecting and testing 
                                        materials, components, and finished products at various stages of production.
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/suppliermanagement"><img className="img-responsive" src={sa8} alt=" " /></Link>
                                    <h4><Link to="/suppliermanagement" className="title-head">Maintenance Management</Link></h4><br />
                                    <p className="para">Maintenance Management is responsible for ensuring that manufacturing equipment and 
                                        machinery are kept in optimal working condition. This module tracks maintenance schedules, manages 
                                        work orders for repairs, and monitors equipment performance.
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
