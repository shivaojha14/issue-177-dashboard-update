import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/CreateTask.css";
import { useNavigate } from "react-router-dom";


{
  
  // "readstatus": "N",
  // "subject": "M",
  // "duedate": "20",
  // "priority": "100",
  // "notes": "NA",
  // "status": "A",
  // "asignedto": "10",
  // "resolutionRemark": "NA",
  // "resolutionNotes": "NA",
  // "resolutionUserId":"0c5e4147-9c7e-4645-93ab-3db41c74eb09",
  // "serviceRequestType": "Complaints"
}


























const customerSchema = Yup.object().shape({
  duedate: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
});

function ServiceRequest() {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ];
    
      const options1 = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ];
    
      const options2 = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ];


  return (
    <Formik
      initialValues={{
        duedate: "",
        subject: "",
        notes: "",
      }}
      validationSchema={customerSchema}
      onSubmit={(values) => {
        try {
          const token = localStorage.getItem("accessToken");
          const response = axios.post(
            "http://localhost:8080/createtask",
            values,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data.statusCodeValue === 200) {
            // navigate("");
            {
              alert("form submitted successfully");
            }
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
              <div className="bg-white col-11">
                <div className="d-flex justify-content-center">
                  <div className="bg-warning col-11 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"></div>
                </div>

                <label className="ml-5 p-0 m-0">Create Service Request</label>

                <div className="border col-11 mt-1 ml-5 "></div>

                <div className="d-flex">
                  <div className="col-6 ">

                  <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Contact Name</strong>
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
                      <div className="col-8">
                        <button className="btn btn-warning btn-sm w-100 text-white "> Sachin</button>
                      </div>
                    </div>
















                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
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
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
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

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
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
                      <div className="col-8 d-flex px-2 m-0">
                        <div
                          className="col-12 m-0"
                          style={{ paddingLeft: "2px", paddingRight: "0px" }}
                        >
                          <div className="p-0 m-0 w-100 ">
                            <input
                              className="input-field date w-100 border"
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

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Priority</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="priority"
                          id="priority"
                          className="border w-100 pl-2"
                        >
                          <option value="Active">Normal</option>
                          {options2.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        {formik.touched.priority &&
                          formik.errors.priority && (
                            <span style={{ color: "red" }}>
                              {formik.errors.priority}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Status</strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="status"
                          id="status"
                          className="border w-100 pl-2"
                        >
                          <option value="Indiamart">Open</option>
                          {options1.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        {formik.touched.status &&
                          formik.errors.status && (
                            <span style={{ color: "red" }}>
                              {formik.errors.status}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>

                  <div className="col-6 pl-1">
                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 p-0 ">
                        <label
                          htmlFor=""
                          className="m-0 p-0 text-left"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Assigned To </strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="assignedto"
                          id="assignedto"
                          className="border w-100 pl-2"
                        >
                          <option value="Mobile">Sachin Choudhary</option>
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        {formik.touched.assignedto &&
                          formik.errors.assignedto && (
                            <span style={{ color: "red" }}>
                              {formik.errors.assignedto}
                            </span>
                          )}
                      </div>
                    </div> 

                    <div className="col-12 d-flex m-2  mb-3">
                      <div className="col-4 p-0 ">
                        <label
                          htmlFor=""
                          className="m-0 p-0 text-left"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Type </strong>
                        </label>
                      </div>
                      <div className="col-8">
                        <Field
                          as="select"
                          name="type"
                          id="type"
                          className="border w-100 pl-2"
                        >
                          <option value="Mobile">Customer Cell</option>
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Field>
                        {formik.touched.type &&
                          formik.errors.type && (
                            <span style={{ color: "red" }}>
                              {formik.errors.type}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className=" col-12 ml-1 mb-3 d-flex">
                      <div className="col-4  ">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Notes</strong>
                        </label>
                      </div>

                      <div className="col-8">
                        <textarea
                          className="border w-100 pl-2"
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

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>



            <div className="col-12 mt-2 d-flex justify-content-center">
              <div className="bg-white col-11 ">

                <label className="ml-5 p-0 m-0 mt-4">Resolution</label>

                <div className="border col-11 mt-1 ml-5 "></div>

                <div className="d-flex">
                  <div className="col-6 ">
                    <div className="col-12 d-flex m-2 mb-3">
                      <div className="col-4 d-flex justify-content-end">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Remark</strong>
                          
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="text"
                          className="w-100 border pl-2"
                          placeholder="Remark"
                          name="resolutionRemark"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.resolutionRemark}
                        />
                        {formik.touched.resolutionRemark &&
                          formik.errors.resolutionRemark && (
                            <span style={{ color: "red" }}>
                              {formik.errors.resolutionRemark}
                            </span>
                          )}
                      </div>
                    </div>



                    <div className=" col-12 ml-1 mb-3 d-flex">
                      <div className="col-4 d-flex justify-content-end ">
                        <label
                          htmlFor=""
                          className="m-0 p-0"
                          style={{ fontSize: 15 }}
                        >
                          <strong>Resolution</strong>
                        </label>
                      </div>

                      <div className="col-8">
                        <textarea
                          className="border w-100 pl-2"
                          id="resolutionNotes"
                          name="resolutionNotes"
                          rows={3}
                          placeholder="Resolution"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.resolutionNotes}
                        />
                      </div>
                    </div>














                    
                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>

                  <div className="col-6 pl-1">

                    <div className="col-12 d-flex m-2 mt-5 mb-3">
                      <div className="col-4 ">
                        <button className="btn btn-sm btn-light border">
                          Cancel
                        </button>
                      </div>
                      <div className="col-8 d-flex justify-content-end">
                        <button
                          className="btn btn-sm border btn-info "
                          style={{ backgroundColor: "" }}
                        >
                          Save
                        </button>
                      </div>
                    </div>

                    <div className="border col-12 ml-1 mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      )}
    </Formik>
  )
}

export default ServiceRequest