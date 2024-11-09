import React, { useEffect } from "react";
import { useState } from "react";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import MainSidebar from "../Mainsidebar";
import "../../Style/LandingPage.css";
import { Avatar } from "@mui/material";
import DataTable from "./DataTable";
import CustomerDetails from "./CustomerDetails";
import c2 from "../../Images/c2.jpg";
import bb3 from "../../Images/bb3.jpg";
import { FaPaintBrush } from "react-icons/fa";
import { AiOutlineFileWord } from "react-icons/ai";
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { useParams } from "react-router-dom";
import axios from "axios";
import { path_url } from "../../Config/config";
import {
  faCirclePlus,
  faPlus,
  faPlusSquare,
  faSquarePlus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomerDetailsParent() {
  const [showComponent, setShowComponent] = useState(false);
  const [hamburger, sethamburger] = useState(true);
  const [isRightMenu, setisRightMenu] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const [Details, setDetails] = useState([]);
  const [showMobileButtons, setShowMobileButtons] = useState(true);

  const handleToggle = () => {
    setShowComponent(!showComponent);
  };
  const customerId = useParams();
  console.log(customerId);
  const handleScreenEnter = () => {
    setFullScreen(false);
    document.body.requestFullscreen();
  };
  const handleScreenExit = () => {
    setFullScreen(true);
    document.exitFullscreen();
  };
  const handelShow = () => setIsSearchShow(!isSearchShow);
  const handelRightMenuShow = () => setisRightMenu(!isRightMenu);
  const handleclickonbutton = (hamburger) => {
    if (document.documentElement.clientWidth <= 800)
      return { width: "100%", left: "0rem" };
    else
      return {
        width: !hamburger && "-webkit-fill-available",
        left: !hamburger && "3.7rem",
      };
  };
  const handleclickonbutton1 = (hamburger) => {
    if (document.documentElement.clientWidth <= 800) {
      return { display: hamburger && "none" };
    }
  };
  useEffect(() => {
    fetchdetails();
  }, []);
  async function fetchdetails() {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        `${path_url}/customer/details/${customerId.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setDetails(response.data.body);
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleMobileButtonClick = () => {
    setShowMobileButtons(!showMobileButtons);
  };
  return (
    <>
      <div className="con1 d-flex">
        <div className="subcon1" style={handleclickonbutton1(hamburger)}>
          <MainSidebar hamburger={hamburger} sethamburger={sethamburger} />
        </div>
        <div className="subcon2" style={handleclickonbutton(hamburger)}>
          <UserNavbar
            hamburger={hamburger}
            sethamburger={sethamburger}
            handelRightMenuShow={handelRightMenuShow}
            handelShow={handelShow}
            isSearchShow={isSearchShow}
            handleScreenEnter={handleScreenEnter}
            handleScreenExit={handleScreenExit}
            fullScreen={fullScreen}
          />
          <div>
            <div
              className="col-12 w-9 d-flex justify-content-center"
              style={{ paddingTop: 5, position: "relative" }}
            >
              <img
                src={bb3}
                alt=""
                style={{
                  width: "100%",
                  height: "5rem",
                  objectFit: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Avatar
                src={c2}
                className="my-5"
                style={{
                  position: "absolute",
                  left: "51%",
                  transform: "translateX(-50%)",
                  zIndex: 3,
                  width: "6rem",
                  height: "6rem",
                }}
              ></Avatar>
            </div>
            <div className="col-12 justify-content-center">
              <div
                className="row justify-content-center"
                style={{ marginTop: "3.3rem" }}
              >
                <div className="content-header">
                  <div className="content-fluid">
                    <div className="row mt-3">
                      <div className="col-sm-6">
                        <h4>Customer Details</h4>
                      </div>
                      <div className="col-sm-6">
                        <ul className="breadcrumb float-sm-right mb-4">
                          <li className="breadcrumb-item">
                            <a href="#">Home</a>
                          </li>
                          <li className="breadcrumb-item">General Form</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 bg-white">
                  <div className="row customer-detail">
                    <div className="col-md-4 mt-2">
                      <div>
                        <h3 className="text-primary">
                          <FaPaintBrush className="pb-1" />
                          {Details?.customer?.firstname +
                            " " +
                            Details?.customer?.lastname}
                        </h3>
                        <p className="text-muted">{Details?.customer?.add1}</p>
                        <br />
                      </div>
                      <div className="text-muted">
                        <p className="text-sm">
                          {Details?.customer?.companyname}
                          <b className="d-block">
                            {Details?.customer?.website}
                          </b>
                        </p>
                        <p className="text-sm">
                          {Details?.customer?.city +
                            ", " +
                            Details?.customer?.state +
                            ", " +
                            Details?.customer?.country +
                            ", " +
                            Details?.customer?.pincode}
                          <b className="d-block">{Details?.customer?.mobile}</b>
                        </p>
                      </div>
                      <div>
                        <h5 className="mt-5 text-muted font-weight-bold">
                          Project Files
                        </h5>
                        <ul className="list-unstyled">
                          <li>
                            <AiOutlineFileWord className="mr-2" />
                            <a href="/" className="btn-link text-secondary">
                              Functional-requirements.docx
                            </a>
                          </li>
                          <li>
                            <AiOutlineFilePdf className="mr-2" />
                            <a href="/" className="btn-link text-secondary">
                              UAT.pdf
                            </a>
                          </li>
                          <li>
                            <AiOutlineMail className="mr-2" />
                            <a href="/" className="btn-link text-secondary">
                              Email-from-flatbal.mln
                            </a>
                          </li>
                          <li>
                            <BiImage className="mr-2" />
                            <a href="/" className="btn-link text-secondary">
                              Logo.png
                            </a>
                          </li>
                          <li>
                            <AiOutlineFileWord className="mr-2" />
                            <a href="/" className="btn-link text-secondary">
                              Contract-10_12_2014.docx
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="mt-4"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        <div className="obutons" style={{display: "flex", gap:"0.5rem"}}>
                        <button className="btn btn-md btn-primary">
                          Add Files
                        </button>
                        <button className="btn btn-md btn-warning">
                          Report Contact
                        </button>
                        </div>
                        
                        {document.documentElement.clientWidth <= 768 ? (
                <button
                  className="btn btn-md bg-gradient-primary"
                  style={{
                    background:
                      "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                    color: "#fff",
                    display: "flex",
                    gap: "0.2rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.2rem",
                    margin: "0 auto",
                  }}
                  onClick={handleMobileButtonClick}
                >
                  {showMobileButtons ? "Hide" : "Show"} Buttons
                </button>
              ) : null}
                        {showMobileButtons ? (
                          <>  
                          <div className="pbuttons" style={{display: "flex", gap:"0.5rem"}}> 
                          <div className="rightside" style={{display: "flex",flexDirection:"column", gap:"0.5rem",}}>
                          <button
                          className="btn bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                          Create Invoice
                        </button>
                        <button
                          className="btn bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faCirclePlus} />
                          Create Purchase Order
                        </button>
                        <button
                          className="btn bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faPlusSquare} />
                          Create Proforma Invoice
                        </button>
                        <button
                          className="btn bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faSquarePlus} />
                          Create Quotation
                        </button>
                          </div>
                          <div className="leftside"  style={{display: "flex",flexDirection:"column", gap:"0.5rem"}}>
                          <button
                          className="btn bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                          Edit Contact Details
                        </button>
                        <button
                          className="btn bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                          Create Task
                        </button>
                        <button
                          className="btn bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                          Create Service Request
                        </button>
                        <button
                          className="btn  bg-gradient-primary"
                          style={{
                            background:
                              "#007bff linear-gradient(180deg,#268fff,#007bff) repeat-x",
                            color: "#fff",
                            display: "flex",
                            gap: "0.2rem",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0.2rem",
                            fontSize:"small"
                          }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                          Send Mail
                        </button>
                          </div></div>
                         
                        </>
                      ):(<>  </>)}
                      </div>
                    </div>

                    <div className="col-md-8 mt-2">
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <div
                            className="info-box bg-light"
                            style={{ height: "100%" }}
                          >
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Total Invoice
                              </span>
                              <span className="info-box-text text-center text-muted mb-0">
                                <b style={{ color: "black" }}>
                                  {Details?.count?.totalInvoice}
                                </b>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div
                            className="info-box bg-light"
                            style={{ height: "100%" }}
                          >
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Total Service Request
                              </span>
                              <span className="info-box-text text-center text-muted mb-0">
                                <b style={{ color: "black" }}>
                                  {Details?.count?.totalServiceRequets}
                                </b>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div
                            className="info-box bg-light"
                            style={{ height: "100%" }}
                          >
                            <div className="info-box-content">
                              <span className="info-box-text text-center text-muted">
                                Total Order
                              </span>
                              <span className="info-box-text text-center text-muted mb-0 ">
                                <b style={{ color: "black" }}>
                                  {Details?.count?.totalOrders}
                                </b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {Details?.dueToday?.length !== null ? (
                        <DataTable
                          tableData={Details?.dueToday}
                          title={"Due Today data"}
                        />
                      ) : (
                        ""
                      )}
                      <DataTable
                        tableData={Details?.openItemsList}
                        title={"Open Items List"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CustomerDetails Details={Details} />
          <UserFooter />
        </div>
      </div>
    </>
  );
}
