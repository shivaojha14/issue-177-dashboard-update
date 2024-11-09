import React, { useEffect, useState } from "react";
import CrmDashboardsub from "./CrmDashboardsub";
import MainSidebar from "./Mainsidebar";
import UserNavbar from "./UserNavbar";
import SalesGraph from "./SalesGraph";
import TodoList from "./TodoList";
import Calander from "./Calander";
import { StoreOverview } from "./StoreOverview";
import RegisterNewUserModal from "./components/RegisterNewUserModal";
import axios from "axios";
import { path_url } from "../Config/config";

const DashboardV1 = () => {
  const [hamburger, sethamburger] = useState(true);
  const [isRightMenu, setisRightMenu] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
  const [status, setStatus] = useState("");

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

  // api call for getting status  of user and store data in the state variable 'status'
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const response = await axios.get(`${path_url}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const status = response.data.status;
        localStorage.setItem("status", status);
        setStatus(status);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  
  }, []);
  

  const handleclickonbutton1 = (hamburger) => {
    if (document.documentElement.clientWidth <= 800) {
      return { display: hamburger && "none" };
    }
  };
  return (
    <>
      {/* <Verify /> */}
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:200&display=swap"
        rel="stylesheet"
      />
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
          <div className="content-wrapper">
            <div className="content-header p-3">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0" style={{ "font-size": "1.8rem" }}>
                      Dashboard
                    </h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li
                        className="breadcrumb-item"
                        style={{ fontWeight: "600", "font-size": "1rem" }}
                      >
                        <a href="#">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item"
                        style={{ fontWeight: "600", "font-size": "1rem" }}
                      >
                        Dashboard v1
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className=" col-12 d-flex  justify-content-center">
                <div
                  className="  col-12 mt-2 d-flex row"
                  style={{ width: "100%" }}
                >
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <CrmDashboardsub
                      index={0}
                      name="New Order"
                      value="150"
                      icon="HiOutlineShoppingBag"
                      class="bg-info"
                    />
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <CrmDashboardsub
                      index={1}
                      name="Bounce rate"
                      value="53%"
                      icon="BiBarChart"
                      class="bg-success"
                    />
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <CrmDashboardsub
                      index={2}
                      name="User Registrations"
                      value="44"
                      icon="BiSolidUserPlus"
                      class="bg-warning"
                    />
                  </div>
                  <div className="col-sm-6 col-lg-3">
                    <CrmDashboardsub
                      index={3}
                      name="Unique Visitors"
                      value="65"
                      icon="IoMdPie"
                      class="bg-danger"
                    />
                  </div>
                </div>
              </div>
              <div className=" d-flex w-100 justify-content-center ">
                <div className=" row d-flex mb-4 mr-4 ml-4 pl-1 pr-1 w-100 ">
                  <div className="col-sm-6 mt-2 col-lg-6">
                    <div>
                      <SalesGraph />
                    </div>
                  </div>
                  <div className="col-sm-6 mt-2  col-lg-6 ">
                    <div>
                      <Calander />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" d-flex w-100 justify-content-center ">
                <div className="row d-flex mb-2 mr-4 ml-4 pl-1 pr-1 w-100">
                  <div className="col-sm-6 col-lg-6 ">
                    <TodoList />
                  </div>
                  <div className="col-sm-6 col-lg-6 ">
                    <StoreOverview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {status === "NEW" && <RegisterNewUserModal />}
    </>
  );
};

export default DashboardV1;
