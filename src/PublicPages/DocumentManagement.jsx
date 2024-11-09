import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import indsacmanagingdocuments from "../Images/doc2.png";


export default function DocumentMangement() {
    return (
        <>

            {/* <!-- Required meta tags --> */}
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="Ensure the right people have access to the right documents and associate these documents with their respective deals with a centralized repository for all your sales collaterals" />
            <meta property="og:title" content="Document Management" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://indsaccrm.com/docmangement" />
            <meta property="og:image" content="https://www.indsaccrm.com/static/media/indsac-managing-documents.gif" />
            <meta property="og:image:secure_url" content="https://www.indsaccrm.com/static/media/indsac-managing-documents.gif" />
            <meta property="og:site_name" content="indsaccrm.com" />
            <meta property="og:description" content="Ensure the right people have access to the right documents and associate these documents with their respective deals with a centralized repository for all your sales collaterals" />
            <meta property="og:locale" content="en_US" />

            <script type="application/ld+json">`{`"@context":"https://schema.org","@type":"WebPage","name":"Document Management",
            "logo":{"@type":"ImageObject","url":"https://www.indsaccrm.com/web/dist/img/u.png"},"url":"https://www.indsaccrm.com/docmangement"`}`
            </script>

            <title>Document Management | Document Management :: indsaccrm.com</title>

            <Navbar />
            {/* <!-- breadcrumbs --> */}
            <section class="w3l-inner-banner-main">
                <div class="about-inner inner2">
                    <div class="container seen-w3">
                        <ul class="breadcrumbs-custom-path">
                            <li><Link to="/">Home <span class="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li ><Link to="/services">Services <span className="fa fa-angle-right" aria-hidden="true"></span></Link></li>
                            <li class="active"> Document Management </li>
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
                                <img src={indsacmanagingdocuments} alt="product" class="img-responsive " />
                            </div>
                            <div class="cwp4-text col-xl-6">
                                <h4> Managing Documents</h4>
                                <p class="para">The Document Management module in an ERP system helps businesses store, manage, and organize their documents in a secure and efficient manner. It allows teams to collaborate seamlessly, track document versions, and ensure that important files are easily accessible to the right users. By digitizing and streamlining document workflows, the Document Management module enhances productivity, ensures compliance, and reduces the risk of document loss or mismanagement.</p><br></br>
                                <p class="para">Efficient document management is critical for businesses of all sizes, as it supports compliance with legal and regulatory requirements, improves team collaboration, and ensures that essential business information is always available when needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="w3l-recent-work-hobbies">
                <div class="recent-work ">
                    <div class="container">
                        <div class="left-text">
                            <h3>Benefits of a Document Management</h3>
                        </div>
                        <p class="para"><h4>1. Centralized Access to Information</h4><br />
                        Document Management provides a centralized location for storing all important business documents, making it easy for teams to access the information they need quickly. This eliminates the hassle of searching through multiple systems or physical files, improving productivity and reducing delays in decision-making. </p>
                        <br />
                        <p class="para"><h4>2. Enhanced Security and Compliance </h4> <br />
                        With features like role-based access control and encryption, Document Management ensures that sensitive documents are securely stored and only accessible to authorized personnel. It also helps businesses meet regulatory requirements by providing audit trails and ensuring that document handling complies with industry standards. </p>
                        <br />
                        <p class="para"><h4>3. Improved Collaboration</h4> <br />
                        Document Management facilitates seamless collaboration by allowing multiple users to access, share, and edit documents in real-time. This reduces bottlenecks in workflows, enhances communication across teams, and ensures that everyone is working with the most up-to-date information.</p>
                        <br />
                        <p class="para"><h4>4. Streamlined Workflow and Approvals</h4> <br />
                        Document Management systems often include automated workflows for document approval and review. This speeds up processes, reduces bottlenecks, and ensures that documents move smoothly through the appropriate channels without manual intervention.</p>
                        <br />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
