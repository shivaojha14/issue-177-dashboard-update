import React, { useEffect, useState } from "react";
import "../../Style/RegisterNewUserModal.css";
import PaginationComponent from "./PaginationComponent";
import mv_gif1 from "../../Images/mv-gif1.gif";
import mv_gif2 from "../../Images/mv-gif2.gif";
import mv_gif3 from "../../Images/mv-gif3.gif";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Tooltip } from "@mui/material";
import countryData from "../../Utils/countryData.json";
import { path_url } from "../../Config/config";
import axios from "axios";

const RegisterNewUserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const nPages = 3;
  const [currentPageTransition, setCurrentPageTransition] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [pageContents, setPageContents] = useState([
    {
      image: mv_gif1,
      inputFields: [
        { name: "invoiceNumber", value: "" },
        { name: "invoiceString", value: "" },
        { name: "companyName", value: "" },
        { name: "address", value: "" },
        { name: "state", value: "" },
        { name: "country", value: "" },
        { name: "phoneNumber", value: "" },
        { name: "email", value: "" },
        { name: "currencies", value: "" },
        { name: "timezone", value: "" },
        { name: "businessHours", value: "" },
        { name: "logo", value: "" },
      ],
      inputFieldPlaceholders: [
        "Company invoice number",
        "Company invoice string",
        "Company name",
        "Company address",
        "Company state",
        "Company country",
        "Company phone number",
        "Company email",
        "Company currencies",
        "Company timezone",
        "Company businesshours",
        "Upload Company logo",
      ],
    },
    {
      image: mv_gif2,
      inputFields: [
        { name: "designation", value: "" },
        { name: "skill", value: "" },
        { name: "state", value: "" },
        { name: "country", value: "" },
        { name: "notes", value: "" },
        { name: "profile_photo", value: "" },
      ],
      inputFieldPlaceholders: [
        "Enter designation",
        "Enter skills",
        "Enter state",
        "Enter country",
        "Enter notes",
        "Upload Profile Picture",
      ],
    },
    {
      image: mv_gif3,
      inputFields: [
        { name: "invoiceFormat", value: "" },
        { name: "invoiceDueDayPeriod", value: "" },
        { name: "taskDueDayPeriod", value: "" },
        { name: "serviceRequestDueDayPeriod", value: "" },
        { name: "interactionRecordDueDayPeriod", value: "" },
        { name: "purchaseOrderDueDayPeriod", value: "" },
        { name: "quotationDueDayPeriod", value: "" },
        { name: "currency", value: "" },
        { name: "invoiceLogoFile", value: "" },
      ],
      inputFieldPlaceholders: [
        "Enter invoice format",
        "Enter invoice due day period",
        "Enter task due day period",
        "Enter service request due day period",
        "Enter interaction record due day period",
        "Enter purchase order due day period",
        "Enter quotation due day period",
        "Enter currency",
        "Upload invoice logo ",
      ],
    },
  ]);

  // update these below values if page contents state is modified (refering to pageContents.inputFields)
  const inputCountryIndex = 5;
  const inputCurrencyIndex = 8;
  const inputCountryIndex2 = 3;

  // this function is responsible for storing the user input
  const handleChange = (e, pageIndex, fieldIndex, countryIndex = null) => {
    try {
      const { value } = e.target;
      const updatedPageContents = [...pageContents];
      updatedPageContents[pageIndex].inputFields[fieldIndex].value = value;

      if (fieldIndex === inputCountryIndex && countryIndex !== null) {
        const currencyCode = countryData.countries[countryIndex].currency_code;
        updatedPageContents[pageIndex].inputFields[inputCurrencyIndex].value =
          currencyCode;
      }

      setPageContents(updatedPageContents);
      if (e.target.type === "file") {
        handleImageChange(e, pageIndex); // Call handleImage function for handling image files
      }
      console.log(pageContents[0].inputFields);
    } catch (error) {
      console.log(error);
      toast.error("Fill Data Correctly");
    }
  };

  const handleImageChange = (e, pageIndex) => {
    const file = e.target.files[0];
    if (!file) return;

    if (pageIndex === 0) {
      setCompanyLogo(file);
    } else {
      setProfilePhoto(file);
    }
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // formatting the data to match api request body
  const formatData = (adminId) => {
    const formData = {
      organization: {
        invoiceNumber: 0,
        invoiceString: "invoiceString_70f6fa156692",
        owneruserid: adminId,
        usercid: adminId,
        useradminid: adminId,
        companyName: pageContents[0].inputFields.find(
          ({ name }) => name === "companyName"
        ).value,
        address: pageContents[0].inputFields.find(
          ({ name }) => name === "address"
        ).value,
        state: pageContents[0].inputFields.find(({ name }) => name === "state")
          .value,
        country: pageContents[0].inputFields.find(
          ({ name }) => name === "country"
        ).value,
        phoneNumber: pageContents[0].inputFields.find(
          ({ name }) => name === "phoneNumber"
        ).value,
        email: pageContents[0].inputFields.find(({ name }) => name === "email")
          .value,
        currencies: pageContents[0].inputFields.find(
          ({ name }) => name === "currencies"
        ).value,
        timezone: pageContents[0].inputFields.find(
          ({ name }) => name === "timezone"
        ).value,
        active: false,
        companyLogo: pageContents[0].inputFields.find(
          ({ name }) => name === "logo"
        ).value,
        businesshours: pageContents[0].inputFields.find(
          ({ name }) => name === "businessHours"
        ).value,
      },
      profile: {
        useradminid: adminId,
        usercid: adminId,
        designation: pageContents[1].inputFields.find(
          ({ name }) => name === "designation"
        ).value,
        skill: pageContents[1].inputFields.find(({ name }) => name === "skill")
          .value,
        state: pageContents[1].inputFields.find(({ name }) => name === "state")
          .value,
        country: pageContents[1].inputFields.find(
          ({ name }) => name === "country"
        ).value,
        notes: pageContents[1].inputFields.find(({ name }) => name === "notes")
          .value,
        profilePhoto: pageContents[1].inputFields.find(
          ({ name }) => name === "profile_photo"
        ).value,
      },
      defaultValues: {
        useradminid: adminId,
        usercid: adminId,
        invoiceformat: pageContents[2].inputFields.find(
          ({ name }) => name === "invoiceFormat"
        ).value,
        invoicelogofile: pageContents[2].inputFields.find(
          ({ name }) => name === "invoiceLogoFile"
        ).value,
        invoiceduedayperiod: parseInt(
          pageContents[2].inputFields.find(
            ({ name }) => name === "invoiceDueDayPeriod"
          ).value
        ),
        taskduedayperiod: parseInt(
          pageContents[2].inputFields.find(
            ({ name }) => name === "taskDueDayPeriod"
          ).value
        ),
        servicerequestduedayperiod: parseInt(
          pageContents[2].inputFields.find(
            ({ name }) => name === "serviceRequestDueDayPeriod"
          ).value
        ),
        interactionrecordduedayperiod: parseInt(
          pageContents[2].inputFields.find(
            ({ name }) => name === "interactionRecordDueDayPeriod"
          ).value
        ),
        purchaseorderduedayperiod: parseInt(
          pageContents[2].inputFields.find(
            ({ name }) => name === "purchaseOrderDueDayPeriod"
          ).value
        ),
        quotationduedayperiod: parseInt(
          pageContents[2].inputFields.find(
            ({ name }) => name === "quotationDueDayPeriod"
          ).value
        ),
        currency: pageContents[2].inputFields.find(
          ({ name }) => name === "currency"
        ).value,
      },
    };

    return formData;
  };

  // this function will submit the form data using post method
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const adminId = localStorage.getItem("adminId");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const imgConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = formatData(adminId);

      const response = await axios.post(
        `${path_url}/profile/welcome/${adminId}`,
        formData,
        config
      );

      const orgId = response.data.body.orgId;
      const profileId = response.data.body.profileId;

      if (response.data.statusCodeValue === 200 && orgId && profileId) {
        // Send company logo image data
        const fileUpload1 = await axios.post(
          `${path_url}/profile/welcome/companylogo/${orgId}`,
          { companylogo: companyLogo },
          imgConfig
        );

        // Send profile photo image data
        const fileUpload2 = await axios.post(
          `${path_url}/profile/welcome/profile/${profileId}`,
          { profilePhoto: profilePhoto },
          imgConfig
        );

        if (
          fileUpload1.data.statusCodeValue === 200 &&
          fileUpload2.data.statusCodeValue === 200
        ) {
          toast.success("Data saved successfully");
          handleModal();
          return;
        }
      }
      // If code reaches here, it means there was a failure
      toast.error("Failed to submit data");
    } catch (error) {
      toast.error("Failed to Submit Data!");
    }
  };

  const getContentForPage = (page) => {
    return pageContents[page - 1];
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPageTransition("rotate-prev");
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setCurrentPageTransition("");
      }, 500);
    }
  };

  const goToNextPage = () => {
    if (currentPage < nPages) {
      setCurrentPageTransition("rotate-next");
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setCurrentPageTransition("");
      }, 500);
    }
  };

  //finding the last index of pageContents -> inputFields  array
  const inputFields = getContentForPage(currentPage).inputFields;
  const last_index = inputFields.length - 1;

  return (
    <div>
      <div style={{ textAlign: "center" }}></div>
      <Modal
        disableAutoFocus={true}
        open={isModalOpen}
        onClose={handleModal}
        style={{
          overflowY: "auto",
          maxHeight: "100%",
          margin: "auto",
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* title and page postion  */}
              <div className="title-row d-flex justify-content-between align-items-center">
                <h3>
                  {currentPage === 1
                    ? "Company Information"
                    : currentPage === 2
                    ? "Personal Profile"
                    : "Default values"}
                </h3>
                <div className="d-flex align-items-center">
                  <h3>
                    Step {currentPage} of {nPages}
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
              </div>

              {/* modal view contents  */}
              <div className={`container ${currentPageTransition}`}>
                <div className="row">
                  <div className="col-sm-6 p-0">
                    <button
                      className="carousel-control-prev"
                      onClick={goToPrevPage}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    {/* image for left side of modal  */}
                    <div className="img-container">
                      <img
                        src={getContentForPage(currentPage).image}
                        alt="image"
                      />
                    </div>
                  </div>

                  {/* form  for right side of modal  */}
                  <div className="data-row1 col-sm-6">
                    {getContentForPage(currentPage).inputFields.map(
                      (field, index) =>
                        // dropdowns
                        (currentPage === 1 &&
                          (index === inputCountryIndex ||
                            index === inputCurrencyIndex)) ||
                        (currentPage === 2 && index === inputCountryIndex2) ||
                        (currentPage === 3 && index === last_index - 1) ? (
                          // Dropdown for country field
                          <div className="country-dropdown " key={index}>
                            <select
                              className="form-control mb-2"
                              value={field.value}
                              onChange={(e) => {
                                let selectedCountryIndex =
                                  index === inputCountryIndex
                                    ? e.target.selectedIndex
                                    : null;
                                handleChange(
                                  e,
                                  currentPage - 1,
                                  index,
                                  --selectedCountryIndex
                                );
                              }}
                            >
                              <option value="">
                                {(currentPage === 1 &&
                                  index === inputCurrencyIndex) ||
                                currentPage === 3
                                  ? "Select Currency"
                                  : "Select Country"}
                              </option>
                              {(currentPage === 1 &&
                                index === inputCountryIndex) ||
                              (currentPage === 2 &&
                                index === inputCountryIndex2)
                                ? countryData.countries.map(
                                    (country, index) => (
                                      <option
                                        key={index}
                                        value={country.country_name}
                                      >
                                        {country.country_name}
                                      </option>
                                    )
                                  )
                                : // Currency options
                                  countryData.countries.map(
                                    (country, index) => (
                                      <option
                                        key={index}
                                        value={country.currency_code}
                                      >
                                        {country.currency_code}
                                      </option>
                                    )
                                  )}
                            </select>
                          </div>
                        ) : // Image input for last index
                        index === last_index ? (
                          <div className="image-holder" key={index}>
                            <label
                              htmlFor="myImage"
                              className="file-input-label"
                            >
                              {
                                getContentForPage(currentPage)
                                  .inputFieldPlaceholders[index]
                              }
                            </label>
                            <Tooltip
                              title={
                                getContentForPage(currentPage)
                                  .inputFieldPlaceholders[index]
                              }
                              classes={{ tooltip: "custom-tooltip" }}
                              placement="top"
                              // className="custom-tooltip"
                              arrow
                            >
                              <input
                                type="file"
                                name="myImage"
                                accept="image/*"
                                className="form-control mb-2 image-uploader"
                                onChange={(e) => {
                                  // console.log(event.target.files[0]);
                                  handleChange(e, currentPage - 1, index);
                                  // handleImage(e, currentPage - 1);
                                }}
                              />
                            </Tooltip>
                          </div>
                        ) : // Text area for second page and second last index
                        currentPage === 2 && index === last_index - 1 ? (
                          <textarea
                            key={index}
                            className="form-control mb-2"
                            placeholder={
                              getContentForPage(currentPage)
                                .inputFieldPlaceholders[index]
                            }
                            value={field.value}
                            onChange={(e) =>
                              handleChange(e, currentPage - 1, index)
                            }
                          />
                        ) : (
                          // Normal input for other fields
                          <input
                            key={index}
                            type="text"
                            placeholder={
                              getContentForPage(currentPage)
                                .inputFieldPlaceholders[index]
                            }
                            className="form-control mb-2"
                            value={field.value}
                            onChange={(e) =>
                              handleChange(e, currentPage - 1, index)
                            }
                          />
                        )
                    )}

                    {/* left and right page navigation buttons for carousel */}
                    <button
                      className="carousel-control-prev mobile-control-left-carousel d-block d-sm-none"
                      onClick={goToPrevPage}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      onClick={goToNextPage}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                {/* pagination component which shows page numbers  */}
                <div className="pagination-container">
                  {/* <PaginationComponent
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    nPages={nPages}
                  /> */}
                </div>
                {/* submit button */}
                {currentPage === 3 && (
                  <button
                    type="button"
                    className="btn btn-primary float-end"
                    onClick={() => handleSubmit()}
                  >
                    Save changes
                  </button>
                )}
              </div>

              {/* page postion indicators  */}
              <div className="carousel-indicators-container">
                <ol className="carousel-indicators">
                  {Array.from({ length: nPages }, (_, i) => (
                    <li
                      key={i}
                      data-slide-to={i}
                      className={i === currentPage - 1 ? "active" : ""}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Modal>
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
  );
};

export default RegisterNewUserModal;
