import React from 'react'
import '../Style/publicpages.css';
import { Link } from 'react-router-dom';
import { project_name } from '../Config/config'



export default function Footer() {
  return (
  <>
  <section className="w3l-footers-20">
    <div className="footers20">
      <div className="container">
        <h2><Link className="footer-logo" to="/">
            <span className="fa fa-line-chart mr-2" aria-hidden="true" />{`${project_name}`}</Link></h2>
        <div className=" row">
          <div className="grid-col col-lg-7 col-md-7">
            <h3>Get latest updates and offers.</h3>
            <div className="footer-subscribe mt-4">
              <form action method="post" className="input-button">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                <button className="btn footer-button btn-secondary action-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 footer-bottom-two">
            <ul>
              <li> <Link to="/contact_us" className="btn action-sub-button">Contact</Link></li>
              <li> <Link to="/services" className="btn logo-button top-margin mt-md-3">Our Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-line-bottom" />
        <div className=" row">
          <div className="grids-content col-lg-2 col-md-2 col-sm-6">
            <div className="footer-nav">
              <Link to="/" className="contact-para3">Home</Link>
              <Link to="about" className="contact-para3">About</Link>
            </div>
          </div>
          <div className="grids-content col-lg-3 col-md-3 col-sm-6">
            <div className="footer-nav">
              <Link to="/termsofuse" className="contact-para3">Term of Use</Link>
              <Link to="/privacypolicy" className="contact-para3">Privacy Policy</Link>
              <Link to="/ourstory" className="contact-para3">Our Story</Link>			
            </div>					
          </div>					
          <div className="grids-content col-lg-4 col-md-4 col-sm-6">			
            <div className="footer-nav">
              <Link to="/resources" className="contact-para3">What is ERP? </Link>
              <Link to="/contact_us" className="contact-para3">Help Desk </Link>						
              <Link to="/whychooseus" className="contact-para3">Why Choose {`${project_name}`}</Link>
            </div>					
          </div>					
          <div className="grids-content col-lg col-md col-sm-6">			
            <div className="footer-nav">
              <Link to="/" className="contact-para3">Free Demo</Link>
              <Link to="/pricing" className="contact-para3">Pricing </Link>				
            </div>					
          </div>
          <div className="col-lg- col-md- col-12 copyright-grid ">
            <p className="copy-footer-29">Â© 2022 | All rights reserved | Design by <a href="https://indsac.com" target="_blank"> INDSAC SOFTECH</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
   
  </>
  )
}
