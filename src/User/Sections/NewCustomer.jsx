import React, { useEffect } from "react";
import { useState } from "react";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import MainSidebar from "../Mainsidebar";
import { Formik, Field, useFormik, useFormikContext } from "formik";
import axios from "axios";
import "../../Style/NewCustomer.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { path_url } from "../../Config/config";
import SpeechToText from "../../AI/SpeechToText";
import EventDialog from "../components/EventDialog";

// import "../Style/LandingPage.css";

export default function NewCustomer() {
  const [hamburger, sethamburger] = useState(true);
  const [isRightMenu, setisRightMenu] = useState(true);
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [fullScreen, setFullScreen] = useState(true);
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
  const options = [
    { value: "option1", label: "Phone" },
    { value: "option2", label: "Email" },
  ];
  const Enum = [
    { value: "OPEN" },
    { value: "ATTEMPTEDCONTACT" },
    { value: "NOTENGAGED" },
    { value: "NEEDSFOLLOWUP" },
    { value: "WORKING" },
    { value: "NEWOPPORTUNITY" },
    { value: "QUALIFIED" },
    { value: "CONVERTTOCUSTOMER" },
    { value: "DISQUALIFIED" },
  ];
  const copyBillingToShipping = (formik) => {
    const { address1, address2, city, pincode, state, country } =
      formik.values.billingAddress;
    formik.setFieldValue("shippingAddress.address1", address1);
    formik.setFieldValue("shippingAddress.address2", address2);
    formik.setFieldValue("shippingAddress.city", city);
    formik.setFieldValue("shippingAddress.pincode", pincode);
    formik.setFieldValue("shippingAddress.state", state);
    formik.setFieldValue("shippingAddress.country", country);
  };

  function transformData(values) {
      const formattedData = {
        customer: {
            readstatus: "OPEN",
            companyname: values.companyname,
            firstname: values.firstname,
            lasttname: values.lastname,
            leadsource: values.leadsource,
            status: values.status,
            website: values.website,
            bestwaytocontact: values.bestwaytocontact,
            mobile: values.mobile,
            altphone: values.altphone,
            email: values.email,
            add1: values.billingAddress.address1,
            add2: values.billingAddress.address2,
            city: values.billingAddress.city,
            pincode: values.billingAddress.pincode,
            state: values.billingAddress.state,
            country: values.billingAddress.country,
            notes: values.notes,
            product: values.product,
            usercid: values.usercid,
            useradminid: values.useradminid,
            owner: values.owner,
        },
        billingAddress: {
            active: false,
            name: values.firstname + " " + values.lastname,
            address1: values.billingAddress.address1,
            address2: values.billingAddress.address2,
            city: values.billingAddress.city,
            state: values.billingAddress.state,
            pincode: values.billingAddress.pincode,
            country: values.billingAddress.country,
            useradminid: values.useradminid,
            usercid: values.usercid,
        },
        shippingAddress: {
            active: false,
            name: values.firstname + " " + values.lastname,
            address1: values.shippingAddress.address1,
            address2: values.shippingAddress.address2,
            city: values.shippingAddress.city,
            state: values.shippingAddress.state,
            pincode: values.shippingAddress.pincode,
            country: values.shippingAddress.country,
            useradminid: values.useradminid,
            usercid: values.usercid,
        }
      };
      return formattedData;
    }

  //getting data for source dropdown
  const [sourceData, setSourceData] = useState([]);
  useEffect(() => {
    const fetchSourceData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const adminId = localStorage.getItem("adminId");

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `${path_url}/events/source/archon/${adminId}`,
          config
        );
        console.log("Source API response", response);
        const data = response.data.body;
        setSourceData(data);
      } catch (error) {
        console.error("Error fetching source data:", error);
      }
    };
    fetchSourceData();
  }, []);

  //toggle for create event button
  const [showEventDialog, setShowEventDialog] = useState(false);

  return (
    <>
      <div className="con1 d-flex" >
        <div className="subcon1" style={handleclickonbutton1(hamburger)}>
          <MainSidebar hamburger={hamburger} sethamburger={sethamburger} />
        </div>
        <div className="subcon2" style={handleclickonbutton(hamburger)}>
          <UserNavbar
            hamburger={hamburger}
            sethamburger={sethamburger}
            isRightMenu={isRightMenu}
            handelRightMenuShow={handelRightMenuShow}
            handelShow={handelShow}
            isSearchShow={isSearchShow}
            handleScreenEnter={handleScreenEnter}
            handleScreenExit={handleScreenExit}
            fullScreen={fullScreen}
          />
          <div className="mt-2">
            <Formik
              initialValues={{
                readstatus: "..",
                firstname: "",
                lastname: "",
                companyname: "",
                mobile: null,
                altphone: null,
                email: "",
                website: "",
                billingAddress: {
                  address1: "",
                  address2: "",
                  city: "",
                  pincode: null,
                  state: "",
                  country: "",
                },
                shippingAddress: {
                  address1: "",
                  address2: "",
                  city: "",
                  pincode: null,
                  state: "",
                  country: "",
                },
                copyBillingToShipping: false,
                notes: "",
                bestwaycontact: "",
                leadsource: "",
                status: "",
                product: "Cosmetic",
                usercid: localStorage.getItem("userId"),
                useradminid: localStorage.getItem("adminId"),
                owner: localStorage.getItem("adminId"),
              }}
              onSubmit={async (values, { setFieldValue }) => {
                try {
                  const nameRegex = /^[a-zA-Z\s]{2,}$/;
                  const phoneNumberRegex = /^\d{10,15}$/;
                  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                  const pincodeRegex = /^\d{6}$/;
                  const stateCountryRegex = /^[a-zA-Z\s]+$/;
                  const addressRegex = /^[a-zA-Z0-9\s,.-]+$/;
              
                  const errors = [];
                  const req = [];
                  if (!values.firstname) { 
                    req.push("Name");
                  }
                  if (!values.mobile) {
                    req.push("Phone number");
                  }
                  if (!values.email) {
                    req.push("Email address");
                  }
              
                  // Validate mandatory fields
                  if (
                    (values.firstname && !nameRegex.test(values.firstname)) ||
                    (values.lastname && !nameRegex.test(values.lastname))
                  ) {
                    errors.push("Name");
                  }
                  if (values.mobile && !phoneNumberRegex.test(values.mobile)) {
                    errors.push("Phone number");
                  }
                  if (values.email && !emailRegex.test(values.email)) {
                    errors.push("Email address");
                  }
                  if (values.billingAddress.pincode && !pincodeRegex.test(values.billingAddress.pincode)) {
                    errors.push("pincode");
                  }
                  if (values.billingAddress.state && !stateCountryRegex.test(values.billingAddress.state)) {
                    errors.push("state name");
                  }
                  if (values.billingAddress.country && !stateCountryRegex.test(values.billingAddress.country)) {
                    errors.push("country name");
                  }
                  if (values.billingAddress.address && !addressRegex.test(values.billingAddress.address1)) {
                    errors.push("address format");
                  }
                  if (!values.status) {
                    values.status = 'OPEN';
                  }
              
                  if (req.length > 0) {
                    const reqMessage = req.join(", ") + " is required";
                    toast.error(reqMessage);
                  } else if (errors.length > 0) {
                    const errorMessage = "Invalid " + errors.join(", ");
                    toast.error(errorMessage);
                  } else {
                    if (!values.status) {
                      setFieldValue('status', 'OPEN');
                    }
                    const token = localStorage.getItem("accessToken");
                    const formattedData = transformData(values);
                    const response = await axios.post(`${path_url}/customer`, formattedData, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                      },
                    });
                    if (response.data.statusCodeValue === 200) {
                      toast.success("Form submitted successfully");
                      console.log(response.data);
                    } else {
                      toast.error(response.data.body);
                    }
                  }
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              {(formik) => (
                <form action="" onSubmit={formik.handleSubmit}>
                  <fieldset style={{ marginBottom: "5rem" }}>


                    <div className="col-12 d-flex justify-content-center" >
                      <div className="bg-white col-11 cont">
                         <div
                          style={{ boxShadow: "0 1px 1px lightgray" }}
                          className="d-flex flexDir-column mt-2 col-12 elevation-2 mb-2 justify-content-between"
                        >
                          <p
                            style={{ color: "gray" }}
                            className=" p-1 m-0 custom-font-size"
                          >
                            <strong>New Customer</strong>
                          </p>
                          <div className="d-flex input-with-speech"

                          >
                            <input
                              id="voice-input-box"
                              type="text"
                              placeholder="Voice input displayed here..."
                              disabled
                            ></input>
                            <SpeechToText inputId="voice-input-box" />
                          </div>
                        </div>

                        <div className="d-flex flex-wrap">
                          <div className="col-12 col-md-6 pl-0 pr-0">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Company Name</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Company Name"
                                  name="companyname"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.companyname}

                                  />
                                {formik.touched.companyname &&
                                  formik.errors.companyname && (
                                    <span style={{ color: "red"}}>
                                      {formik.errors.companyname}
                                    </span>
                                  )}
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15}}
                                >
                                  <strong>Name</strong>
                                  <sup
                                    style={{
                                      color: "red",
                                      top: 0,
                                      fontSize: 15,
                                      lineHeight: 0,
                                      position: "relative",
                                      verticalAlign: "baseline",
                                    }}
                                  >
                                    *
                                  </sup>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 justify-content-end">
                                <div className="col-sm-6 pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstname}


                                  />
                                  {formik.touched.firstname &&
                                    formik.errors.firstname && (
                                      <span style={{ color: "red" }}>
                                        {formik.errors.firstname}
                                      </span>
                                    )}
                                </div>
                                <div className="col-sm-6 justify-content-end forms">
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastname}


                                  />
                                </div>
                                <div className="p-0 m-0 d-flex justify-content-center">
                                  {formik.touched.lastname &&
                                    formik.errors.lastname && (
                                      <span style={{ color: "red" }}>
                                        {formik.errors.lastname}
                                      </span>
                                    )}
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Status</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 ">
                                <Field
                                  className="selectBox custom-select "
                                  as="select"
                                  name="status"
                                  id="status"
                                  defaultValue={Enum[0].value}

                                >
                                  {Enum.map((option) => (
                                    <option key={option.value} value={option.value}>
                                      {option.value}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Source</strong>
                                </label>
                              </div>
                              <div className="d-flex justify-content-between col-12 col-sm-8">
                                <div>
                                  <Field
                                    as="select"
                                    name="leadsource"
                                    id="leadsource"
                                    className="selectBox custom-select "
                                  // defaultValue={sourceData[0]}
                                  >
                                    <option value="0" selected>
                                      Select Option
                                    </option>
                                    {sourceData.map((item, index) => (
                                      <option key={index + 1} value={item}>
                                        {item}
                                      </option>
                                    ))}
                                  </Field>
                                </div>
                                <div>
                                  <div className="h-100 ml-2">
                                    <button
                                      type="button"
                                      className="btn btn-primary w-100 h-100"
                                      style={{
                                        fontSize: '10px'
                                      }}
                                      onClick={() => setShowEventDialog(true)}
                                    >
                                      CREATE EVENT
                                    </button>
                                  </div>
                                  {showEventDialog && (
                                    <EventDialog
                                      onClose={() => setShowEventDialog(false)}
                                    />
                                  )}
                                </div>

                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 pl-0 pr-0">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Best Way to Contact</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8">
                                <Field
                                  as="select"
                                  name="bestwaycontact"
                                  id="bestwaycontact"
                                  className="selectBox custom-select "
                                 >
                                  <option value="Mobile">Mobile</option>
                                  {options.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Mobile</strong>
                                  <sup
                                    style={{
                                      color: "red",
                                      top: 0,
                                      fontSize: 15,
                                      lineHeight: 0,
                                      position: "relative",
                                      verticalAlign: "baseline",
                                    }}
                                  >
                                    *
                                  </sup>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="number"
                                  placeholder="Mobile"
                                  name="mobile"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.mobile}
                                />
                                {formik.touched.mobile &&
                                  formik.errors.mobile && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.mobile}
                                    </span>
                                  )}
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Phone</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="number"
                                  placeholder="Phone"
                                  name="altphone"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.altphone}


                                />
                                {formik.touched.altphone &&
                                  formik.errors.altphone && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.altphone}
                                    </span>
                                  )}
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Email</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Email"
                                  name="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}

                                  value={formik.values.email}
                                />
                                {formik.touched.email &&
                                  formik.errors.email && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.email}
                                    </span>
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="bg-white col-11 mt-3 cont" >
                        <div className="d-flex justify-content-center">
                          <div
                            style={{ boxShadow: "0 1px 1px lightgray" }}
                            className=" col-12 m-1 mt-2  elevation-2 mb-3"
                          >
                            <p
                              style={{ color: "gray" }}
                              className=" p-1 m-0 custom-font-size"
                            >
                              <strong>Other Informations</strong>
                            </p>
                          </div>
                        </div>
                        {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                        <div className="d-flex flex-wrap">
                          <div className="col-12 col-md-6 pl-0 pr-0 ">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Department</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Department"
                                  name="department"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.department}

                                />
                                {formik.touched.department &&
                                  formik.errors.department && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.department}
                                    </span>
                                  )}
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Designation</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Designation"
                                  name="designation"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.designation}
                                />
                                {formik.touched.designation &&
                                  formik.errors.designation && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.designation}
                                    </span>
                                  )}
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Category</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Category"
                                  name="category"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.category}
                                />
                                {formik.touched.category &&
                                  formik.errors.category && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.category}
                                    </span>
                                  )}
                              </div>
                            </div>

                            {/* <div className="border col-12 ml-1 mb-3"></div> */}
                          </div>

                          <div className="col-12 col-md-6 pl-0 pr-0 ">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>ReportTo</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="ReportTo"
                                  name="reportTo"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.reportTo}
                                />
                                {formik.touched.reportTo &&
                                  formik.errors.reportTo && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.reportTo}
                                    </span>
                                  )}
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>GSTIN</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="GST Number"
                                  name="gstnumber"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.gstnumber}
                                />
                                {formik.touched.gstnumber &&
                                  formik.errors.gstnumber && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.gstnumber}
                                    </span>
                                  )}
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Website</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="https://abc.com/"
                                  name="website"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.website}
                                />
                                {formik.touched.website &&
                                  formik.errors.website && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.website}
                                    </span>
                                  )}
                              </div>
                            </div>

                            {/* <div className="border col-12 ml-1 mb-3"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                      <div className="bg-white col-11 mt-3 cont">
                        <div className="d-flex flex-wrap ">
                          <div className="col-12 col-md-6 pl-0 pr-0 ">
                            <div className="d-flex justify-content-center">
                              <div
                                style={{ boxShadow: "0 1px 1px lightgray" }}
                                className="col-12 m-1 mt-2 mb-4 elevation-2"
                              >
                                <p
                                  style={{ color: "gray" }}
                                  className=" p-1 m-0 custom-font-size"
                                >
                                  <strong>Billing Address</strong>
                                </p>
                              </div>
                            </div>
                            {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                            <div className="d-flex flex-wrap ">
                              <div className="col-12 col-md-12 pl-0 pr-0 ">
                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Address1</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="Address1"
                                      name="billingAddress.address1"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.billingAddress.address1
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Address2</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="Address2"
                                      name="billingAddress.address2"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.billingAddress.address2
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>City</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="City"
                                      name="billingAddress.city"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.billingAddress.city}
                                    />
                                    {formik.touched.billingAddress &&
                                      formik.touched.billingAddress.city &&
                                      formik.errors.billingAddress &&
                                      formik.errors.billingAddress.city && (
                                        <span style={{ color: "red" }}>
                                          {formik.errors.billingAddress.city}
                                        </span>
                                      )}
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Pincode</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="number"
                                      placeholder="Pincode"
                                      name="billingAddress.pincode"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.billingAddress.pincode
                                      }
                                    />
                                    {formik.touched.billingAddress &&
                                      formik.touched.billingAddress.pincode &&
                                      formik.errors.billingAddress &&
                                      formik.errors.billingAddress.pincode && (
                                        <span style={{ color: "red" }}>
                                          {formik.errors.billingAddress.pincode}
                                        </span>
                                      )}
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>State</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="State"
                                      name="billingAddress.state"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.billingAddress.state}
                                    />
                                    {formik.touched.billingAddress &&
                                      formik.touched.billingAddress.state &&
                                      formik.errors.billingAddress &&
                                      formik.errors.billingAddress.state && (
                                        <span style={{ color: "red" }}>
                                          {formik.errors.billingAddress.state}
                                        </span>
                                      )}
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Country</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="Country"
                                      name="billingAddress.country"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.billingAddress.country
                                      }
                                    />
                                    {formik.touched.billingAddress &&
                                      formik.touched.billingAddress.country &&
                                      formik.errors.billingAddress &&
                                      formik.errors.billingAddress.country && (
                                        <span style={{ color: "red" }}>
                                          {formik.errors.billingAddress.country}
                                        </span>
                                      )}
                                  </div>
                                </div>

                                {/* <div className="border col-12 ml-1 mb-3"></div> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 pl-0 pr-0 ">
                            <div className="d-flex col-md-12 justify-content-center">
                              <div
                                style={{ boxShadow: "0 1px 1px lightgray" }}
                                className="col-12 m-1 mt-2 mb-0  elevation-2"
                              >
                                <p
                                  style={{ color: "gray" }}
                                  className=" p-1 m-0 custom-font-size"
                                >
                                  <strong>Shipping Address</strong>
                                </p>
                              </div>
                            </div>
                            {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                            <div className="checkbox-container">
                              <input
                                id="checkBox"
                                className="checkbox-custom"
                                name="checkBox"
                                type="checkbox"
                                onChange={() => copyBillingToShipping(formik)}
                              />
                              <label
                                htmlFor="checkBox"
                                className="checkbox-custom-label"
                              >
                                Same as billing address
                              </label>
                            </div>

                            <div className="d-flex flex-wrap ">
                              <div className="col-12 col-md-12 pl-0 pr-0 ">
                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Address1</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="Address1"
                                      name="shippingAddress.address1"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.shippingAddress.address1
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Address2</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="Address2"
                                      name="shippingAddress.address2"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.shippingAddress.address2
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>City</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="City"
                                      name="shippingAddress.city"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={formik.values.shippingAddress.city}
                                    />
                                    {formik.touched.shippingAddress &&
                                      formik.touched.shippingAddress.city &&
                                      formik.errors.shippingAddress &&
                                      formik.errors.shippingAddress.city && (
                                        <span style={{ color: "red" }}>
                                          {formik.errors.shippingAddress.city}
                                        </span>
                                      )}
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Pincode</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="number"
                                      placeholder="Pincode"
                                      name="shippingAddress.pincode"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.shippingAddress.pincode
                                      }
                                    />
                                    {formik.touched.shippingAddress &&
                                      formik.touched.shippingAddress.pincode &&
                                      formik.errors.shippingAddress &&
                                      formik.errors.shippingAddress.pincode && (
                                        <span style={{ color: "red" }}>
                                          {
                                            formik.errors.shippingAddress
                                              .pincode
                                          }
                                        </span>
                                      )}
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>State</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="State"
                                      name="shippingAddress.state"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.shippingAddress.state
                                      }
                                    />
                                    {formik.touched.shippingAddress &&
                                      formik.touched.shippingAddress.state &&
                                      formik.errors.shippingAddress &&
                                      formik.errors.shippingAddress.state && (
                                        <span style={{ color: "red" }}>
                                          {formik.errors.shippingAddress.state}
                                        </span>
                                      )}
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12 d-flex mb-2">
                                  <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                    <label
                                      htmlFor=""
                                      className="m-0 p-0 text-left"
                                      style={{ fontSize: 15 }}
                                    >
                                      <strong>Country</strong>
                                    </label>
                                  </div>
                                  <div className="col-12 col-sm-8 forms">
                                    <input
                                      type="text"
                                      placeholder="Country"
                                      name="shippingAddress.country"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.shippingAddress.country
                                      }
                                    />
                                    {formik.touched.shippingAddress &&
                                      formik.touched.shippingAddress.country &&
                                      formik.errors.shippingAddress &&
                                      formik.errors.shippingAddress.country && (
                                        <span style={{ color: "red" }}>
                                          {
                                            formik.errors.shippingAddress
                                              .country
                                          }
                                        </span>
                                      )}
                                  </div>
                                </div>

                                {/* <div className="border col-12 ml-1 mb-3"></div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="bg-white col-11 mt-3 cont">
                        <div className="d-flex justify-content-center">
                          <div
                          >
                            <p
                              style={{ color: "gray" }}
                              className=" p-1 m-0 custom-font-size"
                            >
                              <strong>Notes</strong>
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 pl-0 pr-0 ">
                          <div className="col-12 col-sm-12 d-flex mb-2">
                            <div className="col-12 col-sm-12 forms">
                              <textarea
                                type="text"
                                id="notes"
                                name="notes"
                                rows={3}
                                placeholder="Notes"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.notes}


                              />
                            </div>
                          </div>

                          <div className="d-flex mb-2">
                            <div className="col-sm-6 d-flex justify-content-center p-2">
                              <button className="btn btn-sm btn-light border rounded border-gray">
                                Cancel
                              </button>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-center p-2">
                              <button
                                type="submit"
                                className="btn border rounded border-gray btn-info "

                              >
                                Save
                              </button>
                            </div>
                          </div>

                          {/* <div className="border col-12 ml-1 mb-3"></div> */}
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              )}
            </Formik>
          </div>

          <UserFooter />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </>
  );
}
