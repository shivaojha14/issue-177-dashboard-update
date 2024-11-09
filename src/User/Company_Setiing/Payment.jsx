import React from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/CreateTask.css";
import "../../Style/NewCustomer.css";
import { path_url } from "../../Config/config";

const customerSchema = Yup.object().shape({
  duedate: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
});
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
    {value:"Deferred"}
  ];

  const Enum= [
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
    { value: "NotApplicable" }

  
  ];
export default function General(){


    return(<>
   
          <Formik
            initialValues={{
              duedate: "",
              subject: "",
              notes: "",
              assign:"",
              asignedto:"",
              priority:"",
              status :""

            }}
            validationSchema={customerSchema}
            onSubmit={async(values) => {
              try {
                const token = localStorage.getItem("accessToken");
                const response = await axios.post(
                  `${path_url}/task`,
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
                  <div className="col-12 d-flex">
                    <div className="bg-white col-11 cont">
                    <div
                          style={{ boxShadow: "0 1px 0 lightgray" }}
                          className=" mt-2 col-12  elevation-2 mb-2"
                        >
                          <p
                            style={{ color: "gray" }}
                            className=" p-1 m-0 custom-font-size"
                          >
                            <strong>Payment</strong>
                          </p>
                        </div>
                        <br></br>
                      {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                      <div className="d-flex flex-wrap">
                        <div className="col-12 col-md-6 pl-0 pr-0">
                        <div className="col-12 col-sm-12 d-flex mb-2 pt-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg ">
                              <label
                                htmlFor=""
                                className="  "
                                style={{ fontSize: 15 }}
                              >
                                <strong>Allow Bank Payments</strong>
                              </label>
                            </div>
                            <div className="col-12 col-sm-8">
                            
<div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="customSwitches"/>
  <label class="custom-control-label" for="customSwitches"></label>
</div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="  "
                                style={{ fontSize: 15 }}
                              >
                                <strong>Bank Name</strong>
                               
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
                              
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="  "
                                style={{ fontSize: 15 }}
                              >
                                <strong>Bank Branch No.</strong>
                               
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
                              
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="  "
                                style={{ fontSize: 15 }}
                              >
                                <strong>Payment Account No.</strong>
                               
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
                              
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="  "
                                style={{ fontSize: 15 }}
                              >
                                <strong>Payment Routing No.</strong>
                               
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
                              
                            </div>
                          </div>
                          {/* <div className="border col-12 ml-1 mb-3"></div> */}
                        </div>

                        <div className="col-12 col-md-6 pl-0 pr-0">
                        <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="  "
                                style={{ fontSize: 15 }}
                              >
                                <strong>Giro No.</strong>
                               
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
                              
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 d-flex mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg ">
                              <label
                                htmlFor=""
                                className="m-0 p-0 text-right"
                                style={{ fontSize: 15 }}
                              >
                                <strong>Swift Code</strong>
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
                          <div className="col-12 col-sm-12 d-flex  mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                              <label
                                htmlFor=""
                                className="  "
                                style={{ fontSize: 15 }}
                              >
                                <strong>IBAN</strong>
                               
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
                              
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 d-flex mb-2">
                            <div className="col-12 col-sm-4 justify-content-end text-right-lg ">
                              <label
                                htmlFor=""
                                className=""
                                style={{ fontSize: 15 }}
                              >
                                <strong>Bank Account Position</strong>
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
                          
                          <div className="col-12 col-sm-12 d-flex pt-4">
                            <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                              <button className="btn btn-sm btn-light border rounded border-gray">
                                Cancel
                              </button>
                            </div>
                            <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                              <button  type="submit"
                                className="btn btn-sm border rounded border-gray btn-info "
                                style={{ backgroundColor: "rgba(52, 58, 64, 255)" }}
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
        
    </>);

}