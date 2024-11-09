import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faEllipsisV,
  faEnvelope,
  faPenToSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "../../Style/VendorProfileCard.css";
import { Link } from "react-router-dom";

const VendorProfileCard = (props) => {
  // console.log(props.Details);
  return (
    <>
      <div className="card card-primary">
        <div className="card-header d-flex justify-content-between align-items-center text-white my-bg">
          <h3 className="card-title">
            {props.Details.firstname} {props.Details.lastname}
          </h3>
          <div className="dropdown">
            <button
              className="btn btn-transparent text-white border border-white"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MENU
              {/* <FontAwesomeIcon icon={isOpen ? faTimes : faEllipsisV} /> */}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              {/* <li>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faPenToSquare} /> Edit Contact Details
                </a>
              </li> */}
              <Link
                to={`/new-vendor/${props.Details.id}`}
                className="dropdown-item"
              >
                <FontAwesomeIcon icon={faPenToSquare} /> Edit Contact Details
              </Link>
              <li>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faEnvelope} /> Send Mail
                </a>
              </li>
              {/* <li>
                <a className="dropdown-item" href="#">
                <FontAwesomeIcon icon={faCartPlus} /> Add Product
                </a>
              </li> */}
              <Link
                to={`/product/${props.Details.id}`}
                className="dropdown-item"
              >
                <FontAwesomeIcon icon={faCartPlus} /> Add Product
              </Link>
            </ul>
          </div>
        </div>

        <div className="card-body">
          <div className="card-text py-2 px-3">
            <b>
              <i className="fas fa-book mr-1"></i> Personal Details
            </b>
            <p className="text-muted">Email: {props.Details.email}</p>
            <p className="text-muted">Owner: {props.Details.owner}</p>
            <p className="text-muted">Status: {props.Details.status}</p>
            <hr
              style={{
                backgroundColor: "darkgray",
                height: "1px",
                marginTop: ".5rem",
                marginBottom: ".5rem",
              }}
            />
          </div>
          <div className="card-text py-2 px-3">
            <b>
              <i className="fas fa-map-marker-alt mr-1"></i> Address
            </b>
            <p className="text-muted">
              Address 1: {props.Details.add1}
              <br />
              Address 2: {props.Details.add2}
              <br />
              City: {props.Details.city}
              <br />
              State: {props.Details.state}
              <br />
              Country: {props.Details.country}
              <br />
              Pincode: {props.Details.pincode}
            </p>
            <hr
              style={{
                backgroundColor: "darkgray",
                height: "1px",
                marginTop: ".5rem",
                marginBottom: ".5rem",
              }}
            />
          </div>
          <div className="card-text py-2 px-3">
            <b>
              <i className="fas fa-pencil mr-1"></i> Website
            </b>
            <p className="text-muted">
              Company name: {props.Details.companyname}
            </p>
            <p className="text-muted">
              Website address: {props.Details.website}
            </p>
            <hr
              style={{
                backgroundColor: "darkgray",
                height: "1px",
                marginTop: ".5rem",
                marginBottom: ".5rem",
              }}
            />
          </div>
          <div className="card-text py-2 px-3">
            <b>
              <i className="fas fa-phone mr-1"></i> Phone
            </b>
            <p className="text-muted">Mobile: {props.Details.mobile}</p>
            <p className="text-muted">
              Alternate Number: {props.Details.altphone}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorProfileCard;
