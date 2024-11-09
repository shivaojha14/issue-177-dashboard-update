import React, { useState } from "react";
import "../../Style/CustomizableSidebar.css";
import { Form } from "react-bootstrap";
import axios from "axios";
import { path_url } from "../../Config/config";

const colorOptions = [
  "Primary",
  "Warning",
  "Info",
  "Danger",
  "Success",
  "Indigo",
  "Lightblue",
  "Navy",
  "Purple",
  "Fuchsia",
  "Maroon",
  "Lime",
  "Teal",
  "Olive",
];

const CustomizableSidebar = () => {
  // Initial state object with keys matching form elements
  const [formState, setFormState] = useState({
    darkMode: false,
    headerOptionFixed: false,
    noBorder: false,
    sidebarCollapsed: false,
    sidebarFixed: true,
    sidebarMini: true,
    sidebarMiniMD: false,
    sidebarMiniXS: false,
    navFlatStyle: false,
    navLegacyStyle: false,
    navCompact: false,
    navChildIndent: false,
    navChildHideonCollapse: false,
    disableHoverFocusAutoExpand: false,
    footerFixed: false,
    bodySmallText: false,
    navbarSmallText: false,
    brandSmallText: false,
    sidebarNavSmallText: false,
    footerSmallText: false,
    navbarVariant: "navbarvariant_29f2c47203fc",
    accessColorVariant: "accesscolorvariant_92c8037f90d0",
    darkSidebarVariant: "darkSidebarVariant_c0b4f4a9ca1f",
    lightSidebarVariant: "LightSidebarVariant_4c95b14bdcbc",
    brandLogoVariant: "brandLogoVariant_cde54fafa514",
    multicolorChart: false,
  });

  // Function to handle changes in form inputs
  const handleInputChange = async (e) => {
    const { name, value, type, checked } = e.target;
    // Use spread operator to copy current state
    setFormState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value, // Update specific key with value
    }));

    // Prepare data to send in the POST request
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("adminId");
    const url = `${path_url}/uitheme`;

    const postData = {
      ...formState, // Include all current form state values
      useradminid: userId, // Add additional fields not in formState
      usercid: userId,
    };

    try {
      const response = await axios.post(url, postData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // Optionally, update formState with the response data if needed
      // setFormState(response.data);

      console.log("UI Theme updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating UI theme:", error);
      // Handle error state or logging as per your application's requirement
    }
  };

  const getOptionBackgroundColor = (colorName) => {
    const lowercaseColor = colorName.toLowerCase();
    const colorMap = {
      primary: "#007bff",
      warning: "#ffc107",
      info: "#17a2b8",
      danger: "#dc3545",
      success: "#28a745",
      indigo: "#6610f2",
      lightblue: "#add8e6",
      navy: "#001f3f",
      purple: "#6f42c1",
      fuchsia: "#f012be",
      maroon: "#800000",
      lime: "#00ff00",
      teal: "#008080",
      olive: "#808000",
    };

    return colorMap[lowercaseColor] || "transparent";
  };

  return (
    <div className="customizable-sidebar">
      <div className="title">
        <h4>Customize CRM</h4>
      </div>
      <div className="sidebar-content">
        <div className="check-boxes">
          <Form>
            <Form.Check
              type="checkbox"
              id="darkMode"
              label="Dark Mode"
              name="darkMode"
              checked={formState.darkMode}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="multiColorChart"
              label="Multi Color Chart"
              name="multicolorChart"
              checked={formState.multicolorChart}
              onChange={handleInputChange}
            />

            <p>Header Options</p>
            <Form.Check
              type="checkbox"
              id="headerFixed"
              label="Fixed"
              name="headerOptionFixed"
              checked={formState.headerOptionFixed}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="noBorder"
              label="No Border"
              name="noBorder"
              checked={formState.noBorder}
              onChange={handleInputChange}
            />

            <p>Sidebar Options</p>
            <Form.Check
              type="checkbox"
              id="sidebarCollapsed"
              label="Collapsed"
              name="sidebarCollapsed"
              checked={formState.sidebarCollapsed}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="sidebarFixed"
              label="Fixed"
              name="sidebarFixed"
              checked={formState.sidebarFixed}
              onChange={handleInputChange}
              defaultChecked
            />
            <Form.Check
              type="checkbox"
              id="sidebarMini"
              label="Sidebar Mini"
              name="sidebarMini"
              checked={formState.sidebarMini}
              onChange={handleInputChange}
              defaultChecked
            />
            <Form.Check
              type="checkbox"
              id="sidebarMiniMd"
              label="Sidebar Mini MD"
              name="sidebarMiniMD"
              checked={formState.sidebarMiniMD}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="sidebarMiniXs"
              label="Sidebar Mini XS"
              name="sidebarMiniXS"
              checked={formState.sidebarMiniXS}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="navFlatStyle"
              label="Nav Flat Style"
              name="navFlatStyle"
              checked={formState.navFlatStyle}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="navLegacyStyle"
              label="Nav Legacy Style"
              name="navLegacyStyle"
              checked={formState.navLegacyStyle}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="navCompact"
              label="Nav Compact"
              name="navCompact"
              checked={formState.navCompact}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="navChildIndent"
              label="Nav Child Indent"
              name="navChildIndent"
              checked={formState.navChildIndent}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="navChildHideOnCollapse"
              label="Nav Child Hide on Collapse"
              name="navChildHideonCollapse"
              checked={formState.navChildHideonCollapse}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="disableHoverFocusAutoExpand"
              label="Disable Hover/Focus Auto-Expand"
              name="disableHoverFocusAutoExpand"
              checked={formState.disableHoverFocusAutoExpand}
              onChange={handleInputChange}
            />

            <p>Footer Options</p>
            <Form.Check
              type="checkbox"
              id="footerFixed"
              label="Fixed"
              name="footerFixed"
              checked={formState.footerFixed}
              onChange={handleInputChange}
            />

            <p>Small Text Options</p>
            <Form.Check
              type="checkbox"
              id="smallTextBody"
              label="Body"
              name="bodySmallText"
              checked={formState.bodySmallText}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="smallTextNavbar"
              label="Navbar"
              name="navbarSmallText"
              checked={formState.navbarSmallText}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="smallTextBrand"
              label="Brand"
              name="brandSmallText"
              checked={formState.brandSmallText}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="smallTextSidebarNav"
              label="Sidebar Nav"
              name="sidebarNavSmallText"
              checked={formState.sidebarNavSmallText}
              onChange={handleInputChange}
            />
            <Form.Check
              type="checkbox"
              id="smallTextFooter"
              label="Footer"
              name="footerSmallText"
              checked={formState.footerSmallText}
              onChange={handleInputChange}
            />

            <p>Navbar Variants</p>
            <Form.Group controlId="navbarColor">
              <Form.Select
                aria-label="Select Navbar Color"
                name="navbarVariant"
                value={formState.navbarVariant}
                onChange={handleInputChange}
              >
                <option value="navbarvariant_29f2c47203fc">
                  Navbar Variant 1
                </option>
                <option value="navbarvariant_2ndvariant">
                  Navbar Variant 2
                </option>
                {/* Add more options as needed */}
              </Form.Select>
            </Form.Group>

            <p>Accent Color Variants</p>
            <Form.Group controlId="accentColor">
              <Form.Select
                aria-label="Select Accent Color"
                name="accessColorVariant"
                value={formState.accessColorVariant}
                onChange={handleInputChange}
              >
                <option value="accesscolorvariant_92c8037f90d0">
                  Accent Color Variant 1
                </option>
                <option value="accesscolorvariant_2ndvariant">
                  Accent Color Variant 2
                </option>
                {/* Add more options as needed */}
              </Form.Select>
            </Form.Group>

            <p>Dark Sidebar Variants</p>
            <Form.Group controlId="darkSidebar">
              <Form.Select
                aria-label="Select Dark Sidebar Color"
                name="darkSidebarVariant"
                value={formState.darkSidebarVariant}
                onChange={handleInputChange}
              >
                <option value="darkSidebarVariant_c0b4f4a9ca1f">
                  Dark Sidebar Variant 1
                </option>
                <option value="darkSidebarVariant_2ndvariant">
                  Dark Sidebar Variant 2
                </option>
                {/* Add more options as needed */}
              </Form.Select>
            </Form.Group>

            <p>Light Sidebar Variants</p>
            <Form.Group controlId="lightSidebar">
              <Form.Select
                aria-label="Select Light Sidebar Color"
                name="lightSidebarVariant"
                value={formState.lightSidebarVariant}
                onChange={handleInputChange}
              >
                <option value="LightSidebarVariant_4c95b14bdcbc">
                  Light Sidebar Variant 1
                </option>
                <option value="LightSidebarVariant_2ndvariant">
                  Light Sidebar Variant 2
                </option>
                {/* Add more options as needed */}
              </Form.Select>
            </Form.Group>

            <p>Brand Logo Variants</p>
            <Form.Group controlId="brandLogo">
              <Form.Select
                aria-label="Select Brand Logo Color"
                name="brandLogoVariant"
                value={formState.brandLogoVariant}
                onChange={handleInputChange}
              >
                <option value="brandLogoVariant_cde54fafa514">
                  Brand Logo Variant 1
                </option>
                <option value="brandLogoVariant_2ndvariant">
                  Brand Logo Variant 2
                </option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CustomizableSidebar;
