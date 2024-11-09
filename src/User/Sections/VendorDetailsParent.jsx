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
import VendorProfileCard from "../components/VendorProfileCard";
import VendorDetailsTables from "../components/VendorDetailsTables";
import "../../Style/CrmDashboard.css";
import VendorDashboardSub from "../components/VendorDashboardSub";

export default function VendorDetailsParent() {
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
  const vendorId = useParams();
  // console.log(vendorId);
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
    window.scrollTo(0, 0);
    fetchdetails();
  }, []);
  async function fetchdetails() {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(`${path_url}/vendor/${vendorId.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // console.log(response.data);
      setDetails(response.data.body);
    } catch (error) {
      console.error(error.message);
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
                        <h4>Vendor Details</h4>
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
                      <div className="vendor-profile mt-2">
                        <VendorProfileCard Details={Details} />
                      </div>
                    </div>

                    <div className="col-md-8 mt-2">
                      <div className="row">
                        <div class="col-lg-3 col-6 mb-3 p-2">
                          <VendorDashboardSub
                            index={0}
                            name="Total Invoice"
                            value={0}
                            icon="BiBarChart"
                            class="bg-info"
                            addOn=""
                          />
                        </div>
                        <div class="col-lg-3 col-6 mb-3 p-2 ">
                          <VendorDashboardSub
                            index={1}
                            name="Service Requests"
                            value={0}
                            icon="BiBarChart"
                            class="bg-success"
                            addOn=""
                          />
                        </div>
                        <div class="col-lg-3 col-6 mb-3 p-2">
                          <VendorDashboardSub
                            index={2}
                            name="Due Payment"
                            value={0}
                            icon="BiBarChart"
                            class="bg-warning"
                            addOn=""
                          />
                        </div>
                        <div class="col-lg-3 col-6 mb-3 p-2">
                          <VendorDashboardSub
                            index={3}
                            name="Toal Orders"
                            value={0}
                            icon="BiBarChart"
                            class="bg-danger"
                            addOn=""
                          />
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
          <VendorDetailsTables Details={Details} />
          <UserFooter />
        </div>
      </div>
    </>
  );
}
