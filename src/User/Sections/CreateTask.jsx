import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/CreateTask.css";
import "../../Style/NewCustomer.css";
import MainSidebar from "../Mainsidebar";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import { path_url } from "../../Config/config";

const customerSchema = Yup.object().shape({
  duedate: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
});

export default function CreateTask() {
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
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const Priority = [
    { value: "High" },
    { value: "Medium" },
    { value: "Low" },
    { value: "Critical" },
    { value: "Normal" },
    { value: "Emergency" },
    { value: "Deferred" },
  ];

  const Enum = [
    { value: "Open" },
    { value: "InProgress" },
    { value: "Pending" },
    { value: "Completed" },
    { value: "Canceled" },
    { value: "Deferred" },
    { value: "WaitingforCustomer" },
    { value: "WaitingforInternalReview" },
    { value: "Reassigned" },
    { value: "OnHold" },
    { value: "Overdue" },
    { value: "Scheduled" },
    { value: "NeedsMoreInformation" },
    { value: "Escalated" },
    { value: "Closed" },
    { value: "NotApplicable" },
  ];
  return (
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
            initialValues={{
              duedate: "",
              subject: "",
              notes: "",
              assign: "",
              asignedto: "",
              priority: "",
              status: "",
            }}
            validationSchema={customerSchema}
            onSubmit={async (values) => {
              try {
                const token = localStorage.getItem("accessToken");
                const response = await axios.post(`${path_url}/task`, values, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                });
                if (response.data.statusCodeValue === 200) {
                  // navigate("");

                  alert("form submitted successfully");
                } else {
                  toast.error(response.data.body);
                }
              } catch (errors) {
                console.log(errors);
              }

              console.log(values);
            }}
          >
            {(formik) => (
              <form action="" onSubmit={formik.handleSubmit}>
                <fieldset>
                  <div className="col-12 d-flex justify-content-center">
                    <div className="bg-white col-11 cont">
                      <div
                        style={{ boxShadow: "0 1px 1px lightgray" }}
                        className="d-flex justify-content-center mb-4"
                      >
                        <div
                          style={{ color: "gray" }}
                          className=" col-12 m-1 mt-2 rounded shadow-sm elevation-2 pt-1"
                        >
                          <p className="text-white p-1 m-0">
                            <strong>Create Task</strong>
                          </p>
                        </div>
                      </div>
                      {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                      <div className="d-flex flex-wrap">
                        <div className="col-12 col-md-6 pl-0 pr-0">
                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Subject</strong>
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
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                              />
                              {formik.touched.subject &&
                                formik.errors.subject && (
                                  <span style={{ color: "red" }}>
                                    {formik.errors.subject}
                                  </span>
                                )}
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Due Date:</strong>
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
                            <div className="col-12 col-sm-8 d-flex  ">
                              <div
                                className="col-12 m-0"
                                style={{
                                  paddingLeft: "2px",
                                  paddingRight: "0px",
                                }}
                              >
                                <div className="p-0 m-0 w-100  forms ">
                                  <input
                                    className="input-field date "
                                    type="date"
                                    placeholder=""
                                    name="duedate"
                                    value={formik.values.duedate}
                                    onChange={formik.handleChange}
                                  />
                                </div>
                                <div className="p-0 m-0 d-flex justify-content-center">
                                  {formik.touched.duedate &&
                                    formik.errors.duedate && (
                                      <span style={{ color: "red" }}>
                                        {formik.errors.duedate}
                                      </span>
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 d-flex mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Priority</strong>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8">
                              <Field
                                as="select"
                                name="priority"
                                id="priority"
                                className="selectBox custom-select "
                              >
                                <option value="Active">Select</option>
                                {Priority.map((option) => (
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
                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
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
                              >
                                <option value="Indiamart">Open</option>
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
                          {/* <div className="border col-12 ml-1 mb-3"></div> */}
                        </div>

                        <div className="col-12 col-md-6 pl-0 pr-0">
                          <div className="col-12 col-sm-12 d-flex mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg ">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Assigned To </strong>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8">
                              <Field
                                as="select"
                                name="assignedto"
                                id="assignedto"
                                className="selectBox custom-select "
                              >
                                <option value="Mobile">Sachin Choudhary</option>
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
                          <div className=" col-12 col-sm-12 d-flex mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Notes</strong>
                              </label>
                            </div>

                            <div className="col-12 col-sm-8  forms">
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

                          <div className="col-12 col-sm-12 d-flex mb-2">
                            <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                              <button className="btn btn-sm btn-light border rounded border-gray">
                                Cancel
                              </button>
                            </div>
                            <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                              <button
                                type="submit"
                                className="btn btn-sm border rounded border-gray btn-info "
                                style={{
                                  backgroundColor: "rgba(52, 58, 64, 255)",
                                }}
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
      </div>
    </div>
  );
}
