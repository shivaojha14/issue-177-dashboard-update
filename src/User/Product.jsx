import React from "react";
import { useState } from "react";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import MainSidebar from "./Mainsidebar";
import * as Yup from "yup";
import { Formik, Field, Form, useFormik } from "formik";
import axios from "axios";
import "../Style/NewCustomer.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { path_url } from "../Config/config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFormikContext } from "formik";

const productSchema = Yup.object().shape({
  productname: Yup.string().required("Required"),
  productcode: Yup.string().required("Required"),
  unitMeasure: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  productcategory: Yup.string().required("Required"),
  productstatus: Yup.string().required("Required"),
  buyingprice: Yup.number().required("Required"),
  sellingprice: Yup.number().required("Required"),
  stockQuantity: Yup.number().required("Required"),
  hsnCode: Yup.string().required("Required"),
  unitprice: Yup.number().required("Required"),
  notes: Yup.string(),
  type: Yup.string().required("Required"),
  discountPercentage: Yup.number(),
  gstGroupCode: Yup.string().required("Required"), // The new field
  fromState: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  gstDescription: Yup.string().required("Required"),
  igst: Yup.number().required("Required"),
  sgst: Yup.number().required("Required"),
  cgst: Yup.number().required("Required"),
  gstType: Yup.string().required("Required"),
});
export default function Product() {
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
  const navigate = useNavigate();
  const vendorId = useParams();

  const [existingProduct, setExistingProduct] = useState(0);

  const [products, setProducts] = useState([]);
  const [addProduct, setAddProduct] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState();

  useEffect(() => {
    // Fetch existing products from API and set them to 'products' state
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const adminId = localStorage.getItem("adminId");
        const response = await axios.get(
          `${path_url}/product/archon/${adminId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data.body); // Assuming the API returns an array of products
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (selectedProduct, setFieldValue) => {
    setFieldValue("productcode", selectedProduct.product.productcode);
    setFieldValue("unitMeasure", selectedProduct.product.unitMeasure);
    setFieldValue("description", selectedProduct.product.description);
    setFieldValue("productcategory", selectedProduct.product.productcategory);
    setFieldValue("productstatus", selectedProduct.product.productstatus);
    setFieldValue("buyingprice", selectedProduct.product.buyingprice);
    setFieldValue("sellingprice", selectedProduct.product.sellingprice);
    setFieldValue("stockQuantity", selectedProduct.product.stockQuantity);
    setFieldValue("hsnCode", selectedProduct.product.hsnCode);
    setFieldValue("unitprice", selectedProduct.product.unitprice);
    setFieldValue("type", selectedProduct.product.type);
    setFieldValue(
      "discountPercentage",
      selectedProduct.product.discountPercentage
    );
    setFieldValue("notes", selectedProduct.product.notes);
    setFieldValue("gstGroupCode", selectedProduct.gstRate.gstGroupCode);
    setFieldValue("fromState", selectedProduct.gstRate.fromState);
    setFieldValue("location", selectedProduct.gstRate.location);
    setFieldValue("gstDescription", selectedProduct.gstRate.description);
    setFieldValue("igst", selectedProduct.gstRate.igst);
    setFieldValue("sgst", selectedProduct.gstRate.sgst);
    setFieldValue("cgst", selectedProduct.gstRate.cgst);
    setFieldValue("gstType", selectedProduct.gstRate.type);
  };

  const uomOptions = {
    B15: "BAG 15",
    B25: "BAG 25",
    B50: "BAG 50",
    BBL: "Barrel - Liquid Measure",
    BOX: "Box",
    BRL: "BARREL",
    BSD: "Bushel - Dry Measure",
    CAN: "CAN",
    CCM: "Cubic Centimeters",
    CDM: "Cubic Decimeters",
    CG: "Centigrams",
    CHN: "Chain",
    CL: "Centiliters",
    CM: "Centimeters",
    CMM: "Cubic Millimeters",
    CRT: "CRATE",
    CS: "Case",
    CUF: "Cubic Feet",
    CUI: "Cubic Inches",
    CUM: "Cubic Meters",
    CUY: "Cubic Yards",
    DAY: "Days",
    DG: "Decigrams",
    DL: "Deciliters",
    DM: "Decimeters",
    DOZ: "Dozen",
    DRA: "Dram",
    DRM: "DRUM",
    EA: "Each",
    FOZ: "Fluid Ounce",
    FT: "Feet",
    G: "Grams",
    GAL: "Gallon - US Liquid Measure",
    GRP: "Grains",
    GRS: "Gross",
    GRT: "Grains - Troy",
    HUN: "Hundreds",
    IN: "Inches",
    KG: "Kilograms",
    KGF: "Kilograms of Force per CM",
    KL: "Kiloliters",
    KM: "Kilometers",
    KWH: "Kilowatt Hours",
    L: "Liters",
    LBS: "Pounds",
    LBT: "Pounds - Troy",
    LNK: "Link",
    LOT: "Batch Lot",
    LT: "Long Tons",
    M: "Meters",
    MDY: "Person Day",
    MG: "Milligrams",
    MHR: "Work Hour",
    MIL: "Miles",
    ML: "Milliliters",
    MM: "Millimeters",
    MMO: "Work Month",
    MT: "Metric Tons",
    MWK: "Work Week",
    OZT: "Ounces - Troy",
    PK: "Cello Pack",
    PKD: "Peck - Dry Measure",
    PL: "Pallet",
    PTD: "Pint - Dry Measure",
    PTL: "Pint - Liquid Measure",
    PWT: "Pennyweight - Troy",
    QTD: "Quart - Dry Measure",
    QTL: "Quart - Liquid Measure",
    SCM: "Square Centimeters",
    SDM: "Square Decimeters",
    SF: "Square Feet",
    SHT: "Short Ton",
    SHW: "Short Hundred Weight",
    SLV: "SLEEVE",
    SM: "Square Meters",
    SMM: "Square Millimeters",
    SQF: "Square Feet",
    SQI: "Square Inches",
    SQM: "Square Miles",
    SQY: "Square Yards",
    ST: "Short Tons",
    TON: "Tons",
    TRK: "TRUCK LOAD",
    TUB: "TUB",
    UNT: "Units (generic)",
    YD: "Yard",
  };

  const gstTypeOptions = ["HSN", "SAC"];

  const gstTypeOptionElements = gstTypeOptions.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  const handleAddProduct = () => {
    setAddProduct(true);
  };

  const uomOptionElements = Object.entries(uomOptions).map(([key, value]) => (
    <option key={key} value={key}>
      {value}
    </option>
  ));

  const formatData = (values) => {
    return {
      product: {
        useradminid: values.useradminid,
        usercid: values.usercid,
        customerid: null,
        vendorid: vendorId.id,
        owner: values.owner,
        productname: values.productname,
        productcode: values.productcode,
        unitMeasure: values.unitMeasure,
        description: values.description,
        productcategory: values.productcategory,
        productstatus: values.productstatus,
        buyingprice: values.buyingprice,
        sellingprice: values.sellingprice,
        stockQuantity: values.stockQuantity,
        hsnCode: values.hsnCode,
        unitprice: values.unitprice,
        notes: values.notes,
        type: values.type,
        discountPercentage: values.discountPercentage,
        discount: 0.0,
        discountPercentageEnabled: false,
      },
      gstRate: {
        gstGroupCode: values.gstGroupCode,
        hsnCode: values.hsnCode,
        fromState: values.fromState,
        location: values.location,
        igst: values.igst || 0.0,
        sgst: values.sgst || 0.0,
        cgst: values.cgst || 0.0,
        description: values.gstDescription,
        type: values.gstType,
        useradminid: values.useradminid,
        usercid: values.usercid,
      },
    };
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
          <div className="mt-2">
            <Formik
              initialValues={{
                productname: "", // New field for product name
                productcode: "",
                unitMeasure: "",
                description: "",
                productcategory: "",
                productstatus: "",
                buyingprice: 0,
                sellingprice: 0,
                stockQuantity: 0,
                gstGroupCode: "", //new fields
                fromState: "",
                location: "",
                gstDescription: "",
                igst: "",
                sgst: "",
                cgst: "",
                gstType: "", //new fields
                hsnCode: "",
                unitprice: 0,
                notes: "",
                type: "",
                discountPercentage: 0,
                usercid: localStorage.getItem("userId"),
                useradminid: localStorage.getItem("adminId"),
                owner: localStorage.getItem("adminId"),
              }}
              validationSchema={productSchema}
              onSubmit={async (values) => {
                try {
                  const token = localStorage.getItem("accessToken");
                  const formData = formatData(values);
                  const response = await axios.post(
                    `${path_url}/product`,
                    formData,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                      },
                    }
                  );

                  if (response.data.statusCodeValue === 200) {
                    toast.success("Form submitted successfully");
                  } else {
                    toast.error(response.data.body);
                  }
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <fieldset style={{ marginBottom: "5rem" }}>
                    <br></br>

                    <div className="col-12 d-flex justify-content-center">
                      <div className="bg-white col-11 cont">
                        <div
                          style={{ boxShadow: "0 1px 1px lightgray" }}
                          className=" mt-2 col-12  elevation-2 mb-2"
                        >
                          <p
                            style={{ color: "gray" }}
                            className=" p-1 m-0 custom-font-size"
                          >
                            <strong>New Product</strong>
                          </p>
                        </div>
                        <br></br>

                        <div className="d-flex flex-wrap">
                          <div className="col-12 col-md-6 pl-0 pr-0">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4  text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left "
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Name</strong>
                                </label>
                              </div>
                              <div className="col-sm-6 forms pl-0">
                                {addProduct ? (
                                  <input
                                    type="text"
                                    placeholder="Product Name"
                                    name="productname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.productname}
                                    required
                                  />
                                ) : (
                                  <Field
                                    className="selectBox custom-select"
                                    as="select"
                                    name="productname"
                                    id="productname"
                                    required
                                    onChange={(e) => {
                                      if (e.target.value === "Add Product") {
                                        handleAddProduct();
                                      } else {
                                        formik.handleChange(e);
                                        const selectedProduct = products.find(
                                          (p) =>
                                            p.product.productname ===
                                            e.target.value
                                        );
                                        if (selectedProduct) {
                                          setSelectedProductId(
                                            selectedProduct.product.id
                                          );
                                          setExistingProduct(
                                            selectedProduct.product
                                              .stockQuantity
                                          );
                                          handleProductSelect(
                                            selectedProduct,
                                            formik.setFieldValue
                                          );
                                        }
                                      }
                                    }}
                                  >
                                    <option value="">Select Product</option>
                                    {console.log(products)}
                                    {products?.map((p) => (
                                      <option
                                        key={p.product.productname}
                                        value={p.product.productname}
                                      >
                                        {p.product.productname}
                                      </option>
                                    ))}
                                    <option value="Add Product">
                                      Add Product
                                    </option>
                                  </Field>
                                )}
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4  text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong> Code</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Product Code"
                                    name="productcode"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.productcode}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 d-flex">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Unit Measure</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className="forms">
                                  <select
                                    placeholder="Unit Measure"
                                    name="unitMeasure"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.unitMeasure}
                                    required
                                    className="selectBox custom-select"
                                  >
                                    <option value="">
                                      Select Unit of Measure
                                    </option>
                                    {uomOptionElements}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <br />
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Description</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Description"
                                    name="description"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.description}
                                    required
                                  />
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
                                  <strong>Stock Quantity</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className="pb-1 forms">
                                  <span>{existingProduct}</span>
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
                                  <strong>Add Quantity</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className="pb-1 forms">
                                  <input
                                    type="number"
                                    placeholder="Add Quantity"
                                    name="stockQuantity"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.stockQuantity}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 col-md-6 pl-0 pr-0">
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
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Product Category"
                                    name="productcategory"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.productcategory}
                                    required
                                  />
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
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Product Status"
                                    name="productstatus"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.productstatus}
                                    required
                                  />
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
                                  <strong>Buying Price</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="number"
                                    placeholder="Buying Price"
                                    name="buyingprice"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.buyingprice}
                                    required
                                  />
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
                                  <strong>Selling Price</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="number"
                                    placeholder="Selling Price"
                                    name="sellingprice"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.sellingprice}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* gst rates input fields  */}
                    <div className="col-12 d-flex justify-content-center">
                      <div className="bg-white col-11 mt-3 cont">
                        <div className="d-flex justify-content-center">
                          <div
                            style={{ boxShadow: "0 1px 1px lightgray" }}
                            className="col-12 m-1 mt-2 mb-3  elevation-2"
                          >
                            <p
                              style={{ color: "gray" }}
                              className=" p-1 m-0 custom-font-size"
                            >
                              <strong>Gst Rates</strong>
                            </p>
                          </div>
                        </div>
                        {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                        <div className="d-flex flex-wrap ">
                          <div className="col-12 col-md-6 pl-0 pr-0 ">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Gst Group Code</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Gst Group Code"
                                    name="gstGroupCode"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gstGroupCode}
                                    required
                                  />
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
                                  <strong>State</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="State"
                                    name="fromState"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fromState}
                                    required
                                  />
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
                                  <strong>Location</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Location"
                                    name="location"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.location}
                                    required
                                  />
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
                                  <strong>Description</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className="pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Description"
                                    name="gstDescription"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gstDescription}
                                    required
                                  />
                                </div>
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
                                  <strong>IGST</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="number"
                                    placeholder="IGST value"
                                    name="igst"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.igst}
                                    required
                                  />
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
                                  <strong>SGST</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="number"
                                    placeholder="SGST value"
                                    name="sgst"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.sgst}
                                    required
                                  />
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
                                  <strong>CGST</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="number"
                                    placeholder="CGST value"
                                    name="cgst"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cgst}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 d-flex">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>Type</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex mb-2 p-0 ">
                                <div
                                  className="forms"
                                  style={{ width: "220px" }}
                                >
                                  <select
                                    placeholder="Select Type"
                                    name="gstType"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.gstType}
                                    required
                                    className="selectBox custom-select"
                                    style={{ width: "100%" }}
                                  >
                                    <option value="">Select Type</option>
                                    {gstTypeOptionElements}
                                  </select>
                                </div>
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
                            className="col-12 m-1 mt-2 mb-3  elevation-2"
                          >
                            <p
                              style={{ color: "gray" }}
                              className=" p-1 m-0 custom-font-size"
                            >
                              <strong>Additional Information</strong>
                            </p>
                          </div>
                        </div>
                        {/* <div className="border col-11 mt-1 ml-5 "></div> */}

                        <div className="d-flex flex-wrap ">
                          <div className="col-12 col-md-6 pl-0 pr-0 ">
                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-4 justify-content-end text-right-lg">
                                <label
                                  htmlFor=""
                                  className="m-0 p-0 text-left"
                                  style={{ fontSize: 15 }}
                                >
                                  <strong>HSN Code</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="HSN Code"
                                    name="hsnCode"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.hsnCode}
                                    required
                                  />
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
                                  <strong>Unit Price</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Unit Price"
                                    name="unitprice"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.unitprice}
                                    required
                                  />
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
                                  <strong>Type</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className=" pb-1 forms">
                                  <input
                                    type="text"
                                    placeholder="Type"
                                    name="type"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.type}
                                    required
                                  />
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
                                  <strong>Discount Percentage</strong>
                                </label>
                              </div>
                              <div className="col-12 col-sm-8 d-flex p-0 ">
                                <div className="pb-1 forms">
                                  <input
                                    type="number"
                                    placeholder="Discount Percentage"
                                    name="discountPercentage"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.discountPercentage}
                                    required
                                  />
                                </div>
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

                            <div className="col-12 col-sm-12 d-flex mb-2">
                              <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                                <button
                                  className="btn btn-sm btn-light border rounded border-gray"
                                  onClick={() => {
                                    navigate("/crm-dashboard");
                                  }}
                                >
                                  Cancel
                                </button>
                              </div>
                              <div className="col-12 col-sm-6 d-flex justify-content-center p-2">
                                <button
                                  type="submit"
                                  className="btn  border rounded border-gray btn-info "
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
