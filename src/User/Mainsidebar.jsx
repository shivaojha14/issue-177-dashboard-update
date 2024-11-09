import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus, FaHeadSideGear } from "react-icons/fa";
import { PiGridNineFill } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import "../Style/MainSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoice,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default function MainSidebar({ hamburger, sethamburger }) {
  const [isComShow, setIsComShow] = useState(false);
  const handelComShow = () => {
    setIsComShow(!isComShow);
  };

  const [isShow, setIsShow] = useState(false);
  const handelShow = () => {
    setIsShow(!isShow);
  };

  const [isShowVen, setIsShowVen] = useState(false);
  const handelShowVen = () => {
    setIsShowVen(!isShowVen);
  };

  const [isShowEmail, setIsShowEmail] = useState(false);
  const handelShowEmail = () => {
    setIsShowEmail(!isShowEmail);
  };

  const [isShowInt, setIsShowInt] = useState(false);
  const handelShowInt = () => {
    setIsShowInt(!isShowInt);
  };
  const [isShowStock, setIsShowStock] = useState(false);
  const handelShowStock = () => {
    setIsShowStock(!isShowStock);
  };
  const [isShowSale, setIsShowSale] = useState(false);
  const handelShowSale = () => {
    setIsShowSale(!isShowSale);
  };
  const [isShowPur, setIsShowPur] = useState(false);
  const handelShowPur = () => {
    setIsShowPur(!isShowPur);
  };
  const [isShowSet, setIsShowSet] = useState(false);
  const handelShowSet = () => {
    setIsShowSet(!isShowSet);
  };
  const handleclickonbutton = (hamburger) => {
    return { display: !hamburger && "15.5rem" };
  };
  const handleclickonbutton1 = (hamburger) => {
    return { width: !hamburger && "3.7rem" };
  };
  const handleclickonbutton2 = (hamburger) => {
    return { fontSize: !hamburger && "1.2rem" };
  };

  const handleDropdown = (dropdownState, setDropdownState) => {
    return () => {
      // Close all dropdowns
      setIsComShow(false);
      setIsShow(false);
      setIsShowVen(false);
      setIsShowEmail(false);
      setIsShowInt(false);
      setIsShowStock(false);
      setIsShowSale(false);
      setIsShowPur(false);
      setIsShowSet(false);

      // Open the clicked dropdown
      setDropdownState(!dropdownState);
    };
  };
  // const [menuopened,setmenuopened]=useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
  };

  return (
    <>
      <div className="main-sidebar" style={handleclickonbutton1(hamburger)}>
        <div className="sidebar-container">
          <div
            className=" py-2 sidebar"
            style={{ borderBottom: "1px solid #4b545c" }}
          >
            <Link to="/crm-dashboard" className="d-flex brand-link">
              <div className="nav-icon fs-3">
                <PiGridNineFill />
              </div>
              <div
                className="navhead font-weight-light fs-5 ff"
                style={handleclickonbutton(hamburger)}
              >
                Dashboard
              </div>
            </Link>
          </div>
          {/* <div style={{ border: "1px solid gray" }}></div> */}

          <div
            className="mt-3 mb-2 d-flex pb-2 sidebar"
            style={{ borderBottom: "1px solid #4b545c" }}
          >
            <div className="nav-icon">
              <i className="fa fa-cubes fs-5" aria-hidden="true"></i>
            </div>
            <div className="">
              <Link
                to=""
                className="brand-link  fs-6"
                style={handleclickonbutton(hamburger)}
              >
                <div className="navhead ff">Marketing</div>
              </Link>
            </div>
          </div>
          {/* <div style={{ border: "0.5px solid gray" }}></div> */}

          <nav className="mt-2 sidebar">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isComShow, handelComShow)}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />

                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Customer</p>
                    <i
                      className={`${
                        isComShow
                          ? "fa fa-angle-down right"
                          : "fa fa-angle-left right"
                      }`}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${isComShow ? "menu-open" : "d-none"}`}
                  >
                    <Link to="/customer-dashboard" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Customer Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isComShow ? "menu-open" : "d-none"}`}
                  >
                    <Link to="/new-customer" className="nav-link-sub">
                      <FaUserPlus className="nav-icon" />
                      <p>New Customer</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShow, handelShow)}
                >
                  {/* <FaUserAlt
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  /> */}
                  <img
                    src="/assets/lead.png"
                    alt="lead"
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Lead</p>
                    <i
                      className={`${
                        isShow
                          ? "fa fa-angle-down right"
                          : "fa fa-angle-left right"
                      }`}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li className={`nav-item ${isShow ? "menu-open" : "d-none"}`}>
                    <Link to="/lead-dashboard" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Lead Dashboard</p>
                    </Link>
                  </li>
                  <li className={`nav-item ${isShow ? "menu-open" : "d-none"}`}>
                    <Link to="/new-lead" className="nav-link-sub">
                      <FaUserPlus className="nav-icon" />
                      <p>New Lead</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShowVen, handelShowVen)}
                >
                  <img
                    src="/assets/vendor.png"
                    alt="vendor"
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Vendor</p>
                    <i
                      className={`${
                        isShowVen
                          ? "fa fa-angle-down right"
                          : "fa fa-angle-left right"
                      }`}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${isShowVen ? "menu-open" : "d-none"}`}
                  >
                    <Link to="/vendor-dashboard" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Vendor Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowVen ? "menu-open" : "d-none"}`}
                  >
                    <Link to="/new-vendor" className="nav-link-sub">
                      <FaUserPlus className="nav-icon" />
                      <p>New Vendor</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShowEmail, handelShowEmail)}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Email</p>
                    <div>
                      <span class="badge badge-info right mr-1">6</span>
                      <i
                        className={`${
                          isComShow
                            ? "fa fa-angle-down right"
                            : "fa fa-angle-left right"
                        }`}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${
                      isShowEmail ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      {/* <HiOutlineMail className="nav-icon" /> */}
                      <img
                        src="/assets/emails.png"
                        alt="bulk-email"
                        className="nav-icon"
                      />
                      <p>Send Bulk Email</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowEmail ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
                      <p>Send Email</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/create-task" className="nav-link  ">
                  <i
                    className="fa fa-tasks nav-icon"
                    aria-hidden="true"
                    style={handleclickonbutton2(hamburger)}
                  ></i>
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p className="w-100">Task</p>
                    <div className="d-flex align-items-center">
                      <span
                        class="badge badge-info right"
                        style={{ marginRight: "10px" }}
                      >
                        6
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShowInt, handelShowInt)}
                >
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Interaction</p>
                    <div>
                      <span class="badge badge-info right mr-1">6</span>
                      <i
                        className={`${
                          isShowInt
                            ? "fa fa-angle-down right"
                            : "fa fa-angle-left right"
                        }`}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${isShowInt ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Interaction Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowInt ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="nav-icon"
                      />
                      <p>Search Interaction</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="" className="nav-link  ">
                  <i
                    className="fa fa-file-text nav-icon"
                    aria-hidden="true"
                    style={handleclickonbutton2(hamburger)}
                  ></i>
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p className="w-100">Service Request</p>
                    <div className="d-flex align-items-center">
                      <span
                        class="badge badge-info right"
                        style={{ marginRight: "10px" }}
                      >
                        6
                      </span>
                    </div>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShowStock, handelShowStock)}
                >
                  <FontAwesomeIcon
                    icon={faBoxesStacked}
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Inventory</p>
                    <div>
                      <span class="badge badge-info right mr-1">6</span>
                      <i
                        className={`${
                          isShowStock
                            ? "fa fa-angle-down right"
                            : "fa fa-angle-left right"
                        }`}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${
                      isShowStock ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FontAwesomeIcon
                        icon={faBoxesStacked}
                        className="nav-icon"
                      />
                      <p>View Stock</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowStock ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="/product" className="nav-link-sub">
                      <FontAwesomeIcon icon={faCartPlus} className="nav-icon" />
                      <p>Add Product</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShowSale, handelShowSale)}
                >
                  <img
                    src="/assets/sales.png"
                    alt="sales"
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Sales</p>
                    <div>
                      <span class="badge badge-info right mr-1">6</span>
                      <i
                        className={`${
                          isShowSale
                            ? "fa fa-angle-down right"
                            : "fa fa-angle-left right"
                        }`}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Invoice Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="/create-invoice" className="nav-link-sub">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        className="nav-icon"
                      />
                      <p>Create New Invoice</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Purchase Order Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        className="nav-icon"
                      />
                      <p>Create New Purchase Order</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Proforma Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        className="nav-icon"
                      />
                      <p>Create New Proforma Invoice</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Quotation Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      isShowSale ? "menu-open" : "d-none"
                    }`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FontAwesomeIcon
                        icon={faFileInvoice}
                        className="nav-icon"
                      />
                      <p>Create New Quotation</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShowPur, handelShowPur)}
                >
                  <img
                    src="/assets/cart.png"
                    alt="purchase"
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Purchase</p>
                    <div>
                      <span class="badge badge-info right mr-1">6</span>
                      <i
                        className={`${
                          isShowPur
                            ? "fa fa-angle-down right"
                            : "fa fa-angle-left right"
                        }`}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${isShowPur ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <img
                        src="/assets/dashboard.png"
                        alt="dashboard"
                        className="nav-icon"
                      />
                      <p>Expence Dashboard</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowPur ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FontAwesomeIcon
                        icon={faFileInvoiceDollar}
                        className="nav-icon"
                      />
                      <p>New Expence</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link"
                  onClick={handleDropdown(isShowSet, handelShowSet)}
                >
                  <FiSettings
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />
                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p>Setting</p>
                    <i
                      className={`${
                        isShowSet
                          ? "fa fa-angle-down right"
                          : "fa fa-angle-left right"
                      }`}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </Link>

                <ul className="sub-menu">
                  <li
                    className={`nav-item ${isShowSet ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FaUserAlt
                        className="nav-icon"
                        style={handleclickonbutton2(hamburger)}
                      />
                      <p>User Profile</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowSet ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FaUserPlus className="nav-icon" />

                      <p>Manage User</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowSet ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <i
                        className="fa fa-file-text nav-icon"
                        aria-hidden="true"
                        style={handleclickonbutton2(hamburger)}
                      ></i>
                      <p>Invoice Setting</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowSet ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FaTachometerAlt className="nav-icon" />
                      <p>HRM</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowSet ? "menu-open" : "d-none"}`}
                  >
                    <Link to="" className="nav-link-sub">
                      <FaUserPlus className="nav-icon" />
                      <p>Add Employee</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowSet ? "menu-open" : "d-none"}`}
                  >
                    <Link to="/my-settings" className="nav-link-sub">
                      <FiSettings className="nav-icon" />
                      <p>My Settings</p>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${isShowSet ? "menu-open" : "d-none"}`}
                  >
                    <Link to="/company-settings" className="nav-link-sub">
                      <i className="fa-solid fa-briefcase nav-icon"></i>
                      <p>Company Settings</p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link  "
                  onClick={handleSignOut}
                >
                  <RiCloseCircleLine
                    className="nav-icon"
                    style={handleclickonbutton2(hamburger)}
                  />

                  <div
                    className="navhead"
                    style={handleclickonbutton(hamburger)}
                  >
                    <p className="w-100">Sign Out</p>
                  </div>
                </Link>
              </li>

              <Outlet />
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
