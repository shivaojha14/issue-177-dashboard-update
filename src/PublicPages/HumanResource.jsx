import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import sagif from "../Images/ph6.png";
import sa1 from "../Images/employeemg.jpg";
import sa3 from "../Images/opm4.png";
import sa6 from "../Images/oppm3.png";
import sa5 from "../Images/pa2.jpg";
import sa8 from "../Images/pa4.jpg";
import sa4 from "../Images/pa6.png";
import sfgif from "../Images/ph3.jpg";
import { project_name } from '../Config/config'

export default function HumanResource() {
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
    
        <title>Human Resources | Best  Software | Indsac Crm :: indsaccrm.com</title>
        <Navbar/>
    
        {/* <!-- breadcrumbs --> */}
        <section className="w3l-inner-banner-main">
            <div className="about-inner inner2">
                <div className="container seen-w3">
                    <ul className="breadcrumbs-custom-path">
                        <li><Link to="/">Home <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                        <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                         <li className="active">Human Resources</li>
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
                   Human Resources
                    </h3> 
    
                </div>
                <div className="cwp4-two row">
                <div className="col-xl-6 cwp4-image ">
                    <img src={sfgif} alt="product" className="img-responsive "/>
                </div>
                    <div className="cwp4-text col-xl-6">
                      
                        <p className="para"> The HR module in an ERP system is essential for managing an organization's most valuable asset—its employees. This module integrates various HR functions, providing a unified platform for managing employee data, payroll, benefits, and more.
                        </p><br/>
                       <p className="para">  By using an {`${project_name}`} with sales forecast services, sales teams can fine-tune their selling strategy. </p><br/>
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
                                    <Link to="/employedatamanagement"><img className="img-responsive" src={sa1} alt=" " /></Link>
                                    <h4><Link to="/employedatamanagement" className="title-head"> Employee Data Management</Link></h4>
                                    <p className="para">Employee Data Management is the foundation of the HR module. It involves the
                                        collection, storage, and management of all employee-related information, including personal
                                        details, employment history, job roles, and performance records. </p>
                                </div>
                            </div>

                            <div className="grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/payrollmanagement"><img className="img-responsive" src={sa3}alt=" " /></Link>
                                    <h4><Link to="/payrollmanagement" className="title-head">Payroll Management </Link></h4>
                                    <p className="para">Payroll Management automates the process of calculating and distributing
                                         employee salaries, bonuses, and deductions. This module ensures accurate and timely payroll
                                          processing, reducing the risk of errors and ensuring compliance with tax and labor law</p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6">

                                <div className="back-color">
                                    <Link to="/timeandattendance"><img className="img-responsive" src={sa6} alt=" " /></Link><br />
                                    <h4><Link to="/timeandattendance" className="title-head"> Time and Attendance </Link></h4><br />
                                    <p className="para">The Time and Attendance module tracks employee work hours, including attendance, absences,
                                         and overtime. It provides tools for managing shift schedules, leave requests, and time-off balances. </p>
                                </div>
                            </div>


                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/recruitment"><img className="img-responsive" src={sa5}alt=" " /></Link>
                                    <h4><Link to="/recruitment" className="title-head"> Recruitment </Link></h4><br />
                                    <p className="para">The Recruitment module streamlines the hiring process by managing job postings, applicant tracking, and candidate selection.
                                        It automates tasks such as screening resumes, scheduling interviews, and sending offer letters. </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/talentmanagement"><img className="img-responsive" src={sa4} alt=" " /></Link>
                                    <h4><Link to="/talentmanagement" className="title-head"> Talent Management</Link></h4>
                                    <p className="para">Talent Management focuses on developing and retaining top talent within the organization.
                                         This module includes features for performance management, succession planning, and career development. </p>
                                </div>
                            </div>

                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

                                <div className="back-color">
                                    <Link to="/traininganddevelopement"><img className="img-responsive" src={sa8} alt=" " /></Link>
                                    <h4><Link to="/traininganddevelopement" className="title-head"> Training and Development </Link></h4><br />
                                    <p className="para">The Training and Development module helps organizations manage employee learning and
                                         development programs. It provides tools for creating training schedules, tracking course completion,
                                         and evaluating the effectiveness of training initiatives.  </p>
                                </div>
                            </div>
                            <div className=" grids-effect-2 col-lg-4 col-md-6 col-sm-6 mt-4 pt-1">

<div className="back-color">
    <Link to="/benefitadministration"><img className="img-responsive" src={sagif} alt=" " /></Link>
    <h4><Link to="/benefitadministration" className="title-head"> Benefits Administration </Link></h4><br />
    <p className="para">Benefits Administration manages employee benefits, such as health insurance, retirement plans, and other perks. This module
        automates the enrollment process, tracks eligibility, and ensures compliance with benefits regulations.  </p>
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
