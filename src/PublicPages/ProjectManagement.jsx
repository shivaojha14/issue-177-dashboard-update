import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import sagif from "../Images/sagif.gif";
import sa1 from "../Images/planning.jpg";
import sa3 from "../Images/ph3.jpg";
import sa6 from "../Images/pa1.jpg";
import sa5 from "../Images/pa2.jpg";
import sa8 from "../Images/sa8.png";
import sa4 from "../Images/pa6.png";
import sfgif from "../Images/rc1.png";

export default function ProjectManagement() {
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
    
        <title>Project Management | Best  Software | Indsac Crm :: indsaccrm.com</title>
        <Navbar/>
    
        {/* <!-- breadcrumbs --> */}
        <section className="w3l-inner-banner-main">
            <div className="about-inner inner2">
                <div className="container seen-w3">
                    <ul className="breadcrumbs-custom-path">
                        <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                        <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                         <li className="active">Project Management</li>
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
                    Project Management
                    </h3> 
    
                </div>
                <div className="cwp4-two row">
                <div className="col-xl-6 cwp4-image ">
                    <img src={sfgif} alt="product" className="img-responsive "/>
                </div>
                    <div className="cwp4-text col-xl-6">
                      
                        <p className="para"> The Project Management module integrates various functions that are critical for successful
                             project delivery. It provides tools to manage resources, track progress, and collaborate effectively across teams.
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
                                Focus on the Project Management for Faster Growth
                            </h3>
                        </div>
                        <div className="features-effect row text-center">


                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/projectplanning"><img className="img-responsive" src={sa1} alt=" " /></Link>
                                    <h4><Link to="/projectplanning" className="title-head">Project Planning</Link></h4>
                                    <p className="para">Project Planning is the foundation of the Project Management module. It involves defining the project
                                         scope, setting objectives, and creating detailed project schedules. This function helps project managers identify key milestones, allocate resources, and establish timelines for each task.

                                    </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/resourceallocation"><img className="img-responsive" src={sa3}alt=" " /></Link>
                                    <h4><Link to="/resourceallocation" className="title-head">Resource Allocation</Link></h4>
                                    <p className="para">Resource Allocation ensures that the right resources are available at the right time for each 
                                        project. This function helps in assigning tasks to team members based on their skills, availability, and workload. 
                                    </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/timeandexpensetracking"><img className="img-responsive" src={sa6} alt=" " /></Link><br />
                                    <h4><Link to="/timeandexpensetracking" className="title-head">Time and Expense Tracking </Link></h4><br />
                                    <p className="para">Time and Expense Tracking is crucial for monitoring the actual time spent on tasks and the 
                                        costs associated with them. This function allows team members to log their hours and expenses, providing project managers with real-time data on project performance.
                                    </p>
                                </div>
                            </div>


                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/projectaccounting"><img className="img-responsive" src={sa5}alt=" " /></Link>
                                    <h4><Link to="/projectaccounting" className="title-head">Project Accounting</Link></h4><br />
                                    <p className="para">Project Accounting focuses on managing the financial aspects of a project. It includes 
                                        budgeting, cost tracking, and revenue recognition. This function helps in monitoring 
                                        project expenses, comparing actual costs with budgeted amounts, and ensuring that projects remain profitable.</p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/projectcollaboration"><img className="img-responsive" src={sa4} alt=" " /></Link>
                                    <h4><Link to="/projectcollaboration" className="title-head">Project Collaboration</Link></h4>
                                    <p className="para">Project Collaboration is essential for ensuring that all project stakeholders are on the same page. This function provides tools for communication, 
                                        document sharing, and task management, enabling teams to work together effectively, even when they are geographically dispersed.
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
