import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import oppormg from "../Images/oppormg.png";
import emailmg from "../Images/emailmg.jpg";
import leadmg from "../Images/leadmg.svg";
import con1 from "../Images/con1.jpg";
import taskmg from "../Images/taskmg.png";
import salesmg from "../Images/salesmg.jpg";
import salesf from "../Images/salesf.jpg";
import reportmg from "../Images/reportmg.png";
import productivitymg from "../Images/productivitymg.png";
import sagif from "../Images/mv-gif1.gif";
import hrimg from '../Images/ph3.jpg';
import scmimg from '../Images/Supply_Chain_M.gif'
import projectimg from '../Images/rc1.png'
import manufectimg from '../Images/sa2.jpg';
import crmimg from '../Images/crm.jpg';
import procureimg from '../Images/inventory_management_sft.webp';
import inventimg from '../Images/Inventory-management-system.png'
import documentmg from "../Images/doc3.png"
import inventorymg from "../Images/inventory.png"
import businessmg from "../Images/wm1.png"
import riskmg from "../Images/const1.jpg"
import ecommercemg from "../Images/final-e-commerce-management-0.jpeg"
import servicemg from "../Images/tel4.jpg"
import assetmg from "../Images/pa2.jpg"
import { project_name } from '../Config/config'



export default function services() {
  
  return (
  <>
  <Navbar/>
   {/* breadcrumbs */}
    <section className="w3l-inner-banner-main">
        <div className="about-inner inner2">
            <div className="container seen-w3">
                <ul className="breadcrumbs-custom-path">
                    <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                    <li className="active">Services</li>
                </ul>
            </div>
        </div>
    </section>
 {/* breadcrumbs  */}
<section className="w3l-features-4">
    <div className="features4-block">
        <div className="container">
            <div className="main-titles-head text-center">

                <h3 className="header-name">
		Save time with INDSAC powerful automations
                </h3>
            </div>
            <div className="features-effect row text-center">
              <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                        <Link to="/contactmanagement"><img className="img-responsive" src={con1} alt=" "/></Link>
                        <h4><Link to="/contactmanagement" className="title-head">Contact Management</Link></h4>
                        <p className="para">CRM systems allow salespeople to create contact records and store prospect and customer information in a database. </p>
                    </div>
                </div>
                <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                          <Link to="/taskmanagement "><img className="img-responsive" src={taskmg} alt=" "/></Link>
                        <h4><Link to="/taskmanagement" className="title-head">Task Management </Link></h4>
                        <p className="para"> CRM system that includes task management capabilities sales peoples increase their
                            workflow and keep on top of their follow up. </p>
                    </div>
                </div>
                  <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                         <Link to="/salesautomation "><img className="img-responsive" src={salesmg} alt=" "/></Link>
                        <h4><Link to="/salesautomation" className="title-head">Sales Automation </Link></h4>
                        <p className="para">Sales automation takes all the repetitive, manual tasks performed by sales reps and managers, and automates them. 
                            </p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                      <Link to="/salesforecasting"><img className="img-responsive" src={salesf} alt=" "/></Link><br/><br/>
                        <h4><Link to="/salesforecasting" className="title-head"> Sales Forecasting  </Link></h4>
                        <p className="para">A CRM software predicts your future sales based on data from your current pipeline. You may need to alter your marketing plan based on the sales forecast.</p>
                    </div>
                </div>               
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                          <Link to="/dashboardandreporting"><img className="img-responsive" src={reportmg} alt=" "/></Link>
                        <h4><Link to="/dashboardandreporting" className="title-head">Reporting & Dashboards</Link></h4>
                        <p className="para">Create customized reports as interactive pie, bar, and line charts. Export reports as PDFs or Word files.
                                          Utilize dashboards and reports for management, sales, marketing & more.
                        </p>
                    </div>
                </div>
               
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                       <Link to="/productivityanalysis"><img className="img-responsive" src={productivitymg} alt=" "/></Link>
                        <h4><Link to="/productivityanalysis" className="title-head"> Productivity Analysis </Link></h4>
                        <p className="para">Track and measure your team's progress, know the status of key opportunities, and 
                            ensure you're getting results. Compare productivity among departments and representatives. 
                             </p>
                    </div>
                </div>
                
		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div className="back-color">
                          <Link to="/leadmanagement"><img className="img-responsive" src={leadmg} alt=" "/></Link><br/>
                        <h4><Link to="/leadmanagement" className="title-head">Lead Management </Link></h4>
                        <p className="para">Lead management is the process of capturing and nurturing leads as they move through your sales pipeline along with
						the sales representatives and converted into a sale. </p>
                    </div>
                </div>	
                
		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                         <Link to="/emailintegration"><img className="img-responsive" src={emailmg} alt=" "/></Link><br/>
                        <h4><Link to="/emailintegration" className="title-head">Email Integration</Link></h4>
                        <p className="para"> Email service in an {`${project_name}`} helps keep your sales team organized and productive. 
                            They can integrate their calendars to schedule appointments and engage prospects and customers 
                            accordingly.</p>
                    </div>
                </div>
                
		<div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div className="back-color">
                       <Link to="/opportunitymanagement"><img className="img-responsive" src={oppormg} alt=" "/></Link><br/>
                        <h4><Link to="/opportunitymanagement" className="title-head">Opportunity Management</Link></h4>
                        <p className="para">It provides opportunity tracking so you'll always know the details for each prospective sale, and allows you to 
				review forecasts in real-time with detailed reports, dashboards and lists. Track detailed metrics.</p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6" style={{marginTop:'30px'}}>
                    <div className="back-color">
                        <Link to="/financeandaccounting"><img className="img-responsive" src={sagif} alt=" "/></Link>
                        <h4><Link to="/financeandaccounting" className="title-head">Finance and Accounting</Link></h4>
                        <p className="para">The Finance and Accounting module is the backbone of any ERP system, as it deals with the management of financial transactions, accounting records, and financial reporting. This
                            module ensures that all financial data is centralized, accurate, and easily accessible for decision-making.</p>
                    </div>
                </div>
                <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6" style={{marginTop:"40px"}}>
                    <div className="back-color">
                          <Link to="/humanresource"><img className="img-responsive" src={hrimg} alt=" "/></Link>
                        <h4><Link to="/humanresource" className="title-head">Human Resources (HR) </Link></h4>
                        <p className="para"> The HR module in an ERP system is essential for managing an organization's most valuable asset—its employees. This module integrates various HR functions,
                             providing a unified platform for managing employee data, payroll, benefits, and more. z</p>
                    </div>
                </div>
                  <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                         <Link to="/supplychainmanagement"><img className="img-responsive" src={scmimg} alt=" "/></Link>
                        <h4><Link to="/supplychainmanagement" className="title-head">Supply Chain Management (SCM) </Link></h4>
                        <p className="para">The SCM module in an ERP system is designed to manage and streamline the end-to-end supply chain processes, from sourcing raw materials to delivering finished products to customers. It integrates various supply chain functions,
                             ensuring seamless coordination between suppliers, manufacturers, warehouses, and customers. </p>
                    </div>
                </div>
 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6" style={{marginTop:'25px'}}>
                    <div className="back-color">
                         <Link to="/businessintelligence"><img className="img-responsive" src={businessmg} alt=" "/></Link>
                        <h4><Link to="/businessintelligence" className="title-head">Business Intelligence (BI) </Link></h4>
                        <p className="para">The Business Intelligence module integrates various functions that help organizations analyze data, track key performance indicators (KPIs), and gain insights into business operations. It turns data into actionable intelligence, supporting strategic planning and operational efficiency. </p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                         <Link to="/inventorymanagement"><img className="img-responsive" src={inventorymg} alt=" "/></Link>
                        <h4><Link to="/inventorymanagement" className="title-head">Inventory Management </Link></h4>
                        <p className="para">The Inventory Management module integrates essential functions for effective control and management of your organization’s inventory. It ensures accurate records, streamlines warehouse operations, and enhances overall supply chain efficiency. </p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6" style={{marginTop:'30px'}}>
                    <div className="back-color">
                         <Link to="/riskmanagement"><img className="img-responsive" src={riskmg} alt=" "/></Link>
                        <h4><Link to="/riskmanagement" className="title-head">Risk Management </Link></h4>
                        <p className="para">The Compliance and Risk Management module integrates various functions that helps organizations stay compliant with regulations, manage audits, and reduce business risks.</p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6" style={{marginTop:'30px'}}>
                    <div className="back-color">
                         <Link to="/ecommerce"><img className="img-responsive" src={ecommercemg} alt=" "/></Link>
                        <h4><Link to="/ecommerce" className="title-head">Ecommerse</Link></h4>
                        <p className="para">The E-commerce module in our ERP system equips businesses with everything they need to manage an online storefront, streamline order fulfillment, and enhance customer experiences.</p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                         <Link to="/assetmanagement"><img className="img-responsive" src={assetmg} alt=" "/></Link>
                        <h4><Link to="/assetmanagement" className="title-head">Asset Management</Link></h4>
                        <p className="para">The Asset Management module provides organizations with the tools to effectively manage the lifecycle, maintenance, and tracking of physical and digital assets. This module helps optimize asset utilization, extend asset life, and ensure compliance with regulatory standards.</p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">
                    <div className="back-color">
                         <Link to="/documentmanagement"><img className="img-responsive" src={documentmg} alt=" "/></Link>
                        <h4><Link to="/documentmanagement" className="title-head">Document Management</Link></h4>
                        <p className="para">The Document Management module provides a centralized platform for storing, organizing, and sharing critical business documents. With built-in version control and secure access, it simplifies collaboration while ensuring document security and compliance.</p>
                    </div>
                </div>
                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6" style={{marginTop:'50px'}}>
                    <div className="back-color">
                         <Link to="/servicemanagement"><img className="img-responsive" src={servicemg} alt=" "/></Link>
                        <h4><Link to="/servicemanagement" className="title-head">Service Management</Link></h4>
                        <p className="para">The Service Management module enables businesses to efficiently manage customer service processes, from order management to field services and warranty handling. This module helps ensure that service operations run smoothly, leading to enhanced customer satisfaction and retention.</p>
                    </div>
                </div>

		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1" style={{marginTop:'10px'}}>
                    <div className="back-color">
                          <Link to="/manufacturing"><img className="img-responsive" src={manufectimg} alt=" "/></Link><br/>
                        <h4><Link to="/manufacturing" className="title-head">Manufacturing </Link></h4>
                        <p className="para">The Manufacturing module in an ERP system integrates various functions to manage the production
                            process, from planning and scheduling to quality control and maintenance. This module is crucial for ensuring that
                            manufacturing operations are streamlined, efficient, and capable of meeting production goals.
                        </p>
                    </div>
                </div>

		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                         <Link to="/cutomarrelationship"><img className="img-responsive" src={crmimg} alt=" "/></Link><br/>
                        <h4><Link to="/cutomarrelationship" className="title-head">Customer Relationship Management (CRM)</Link></h4>
                        <p className="para">The CRM module in an ERP system is designed to manage and analyze customer interactions throughout
                             the customer lifecycle. It integrates various functions that are essential for acquiring, retaining, and nurturing customer relationships.
                        </p>
                    </div>
                </div>

		<div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div className="back-color">
                       <Link to="/projectmanagement"><img className="img-responsive" src={projectimg} alt=" "/></Link><br/>
                        <h4><Link to="/projectmanagement" className="title-head">Project Management</Link></h4>
                        <p className="para">The Project Management module integrates various functions that are critical for successful project delivery.
                            It provides tools to manage resources, track progress, and collaborate effectively across teams.
                        </p>
                    </div>
                </div>

                <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6" style={{marginTop:'25px'}}>
                    <div className="back-color">
                         <Link to="/salesanddistribution"><img className="img-responsive" src={salesmg} alt=" "/></Link>
                        <h4><Link to="/salesanddistribution" className="title-head">Sales and Distribution </Link></h4>
                        <p className="para">The Sales and Distribution module is designed to handle the complexities of sales transactions and distribution logistics. It provides tools to manage customer orders, pricing, distribution, and returns efficiently.
                        </p>
                    </div>
                </div>


		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">
                    <div className="back-color">
                          <Link to="/procurementpage"><img className="img-responsive" src={procureimg} alt=" "/></Link><br/>
                        <h4><Link to="/procurementpage" className="title-head">Procurement</Link></h4>
                        <p className="para">The Procurement module integrates various functions that are essential for managing purchasing activities,
                            supplier relationships, and contracts. It ensures that procurement processes are efficient, transparent, and aligned with organizational goals.
                        </p>
                    </div>
                </div>

		 <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1 ">
                    <div className="back-color">
                         <Link to="/inventorymanagementpage"><img className="img-responsive" src={inventimg} alt=" "/></Link><br/>
                        <h4><Link to="/inventorymanagementpage" className="title-head">Inventory Management</Link></h4>
                        <p className="para">The Inventory Management module integrates various functions that are essential for controlling
                            and managing inventory effectively. It helps organizations maintain accurate inventory records, streamline warehouse
                             operations, and improve overall supply chain efficiency.
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
