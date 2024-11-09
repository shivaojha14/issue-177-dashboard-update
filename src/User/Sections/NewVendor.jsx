import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainSidebar from "../Mainsidebar";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import "../../Style/NewVendor.css";
import { path_url } from "../../Config/config";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ImageToTextModal from "../components/ImageToTextModal";
import GroupCategory from "../components/GroupCategory";

function NewVendor() {
  

  const vendorId = useParams();

  const [loading, setLoading] = useState(true);
  const [myInitialValues, setMyInitialValues] = useState({
    // "readstatus":"...",
    // "product":"...",
    // "owner":"..."

    firstname: "",
    lastname: "",
    companyname: "",
    mobile: null,
    altphone: null,
    email: "",
    department: "",
    designation: "",
    category: "",
    reportTo: "",
    gstnumber: "",
    website: "",
    add1: "",
    add2: "",
    add3: "",
    city: "",
    pincode: null,
    state: "",
    country: "",
    notes: "",
    bestwaycontact: "",
    leadsource: "",
    status: "",
    groupCategory: "",
    usercid: localStorage.getItem("userId"),
    useradminid: localStorage.getItem("adminId"),
    owner: localStorage.getItem("adminId"),
  });

  const [hamburger, sethamburger] = useState(true);
  const [isRightMenu, setisRightMenu] = useState(false);
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
    { value: "DISQUALIFIED" },
    { value: "CONVERTTOCUSTOMER" },
  ];

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (vendorId.id) {
        const token = localStorage.getItem("accessToken");
        try {
          const response = await axios.get(
            `${path_url}/vendor/${vendorId.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log("setMyInitialValues",response);
          setMyInitialValues(response.data.body);
          setLoading(false);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
    };
    fetchData();
  }, [vendorId.id]);

  if (loading && vendorId.id) {
    return <div className="loader">Loading...</div>;
  }

 

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
          <div className="mt-2">
            <Formik
              initialValues={myInitialValues}
              onSubmit={async (values) => {
                console.log("Form values: ", values);
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
                  if (values.firstname && !nameRegex.test(values.firstname) || values.lastname && !nameRegex.test(values.lastname)) {
                    errors.push("Name");
                  }
                  if (values.mobile && !phoneNumberRegex.test(values.mobile)) {
                    errors.push("Phone number");
                  }
                  if (values.email && !emailRegex.test(values.email)) {
                    errors.push("Email address");
                  }

                  if (values.pincode && !pincodeRegex.test(values.pincode)) {
                    errors.push("Pincode");
                  }
                  if (values.state && !stateCountryRegex.test(values.state)) {
                    errors.push("State name");
                  }
                  if (values.country && !stateCountryRegex.test(values.country)) {
                    errors.push("Country name");
                  }
                  if (values.add1 && !addressRegex.test(values.add1)) {
                    errors.push("Address format");
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
                    const token = localStorage.getItem("accessToken");
                    const data = vendorId.id
                      ? { ...values, id: vendorId.id }
                      : values;
                    const response = await axios.post(
                      `${path_url}/vendor`,
                      data,
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                          "Content-Type": "application/json",
                        },
                      }
                    );

                    const isSuccess =
                      response &&
                      response.data &&
                      response.data.statusCodeValue === 200;
                    if (isSuccess) {
                      if (vendorId.id) {
                        console.log("update");
                        toast.success("data updated successfully");
                      } else {
                        console.log("new");
                        toast.success("form submitted successfully");
                      }
                    } else {
                      console.log(
                        "error",
                        response.data?.body || "Unknown error"
                      );
                    }
                  } 
                } catch (error) {
                  console.error("Error occurred:", error);
                }
              }}
            >
              {(formik) => (
                <form action="" onSubmit={formik.handleSubmit}>
                  <fieldset style={{ marginBottom: "5rem" }}>
                    <div className="col-12 d-flex justify-content-center">
                      <div className="bg-white col-11 cont">
                        <div className="d-flex justify-content-center">
                          <div
                            style={{ boxShadow: "0 1px 1px lightgray" }}
                            className="d-flex flexDir-column mt-2 col-12 elevation-2 mb-2 justify-content-between"
                          >
                            <p
                              style={{ color: "gray" }}
                              className=" p-1 m-0 custom-font-size"
                            >
                              <strong>
                                {vendorId.id ? "Update Vendor" : "New Vendor"}
                              </strong>
                            </p>
                            <div className="d-flex">
                              <input
                                type="file"
                                id="voice-input-box"
                                name="uploadfile"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <label
                                htmlFor="voice-input-box"
                                className="btn btn-outline-secondary"
                                style={{
                                  padding: "10px",
                                  borderRadius: "5px",
                                  border: "1px solid #ced4da",
                                  background: "#17A2B8",
                                  color: "#fff",
                                  cursor: "pointer",
                                }}
                              >
                                Scan Receipt
                              </label>
                            </div>
                          </div>
                          {file && <ImageToTextModal file={file} />}
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
                                  <strong>Company Name</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8  forms">
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
                                    <span style={{ color: "red" }}>
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
                                  style={{ fontSize: 15 }}
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
                                <div className="col-sm-6 pb-1  forms">
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
                              <div className="col-12 col-sm-8">
                                <Field
                                  as="select"
                                  name="status"
                                  id="status"
                                  className="selectBox custom-select "
                                  defaultValue={Enum[0].value}
                                >
                                  {Enum.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
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
                              <div className="col-12 col-sm-8">
                                <Field
                                  as="select"
                                  name="leadsource"
                                  id="leadsource"
                                  className="selectBox custom-select "
                                >
                                  <option value="Indiamart">Indiamart</option>
                                </Field>
                              </div>
                            </div>
                            {/* Group Category Field */}
                            <GroupCategory formik={formik} />
                          </div>

                          <div className="col-12 col-md-6 pl-0 pr-0">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
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

                            {/* <div className="border col-12 ml-1 mb-3"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                      <div className="bg-white col-11 mt-3 cont">
                        <div className="d-flex justify-content-center">
                          <div
                            style={{ boxShadow: "0 1px 1px lightgray" }}
                            className=" col-12 m-1 mt-2 mb-3  elevation-2"
                          >
                            <p
                              style={{ color: "gray" }}
                              className=" p-1 m-0 custom-font-size"
                            >
                              <strong>Other Informations</strong>
                            </p>
                          </div>
                        </div>
                        {/* <div className="border rounded border-gray col-11 mt-1 ml-5 "></div> */}

                        <div className="d-flex flex-wrap ">
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
                              <div className="col-12 col-sm-8  forms">
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
                        <div className="d-flex justify-content-center">
                          <div
                            style={{ boxShadow: "0 1px 1px lightgray" }}
                            className=" col-12 m-1 mt-2 mb-3 elevation-2"
                          >
                            <p className="text-white p-1 m-0 custom-font-size">
                              <strong>Address</strong>
                            </p>
                          </div>
                        </div>
                        {/* <div className="border rounded border-gray col-11 mt-1 ml-5 "></div> */}

                        <div className="d-flex flex-wrap ">
                          <div className="col-12 col-md-6 pl-0 pr-0 ">
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
                                  name="add1"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.add1}
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
                                  name="add2"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.add2}
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
                                  <strong>Address3</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 forms">
                                <input
                                  type="text"
                                  placeholder="Address3"
                                  name="add3"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.add3}
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
                                  name="city"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.city}
                                />
                                {formik.touched.city && formik.errors.city && (
                                  <span style={{ color: "red" }}>
                                    {formik.errors.city}
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
                                  name="pincode"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.pincode}
                                />
                                {formik.touched.pincode &&
                                  formik.errors.pincode && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.pincode}
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
                                  name="state"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.state}
                                />
                                {formik.touched.state &&
                                  formik.errors.state && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.state}
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
                                  name="country"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.country}
                                />
                                {formik.touched.country &&
                                  formik.errors.country && (
                                    <span style={{ color: "red" }}>
                                      {formik.errors.country}
                                    </span>
                                  )}
                              </div>
                            </div>

                            {/* <div className="border col-12 ml-1 mb-3"></div> */}
                          </div>

                          <div className="col-12 col-md-6 pl-0 pr-0">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Notes</strong>
                                </label>
                              </div>

                              <div className="col-12 col-sm-8 forms">
                                <textarea
                                  type="text"
                                  id="notes"
                                  name="notes"
                                  rows={5}
                                  placeholder="Notes"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.notes}
                                />
                              </div>
                            </div>

                            <div className="col-12 col-sm-12 d-flex m-2 mb-3">
                              <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                                <button className="btn btn-sm btn-light border rounded border-gray">
                                  Cancel
                                </button>
                              </div>
                              <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                                <button
                                  type="submit"
                                  className="btn btn-sm border rounded border-gray btn-info "
                                  style={{ backgroundColor: "" }}
                                >
                                  Save
                                </button>
                              </div>
                            </div>

                            {/* <div className="border col-12 ml-1 mb-3"></div> */}
                          </div>
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

export default NewVendor;
