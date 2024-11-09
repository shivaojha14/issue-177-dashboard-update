import React, { useRef } from "react";
import { useState, useEffect } from "react";
import UserNavbar from "../UserNavbar";
import UserFooter from "../UserFooter";
import MainSidebar from "../Mainsidebar";
import visaImage from "../../Images/visa.png";
import mastercardImage from "../../Images/mastercard.png";
import paypalImage from "../../Images/paypal2.png";
import americanexpressImage from "../../Images/american-express.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/CreateInvoice.css";
import "../../Style/Print.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Select from "react-select";
import DatePicker, { ReactDatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toWords } from "number-to-words";
import { path_url } from "../../Config/config";
import axios from "axios";
import ESign from "../../Utils/ESign";

const CreateInvoice = () => {
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

  //Invoice Details
  const columnNames = [
    "S. No.",
    "Product Description",
    "HSN code",
    "UOM",
    "Qty",
    "Rate",
    "Amount",
    "Discount",
    "Taxable Value",
    "CGST Rate",
    "CGST Amount",
    "SGST Rate",
    "SGST Amount",
    "IGST Rate",
    "IGST Amount",
    "Total",
  ];
  const [rows, setRows] = useState([]);
  const [totalSubtotal, setTotalSubtotal] = useState(0);
  const [totalGrandtotal, setTotalGrandtotal] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [tax, setTax] = useState({
    cgstTax: 0,
    sgstTax: 0,
    igstTax: 0,
  });
  const [amountInWords, setAmountInWords] = useState("");
  const [packingCharges, setPackingCharges] = useState(0);
  const [freight, setFreight] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [senderData, setSenderData] = useState({
    name: "",
    address: "",
    gstin: "",
    state: "",
    code: "",
  });
  const [receiverData, setReceiverData] = useState({
    name: "",
    address: "",
    gstin: "",
    state: "",
    code: "",
  });
  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNo: "",
    invoiceDate: null,
    reverseCharge: false,
    state: "",
    code: "",
  });
  const [transportData, setTransportData] = useState({
    transportMode: "",
    vehicleNumber: "",
    date: null,
    place: "",
  });
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    bankAccNo: "",
    bankIFSC: "",
    termsAndConditions: "",
  });
  const [invoiceType, setInvoiceType] = useState({
    value: "original",
    label: "Original",
  });
  const options = [
    { value: "original", label: "Original" },
    { value: "duplicate", label: "Duplicate" },
    { value: "triplicate", label: "Triplicate" },
    { value: "extraOC", label: "Extra OC" },
  ];

  // state for ESign Modal
  const [lgShow, setLgShow] = useState(false);
  const sigCanvasRef = useRef(null);

  // Function to handle ESign Modal
  const handleESignModal = () => {
    setLgShow(true);
  };

  const handleCloseModal = () => {
    setLgShow(false);
  };

  // Function to handle form submission
  const handleSenderDataChange = (e) => {
    const { name, value } = e.target;
    setSenderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReceiverDataChange = (e) => {
    const { name, value } = e.target;
    setReceiverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInvoiceDetailsChange = (name, value) => {
    setInvoiceDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleTransportDataChange = (name, value) => {
    setTransportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePackingChargesChange = (e) => {
    setPackingCharges(e.target.value);
  };

  const handleFreightChange = (e) => {
    setFreight(e.target.value);
  };

  const handleInsuranceChange = (e) => {
    setInsurance(e.target.value);
  };

  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleInvoiceTypeChange = (selected) => {
    setInvoiceType(selected);
  };

  const handleProductSelection = (index, productId, productName) => {
    const product = data.body.productList.find((item) => item.id === productId);
    const gstRates = data.body.gstRateList.find(
      (item) => item.productid === productId
    );

    setRows((prevRows) => {
      const newRows = [...prevRows];
      const defaultHSN = "Default HSN";
      const defaultUOM = "Default UOM";

      const hsnCode = product ? product.hsnCode : defaultHSN;
      const uom = product ? product.unitMeasure : defaultUOM;
      const sellingPrice = product ? parseFloat(product.sellingprice) : 0;
      const discountPercentage = product
        ? parseFloat(product.discountPercentage) || 0
        : 0;

      newRows[index]["HSN code"] = hsnCode;
      newRows[index]["UOM"] = uom;
      newRows[index]["Rate"] = sellingPrice;
      newRows[index]["Discount"] = discountPercentage;

      newRows[index]["CGST Rate"] = gstRates.cgst;
      newRows[index]["SGST Rate"] = gstRates.sgst;
      newRows[index]["IGST Rate"] = gstRates.igst;

      return newRows;
    });
  };

  const handleInputChange = (index, key, value) => {
    setRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[index][key] = key === "subtotal" ? parseFloat(value) : value;

      if (key === "Qty" || key === "Discount" || key === "Rate") {
        const amount = newRows[index].Amount || 0;
        const discount = newRows[index].Discount || 0;
        newRows[index]["Taxable Value"] = amount - (discount / 100) * amount;
        setTotalSubtotal(calculateTotalTaxableValue());
      }

      setTax((prevTax) => ({
        ...prevTax,
        cgstTax: newRows.reduce(
          (sum, row) => sum + parseFloat(row["CGST Amount"] || 0),
          0
        ),
        sgstTax: newRows.reduce(
          (sum, row) => sum + parseFloat(row["SGST Amount"] || 0),
          0
        ),
        igstTax: newRows.reduce(
          (sum, row) => sum + parseFloat(row["IGST Amount"] || 0),
          0
        ),
      }));

      const totalTaxSum = newRows.reduce((sum, row) => {
        return (
          sum +
          parseFloat(row["CGST Amount"] || 0) +
          parseFloat(row["SGST Amount"] || 0) +
          parseFloat(row["IGST Amount"] || 0)
        );
      }, 0);
      setTotalTax(totalTaxSum);

      if (key === "Product Description" && value) {
        const productId = value.value; // Access the product ID
        const productName = value.label; // Access the product name
        handleProductSelection(index, productId, productName);
      }

      return newRows;
    });
  };

  const handlePrint = () => {
    const printWindow = window.open("", "target");
    const divToPrint = document.getElementById("to-print");
    if (divToPrint) {
      printWindow.document.write(divToPrint.innerHTML);
    }
    printWindow.print();
  };

  const handleDeleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
    toast.success("Product removed", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const calculateTotalTaxableValue = () => {
    const total = rows.reduce((total, row, index) => {
      const taxableValue = parseFloat(row["Taxable Value"]);

      return isNaN(taxableValue) ? total : total + taxableValue;
    }, 0);

    return typeof total === "number" ? total.toFixed(2) : "0.0";
  };

  const calculateTotalGrandtotal = () => {
    const grandtotal =
      parseFloat(totalSubtotal) +
      parseFloat(totalTax) +
      parseFloat(freight) +
      parseFloat(insurance) +
      parseFloat(packingCharges);
    const words = toWords(grandtotal);
    setAmountInWords(words.toUpperCase());
    setTotalGrandtotal(grandtotal);
  };

  const handleCalculation = () => {
    //do somethign
  };

  const handleSendRow = (index) => {
    handleInputChange(index, "isSent", true);
  };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        "S. No.": prevRows.length + 1,
        "Product Description": null,
        "HSN code": "",
        UOM: "",
        Qty: 0,
        Rate: 0,
        Amount: 0,
        Discount: 0,
        "Taxable Value": 0,
        "CGST Rate": 0,
        "CGST Amount": 0,
        "SGST Rate": 0,
        "SGST Amount": 0,
        "IGST Rate": 0,
        "IGST Amount": 0,
        Total: 0,
        isSent: false,
      },
    ]);
  };

  //product fetching
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("accessToken");
      const adminId = localStorage.getItem("adminId");
      try {
        const jsonData = await axios.get(
          `${path_url}/product/invoice/${adminId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(jsonData.data);
        console.log(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalGrandtotal();
  }, [totalSubtotal, totalTax, freight, insurance, packingCharges]);

  return (
    <>
      <div>
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

          <div style={{ marginBottom: "15%" }}>
            <div className="content-wrapper">
              {/* Invoice title*/}
              <section className="content-header">
                <div className="container-fluid">
                  <div className="row mb-2">
                    <div className="col-sm-6">
                      <h1>Invoice</h1>
                    </div>
                  </div>
                </div>
              </section>

              <section className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      {/* Invoice Note  */}
                      <div className="callout callout-info">
                        <h5>
                          <i className="fas fa-info"></i> Note:
                        </h5>
                        This page has been enhanced for printing. Click the
                        print button at the bottom of the invoice to test.
                      </div>

                      {/* Main content */}
                      <div className="invoice p-3 mt-3 mb-3" id="to-print">
                        {/* Company Name and Logo */}
                        <div className="row">
                          <div className="col-12 company-details">
                            <h4>
                              <i className="fas fa-globe"></i> Company Name, Inc
                              Ltd.
                              <small className="d-flex justify-content-end float-right">
                                Type:
                                {/* chages  */}
                                <Select
                                  value={invoiceType}
                                  onChange={handleInvoiceTypeChange}
                                  options={options}
                                  styles={{
                                    valueContainer: (provided) => ({
                                      ...provided,
                                      padding: "0px",
                                      fontSize: "16px",
                                    }),

                                    indicatorsContainer: (provided) => ({
                                      ...provided,
                                      "& > div": {
                                        padding: "0px !important",
                                      },
                                    }),
                                    control: (provided) => ({
                                      ...provided,
                                      minHeight: "0px",
                                    }),
                                  }}
                                />
                              </small>
                            </h4>
                          </div>
                          {/* /.col */}
                        </div>

                        {/* infomation row */}
                        <div className="row invoice-info">
                          {/* sender details  */}
                          <div className="col-sm-3 invoice-col">
                            <b>Details of Receiver</b>
                            <form className="form-container">
                              <label htmlFor="name">Name:</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Type here..."
                                value={senderData.name}
                                onChange={handleSenderDataChange}
                              />

                              <label htmlFor="address">Address:</label>
                              <textarea
                                rows="4"
                                cols="16"
                                id="address"
                                name="address"
                                placeholder="Type here..."
                                value={senderData.address}
                                onChange={handleSenderDataChange}
                              ></textarea>

                              <label htmlFor="gstin">GSTIN:</label>
                              <input
                                type="text"
                                id="gstin"
                                name="gstin"
                                placeholder="Type here..."
                                value={senderData.gstin}
                                onChange={handleSenderDataChange}
                              />

                              <div className="form-group">
                                <div className="form-section">
                                  <label htmlFor="state">State:</label>
                                  <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="Type here..."
                                    value={senderData.state}
                                    onChange={handleSenderDataChange}
                                  />
                                </div>

                                <div className="form-section">
                                  <label htmlFor="code">Code:</label>
                                  <input
                                    type="text"
                                    id="code"
                                    name="code"
                                    placeholder="Type here..."
                                    value={senderData.code}
                                    onChange={handleSenderDataChange}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>

                          {/* reciver details */}
                          <div className="col-sm-3 invoice-col">
                            <b>Details of Consignee</b>
                            <form className="form-container">
                              <label htmlFor="name">Name:</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Type here..."
                                value={receiverData.name}
                                onChange={handleReceiverDataChange}
                              />

                              <label htmlFor="address">Address:</label>
                              <textarea
                                rows="4"
                                cols="16"
                                id="address"
                                name="address"
                                placeholder="Type here..."
                                value={receiverData.address}
                                onChange={handleReceiverDataChange}
                              ></textarea>

                              <label htmlFor="gstin">GSTIN:</label>
                              <input
                                type="text"
                                id="gstin"
                                name="gstin"
                                placeholder="Type here..."
                                value={receiverData.gstin}
                                onChange={handleReceiverDataChange}
                              />

                              <div className="form-group">
                                <div className="form-section">
                                  <label htmlFor="state">State:</label>
                                  <input
                                    type="text "
                                    id="state"
                                    name="state"
                                    placeholder="Type here..."
                                    value={receiverData.state}
                                    onChange={handleReceiverDataChange}
                                  />
                                </div>

                                <div className="form-section">
                                  <label htmlFor="code">Code:</label>
                                  <input
                                    type="text "
                                    id="code"
                                    name="code"
                                    placeholder="Type here..."
                                    value={receiverData.code}
                                    onChange={handleReceiverDataChange}
                                  />
                                </div>
                              </div>
                            </form>
                          </div>

                          {/* invoice details  */}
                          <div className="col-sm-3 invoice-col">
                            <b>Invoice Details</b>
                            <form className="form-container">
                              <label htmlFor="invoiceNo">Invoice No:</label>
                              <input
                                type="text"
                                id="invoiceNo"
                                name="invoiceNo"
                                placeholder="Type here..."
                                value={invoiceDetails.invoiceNo}
                                onChange={(e) =>
                                  handleInvoiceDetailsChange(
                                    "invoiceNo",
                                    e.target.value
                                  )
                                }
                              />

                              <label htmlFor="invoiceDate">Invoice Date:</label>
                              <div className="invoice-datepicker hide-border">
                                <DatePicker
                                  id="invoiceDate"
                                  name="invoiceDate"
                                  selected={invoiceDetails.invoiceDate}
                                  onChange={(date) =>
                                    handleInvoiceDetailsChange(
                                      "invoiceDate",
                                      date
                                    )
                                  }
                                  dateFormat="dd/MM/yyyy"
                                  className="custom-datepicker"
                                  placeholderText="Select date"
                                />
                              </div>

                              <label htmlFor="reverseCharge">
                                Reverse Charge:
                              </label>
                              <Select
                                id="reverseCharge"
                                name="reverseCharge"
                                options={[
                                  { value: false, label: "No" },
                                  { value: true, label: "Yes" },
                                ]}
                                value={{
                                  value: invoiceDetails.reverseCharge,
                                  label: invoiceDetails.reverseCharge
                                    ? "Yes"
                                    : "No",
                                }}
                                onChange={(selectedOption) =>
                                  handleInvoiceDetailsChange(
                                    "reverseCharge",
                                    selectedOption.value
                                  )
                                }
                              />

                              <div className="form-group">
                                <div className="form-section">
                                  <label htmlFor="state">State:</label>
                                  <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="Type here..."
                                    value={invoiceDetails.state}
                                    onChange={(e) =>
                                      handleInvoiceDetailsChange(
                                        "state",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>

                                <div className="form-section">
                                  <label htmlFor="code">Code:</label>
                                  <input
                                    type="text"
                                    id="code"
                                    name="code"
                                    placeholder="Type here..."
                                    value={invoiceDetails.code}
                                    onChange={(e) =>
                                      handleInvoiceDetailsChange(
                                        "code",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </form>
                          </div>

                          {/* transport details  */}
                          <div className="col-sm-3 invoice-col">
                            <b>Transport Details</b>
                            <form className="form-container">
                              <label htmlFor="transportMode">
                                Transport Mode:
                              </label>
                              <input
                                type="text"
                                id="transportMode"
                                name="transportMode"
                                placeholder="Type here..."
                                value={transportData.transportMode}
                                onChange={(e) =>
                                  handleTransportDataChange(
                                    "transportMode",
                                    e.target.value
                                  )
                                }
                              />

                              <label htmlFor="vehicleNumber">
                                Vehicle Number:
                              </label>
                              <input
                                type="text"
                                id="vehicleNumber"
                                name="vehicleNumber"
                                placeholder="Type here..."
                                value={transportData.vehicleNumber}
                                onChange={(e) =>
                                  handleTransportDataChange(
                                    "vehicleNumber",
                                    e.target.value
                                  )
                                }
                              />

                              <label htmlFor="date">Date:</label>
                              <div className="invoice-datepicker hide-border">
                                <DatePicker
                                  id="date"
                                  name="date"
                                  selected={transportData.date}
                                  onChange={(date) =>
                                    handleTransportDataChange("date", date)
                                  }
                                  dateFormat="dd/MM/yyyy"
                                  className="custom-datepicker"
                                  placeholderText="Select date"
                                />
                              </div>

                              <label htmlFor="place">Place:</label>
                              <input
                                type="text"
                                id="place"
                                name="place"
                                placeholder="Type here..."
                                value={transportData.place}
                                onChange={(e) =>
                                  handleTransportDataChange(
                                    "place",
                                    e.target.value
                                  )
                                }
                              />
                            </form>
                          </div>
                        </div>

                        {/* Table row */}
                        <div className="horizontal-fix">
                          <div>
                            <table>
                              <thead>
                                <tr className="table-row">
                                  {columnNames.slice(0, 9).map((value) => (
                                    <th key={value} rowSpan={2}>
                                      {value}
                                    </th>
                                  ))}
                                  <th colSpan={2}>CGST</th>
                                  <th colSpan={2}>SGST</th>
                                  <th colSpan={2}>IGST</th>
                                  {columnNames.slice(15).map((value) => (
                                    <th key={value} rowSpan={2}>
                                      {value}
                                    </th>
                                  ))}
                                </tr>
                                <tr className="table-row">
                                  {columnNames.slice(9, 11).map((value) => (
                                    <th key={value}>{value}</th>
                                  ))}
                                  {columnNames.slice(11, 13).map((value) => (
                                    <th key={value}>{value}</th>
                                  ))}
                                  {columnNames.slice(13, 15).map((value) => (
                                    <th key={value}>{value}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {rows.map((row, index) => (
                                  <tr className="table-row" key={index}>
                                    <td className="input-cell">
                                      <input
                                        type="number"
                                        value={row["S. No."]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "S. No.",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <Select
                                        value={row["Product Description"]}
                                        onChange={(value) =>
                                          handleInputChange(
                                            index,
                                            "Product Description",
                                            value
                                          )
                                        }
                                        options={data.body.productList.map(
                                          (product) => ({
                                            value: product.id,
                                            label: product.productname,
                                            productDetails: product,
                                          })
                                        )}
                                        placeholder="Select Product"
                                        isSearchable
                                        className="custom-select-container"
                                        classNamePrefix="custom-select"
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row["HSN code"]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "HSN code",
                                            e.target.value
                                          )
                                        }
                                        style={{ minWidth: "80px" }}
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row.UOM}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "UOM",
                                            e.target.value
                                          )
                                        }
                                        style={{ minWidth: "50px" }}
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="number"
                                        value={row.Qty}
                                        onChange={(e) => {
                                          const newQty =
                                            parseInt(e.target.value, 10) || 0;
                                          handleInputChange(
                                            index,
                                            "Qty",
                                            newQty
                                          );
                                          const newAmount = newQty * row.Rate;
                                          handleInputChange(
                                            index,
                                            "Amount",
                                            newAmount
                                          );
                                        }}
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row.Rate}
                                        onChange={(e) => {
                                          const newRate =
                                            parseFloat(e.target.value) || 0;
                                          handleInputChange(
                                            index,
                                            "Rate",
                                            newRate
                                          );
                                          const newAmount = row.Qty * newRate;
                                          handleInputChange(
                                            index,
                                            "Amount",
                                            newAmount
                                          );
                                        }}
                                        style={{ minWidth: "50px" }}
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row.Amount}
                                        readOnly
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row.Discount}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "Discount",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row.Amount - row.Discount}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "Taxable Value",
                                            (row["Taxable Value"] =
                                              e.target.value)
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row["CGST Rate"]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "CGST Rate",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row["CGST Amount"]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "CGST Amount",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row["SGST Rate"]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "SGST Rate",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row["SGST Amount"]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "SGST Amount",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row["IGST Rate"]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "IGST Rate",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row["IGST Amount"]}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "IGST Amount",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="input-cell">
                                      <input
                                        type="text"
                                        value={row.subtotal}
                                        onChange={(e) =>
                                          handleInputChange(
                                            index,
                                            "subtotal",
                                            e.target.value
                                          )
                                        }
                                      />
                                    </td>
                                    <td>
                                      <button
                                        className="upload-button"
                                        onClick={() => handleSendRow(index)}
                                      >
                                        {row.isSent ? (
                                          <i
                                            class="fa fa-check"
                                            aria-hidden="true"
                                          ></i>
                                        ) : (
                                          <i
                                            class="fa fa-cloud-upload"
                                            aria-hidden="true"
                                          ></i>
                                        )}
                                      </button>
                                    </td>
                                    <td>
                                      <button
                                        className="delete-button"
                                        onClick={() => handleDeleteRow(index)}
                                      >
                                        <i
                                          class="fa fa-trash"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {/* add row button */}
                            <button className="addButton" onClick={addRow}>
                              Add Product
                            </button>
                            <button
                              className="addButton"
                              onClick={handleCalculation}
                              style={{ marginLeft: "10px" }}
                            >
                              Calculate Tax
                            </button>
                          </div>
                          {/* /.col */}
                        </div>

                        {/* payments and total section */}
                        <div className="row payment-details">
                          <div className="col-lg-6">
                            {/* amount in words  */}
                            <div className="to-words">
                              <h3>Total Invoice Amount in Words</h3>
                              <p>Rs. {amountInWords} RUPEES ONLY/-</p>
                            </div>
                            {/* bank details form  */}
                            <div className="bank-details-form">
                              <h2>Bank Details</h2>
                              <div className="floating-label-group">
                                <input
                                  type="text"
                                  id="bankName"
                                  name="bankName"
                                  value={bankDetails.bankName}
                                  onChange={handleBankDetailsChange}
                                  className="form-control"
                                  placeholder=" "
                                  required
                                />
                                <label className="floating-label">
                                  Bank Name
                                </label>
                              </div>
                              <div className="floating-label-group">
                                <input
                                  type="text"
                                  id="bankAccNo"
                                  name="bankAccNo"
                                  value={bankDetails.bankAccNo}
                                  onChange={handleBankDetailsChange}
                                  className="form-control"
                                  placeholder=" "
                                  required
                                />
                                <label className="floating-label">
                                  Bank Account Number
                                </label>
                              </div>
                              <div className="floating-label-group">
                                <input
                                  type="text"
                                  id="bankIFSC"
                                  name="bankIFSC"
                                  value={bankDetails.bankIFSC}
                                  onChange={handleBankDetailsChange}
                                  className="form-control"
                                  placeholder=" "
                                  required
                                />
                                <label className="floating-label">
                                  Bank IFSC
                                </label>
                              </div>
                              <div className="floating-label-group">
                                <textarea
                                  id="termsAndConditions"
                                  name="termsAndConditions"
                                  value={bankDetails.termsAndConditions}
                                  onChange={handleBankDetailsChange}
                                  className="form-control"
                                  placeholder=" "
                                  required
                                />
                                <label className="floating-label">
                                  Terms and Conditions
                                </label>
                              </div>
                            </div>
                            {/* accepted payments column */}
                            <p className="lead mb-2">
                              Payment Methods:
                              <img src={visaImage} alt="Visa" />
                              <img src={mastercardImage} alt="Mastercard" />
                              <img
                                src={americanexpressImage}
                                alt="American Express"
                              />
                              <img src={paypalImage} alt="Paypal" />
                            </p>
                          </div>
                          {/* /.col */}
                          {/* total summary table  */}
                          <div className="col-lg-6">
                            <div className="table-responsive">
                              <table className="table">
                                <tr>
                                  <th style={{ width: "50%" }}>
                                    Total Amount before Tax:
                                  </th>
                                  <td>Rs. {totalSubtotal || 0}</td>
                                </tr>
                                <tr>
                                  <th>Total CGST</th>
                                  <td>Rs. {tax.cgstTax || 0}</td>
                                </tr>
                                <tr>
                                  <th>Total SGST</th>
                                  <td>Rs. {tax.sgstTax || 0}</td>
                                </tr>
                                <tr>
                                  <th>Total IGST</th>
                                  <td>Rs. {tax.igstTax || 0}</td>
                                </tr>
                                <tr>
                                  <th>Total Tax Amount</th>
                                  <td>Rs. {totalTax || 0}</td>
                                </tr>
                                <tr>
                                  <th>Freight</th>
                                  <td>
                                    Rs.
                                    <input
                                      type="text"
                                      value={freight}
                                      onChange={handleFreightChange}
                                      style={{
                                        background: "transparent",
                                        border: "none",
                                      }}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th>Insurance</th>
                                  <td>
                                    Rs.
                                    <input
                                      type="text"
                                      value={insurance}
                                      onChange={handleInsuranceChange}
                                      style={{
                                        background: "transparent",
                                        border: "none",
                                      }}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th>Packing and Forwarding Charges</th>
                                  <td>
                                    Rs.
                                    <input
                                      type="text"
                                      value={packingCharges}
                                      onChange={handlePackingChargesChange}
                                      style={{
                                        background: "transparent",
                                        border: "none",
                                      }}
                                    />
                                  </td>
                                </tr>
                                <tr
                                  style={{
                                    fontSize: "1.5em",
                                    fontWeight: "bold",
                                  }}
                                >
                                  <th>GrandTotal</th>
                                  <td>Rs. {totalGrandtotal || 0}</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          {/* /.col */}
                        </div>
                        {/* /.row */}

                        {/* this row will not appear when printing */}
                        <div className="row no-print">
                          <div className="col-12">
                            <a
                              href="#"
                              rel="noopener"
                              target="_blank"
                              onClick={handlePrint}
                            >
                              <i className="fas fa-print"></i> Print
                            </a>
                            <div className="d-block d-md-flex justify-content-end">
                              <button
                                type="button"
                                className="btn btn-success col-12 col-md-auto mb-2 mb-md-0"
                                onClick={() => {
                                  toast.success(
                                    "Payment submitted successfully!"
                                  );
                                }}
                              >
                                <i className="far fa-credit-card"></i> Submit
                                Payment
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary col-12 col-md-auto mb-2 mb-md-0 ml-md-2"
                                onClick={() => {
                                  toast.info("PDF generated successfully!");
                                }}
                              >
                                <i className="fas fa-download"></i> Generate PDF
                              </button>
                              <button
                                type="button"
                                className="btn btn-info col-12 col-md-auto ml-md-2"
                                onClick={handleESignModal}
                              >
                                <i className="fas fa-pencil"></i> E-Sign
                              </button>
                              <ESign
                                show={lgShow}
                                handleClose={handleCloseModal}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.invoice */}
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.container-fluid */}
              </section>
              {/* /.content */}
            </div>
            {/* /.content-wrapper */}
          </div>

          <UserFooter />
          <ToastContainer
            position="top-right"
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
};

export default CreateInvoice;
