import React, { useEffect, useState } from "react";
import ss4 from "../../Images/ss4.PNG";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import "../../Style/CrmDashboard.css";
import { path_url } from "../../Config/config";
import axios from "axios";
import VendorDashboardSub from "./VendorDashboardSub";
import VendorDashboardTable from "./VendorDashboardTable";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);

const VendorDashboardPage = () => {
  const [vendorList, setVendorList] = useState([]);
  const [vendorCountByStatus, setVendorCountByStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [totalVendorInCurrentMonth, setTotalVendorInCurrentMonth] = useState(
    {}
  );
  const [
    totalVendorAddedByMonthInCurrentYear,
    setTotalVendorAddedByMonthInCurrentYear,
  ] = useState({});
  const [convertedVendor, setConvertedVendor] = useState(null);
  const [totalVendor, setTotalVendor] = useState(null);
  const [activeVendor, setActiveVendor] = useState(null);
  const [inactiveVendor, setInactiveVendor] = useState(null);

  let userData = [
    {
      id: 1,
      year: 2021,
      UserGain: 1210,
      UserLoss: 1300,
    },
    {
      id: 2,
      year: 2022,
      UserGain: 970,
      UserLoss: 1300,
    },
    {
      id: 3,
      year: 2023,
      UserGain: 640,
      UserLoss: 1300,
    },
    {
      id: 4,
      year: 2024,
      UserGain: 1203,
      UserLoss: 1300,
    },
    {
      id: 5,
      year: 2025,
      UserGain: 403,
      UserLoss: 1300,
    },
    {
      id: 6,
      year: 2026,
      UserGain: 620,
      UserLoss: 1300,
    },
  ];
  const [UserData, setUserData] = useState({
    labels: userData.map((ele) => {
      return ele.year;
    }),
    datasets: [
      {
        label: "User Gained",
        data: userData.map((ele) => {
          return ele.UserGain;
        }),
        backgroundColor: [
          "rgba(22, 144, 0, 0.50)",
          "rgba(7, 181, 249, 0.50)",
          "rgba(253, 2, 2, 0.50)",
          "rgba(104, 104, 104, 0.50)",
          "rgba(255, 0, 132, 0.50)",
          "rgba(255, 234, 0, 0.5)",
        ],
        borderColor: [
          "rgba(22, 144, 0, 0.80)",
          "rgba(7, 181, 249, 0.80)",
          "rgba(253, 2, 2, 0.80)",
          "rgba(104, 104, 104, 0.80)",
          "rgba(255, 0, 132, 0.80)",
          "rgba(255, 234, 0, 0.8)",
        ],
        borderWidth: 2,
        borderRadius: 5,
        hoverBackgroundColor: "rgba(75,192,192,0.7)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  });

  //Yearly basis Bar Chart Data states are here
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthBgColors = [
    "rgba(255, 99, 132, 0.4)", // Red
    "rgba(54, 162, 235, 0.4)", // Blue
    "rgba(255, 206, 86, 0.4)", // Yellow
    "rgba(75, 192, 192, 0.4)", // Teal
    "rgba(153, 102, 255, 0.4)", // Purple
    "rgba(255, 159, 64, 0.4)", // Orange
    "rgba(199, 199, 199, 0.4)", // Grey
    "rgba(83, 102, 255, 0.4)", // Light Blue
    "rgba(153, 159, 64, 0.4)", // Olive
    "rgba(255, 99, 255, 0.4)", // Pink
    "rgba(54, 235, 86, 0.4)", // Light Green
    "rgba(75, 75, 192, 0.4)", // Dark Blue
  ];

  const dayBgColors = [
    "rgba(255, 99, 132, 0.5)", // Red
    "rgba(54, 162, 235, 0.5)", // Blue
    "rgba(255, 206, 86, 0.5)", // Yellow
    "rgba(75, 192, 192, 0.5)", // Teal
    "rgba(153, 102, 255, 0.5)", // Purple
    "rgba(255, 159, 64, 0.5)", // Orange
    "rgba(199, 199, 199, 0.5)", // Grey
    "rgba(83, 102, 255, 0.5)", // Light Blue
    "rgba(153, 159, 64, 0.5)", // Olive
    "rgba(255, 99, 255, 0.5)", // Pink
    "rgba(54, 235, 86, 0.5)", // Light Green
    "rgba(75, 75, 192, 0.5)", // Dark Blue
    "rgba(22, 144, 0, 0.5)", // Green
    "rgba(255, 69, 0, 0.5)", // Red-Orange
    "rgba(0, 128, 128, 0.5)", // Teal
    "rgba(255, 215, 0, 0.5)", // Gold
    "rgba(128, 0, 128, 0.5)", // Purple
    "rgba(70, 130, 180, 0.5)", // Steel Blue
    "rgba(34, 139, 34, 0.5)", // Forest Green
    "rgba(255, 20, 147, 0.5)", // Deep Pink
    "rgba(0, 191, 255, 0.5)", // Deep Sky Blue
    "rgba(255, 140, 0, 0.5)", // Dark Orange
    "rgba(106, 90, 205, 0.5)", // Slate Blue
    "rgba(47, 79, 79, 0.5)", // Dark Slate Gray
    "rgba(189, 183, 107, 0.5)", // Dark Khaki
    "rgba(255, 0, 255, 0.5)", // Magenta
    "rgba(0, 128, 0, 0.5)", // Green
    "rgba(75, 0, 130, 0.5)", // Indigo
    "rgba(139, 69, 19, 0.5)", // Saddle Brown
    "rgba(255, 99, 71, 0.5)", // Tomato
    "rgba(144, 238, 144, 0.5)", // Light Green
  ];

  const defaultColor = "rgba(75, 192, 192, 0.4)";

  //toggle switch state and function here
  const [colorsOn, setColorsOn] = useState(true);

  const getBackgroundColors = (colorsOn) => {
    return colorsOn ? monthBgColors : defaultColor;
  };

  // State for controlling chart re-rendering
  const [chartKey, setChartKey] = useState(0);

  const handleToggleChange = (event) => {
    const newColorsOn = event.target.checked;
    setColorsOn(newColorsOn);
    setBarChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          backgroundColor: getBackgroundColors(newColorsOn),
        },
      ],
    }));
    setBarChartData2((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          backgroundColor: getBackgroundColors(newColorsOn),
        },
      ],
    }));
    // Force chart re-render by updating the key
    setChartKey((prevKey) => prevKey + 1);
  };

  const years = ["2021", "2022", "2023", "2024"];
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [barChartData, setBarChartData] = useState({
    labels: monthNames,
    datasets: [
      {
        label: "Vendor",
        data: Array(12).fill(0), // Initialize with 0 for each month
        backgroundColor: monthBgColors,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });


  //Fetch Yearly basis Bar Chart Data Functions are here
  const fetchYearlyBarChartData = async (year) => {
    try {
      const token = localStorage.getItem("accessToken");
      const adminId = localStorage.getItem("adminId");
  
      // Assuming the API endpoint structure
      const response = await axios.get(`${path_url}/vendor/dashboard/${adminId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        params: {
          year: year, // Send selected year as a query parameter if needed by your API
        },
      });

      const data = response.data.body.totalVendorAddedByMonthinCurrentYear;
      
      // Initialize an array with 0s for each month (12 months)
      const yearlyData = Array.from({ length: 12 }, () => 0);
  
      // Populate the yearlyData array with the API data
      Object.keys(data).forEach((month) => {
        const monthIndex = parseInt(month, 10) - 1; // Convert month string to zero-based index
        yearlyData[monthIndex] = data[month]; // Assign customer count to the corresponding month index
      });
  
      setBarChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: yearlyData, // Update the data in the chart
          },
        ],
      }));
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
  const handleYearChange = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
    fetchYearlyBarChartData(selectedYear);
  };

  //Monthly basis Bar Chart states here

  const [selectedMonth, setSelectedMonth] = useState(monthNames[new Date().getMonth()]);
 
  const [barChartData2, setBarChartData2] = useState({
    labels: Array.from({ length: 31 }, (_, i) => i + 1), // Days of the month
    datasets: [
      {
        label: "Vendor",
        data: Array.from({ length: 31 }, () => 0), // Initialize with 0 for each day
        backgroundColor: colorsOn ? dayBgColors : defaultColor,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  const Options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart maintains the aspect ratio according to its container
    scales: {
      x: {
        ticks: {
          autoSkip: false, // Ensures all labels (1–31) are shown on x-axis
          maxRotation: 0,  // Prevents label rotation for better readability
          minRotation: 0,  // Prevents label rotation for better readability
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Sets the interval between ticks to 1
          callback: function (value) {
            // This ensures that only whole numbers are displayed
            if (Number.isInteger(value)) {
              return value;
            }
          },
        },
      },
    },
  };
  
  const fetchMonthlyBarChartData = async (selectedMonth) => {
    try {
      const token = localStorage.getItem("accessToken");
      const adminId = localStorage.getItem("adminId");
  
      const response = await axios.get(
        `${path_url}/vendor/dashboard/${adminId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data.body.totalVendorInCurrentMonth;
  
      // Initialize an array with 0s for each day of the month (31 days)
      const monthlyData = Array.from({ length: 31 }, () => 0);
  
      // Populate the monthlyData array with the API data
      Object.keys(data).forEach((day) => {
        const dayIndex = parseInt(day, 10) - 1; // Convert day string to zero-based index
        monthlyData[dayIndex] = data[day]; // Assign customer count to the corresponding day index
      });
  
      setBarChartData2((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: monthlyData, // Update the data in the chart
          },
        ],
      }));
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
  

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
    fetchMonthlyBarChartData(selectedMonth);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      const fetchTable = async () => {
        try {
          const adminId = localStorage.getItem("adminId");

          const response = await axios.get(
            `${path_url}/vendor/dashboard/${adminId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          // Update the state variables with vendor data
          setEntriesPerPage(
            response.data.body.vendorList.length > 10
              ? 10
              : response.data.body.vendorList.length
          );
          setVendorList(response.data.body.vendorList);
          setVendorCountByStatus(response.data.body.vendorCountByStatus);
          setTotalVendorInCurrentMonth(response.data.body.totalVendorInCurrentMonth);
          setTotalVendorAddedByMonthInCurrentYear(response.data.body.totalVendorAddedByMonthinCurrentYear);
          setLoading(false);
          setConvertedVendor(response.data.body.convertedVendor);
          setActiveVendor(response.data.body.activeVendor);
          setTotalVendor(response.data.body.totalVendor);
          setInactiveVendor(response.data.body.inactiveVendor);
          fetchYearlyBarChartData(selectedYear);
	        fetchMonthlyBarChartData(selectedMonth);

        } catch (error) {
          console.error(error);
        }
      };

      fetchTable();
    }
  },[selectedMonth],[selectedYear]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1, // Sets the interval between ticks to 1
        callback: function (value) {
          // This ensures that only whole numbers are displayed
          if (Number.isInteger(value)) {
            return value;
          }
        },
      },
    },
  };

  const statusColors = {
    DISQUALIFIED: "rgba(255, 0, 0, 0.8)",
    QUALIFIED: "rgba(0, 255, 0, 0.8)",
    CONVERTTOVENDOR: "rgba(0, 0, 255, 0.8)", // Change to vendor-related status
    NEWOPPORTUNITY: "rgba(255, 255, 0, 0.8)",
    ATTEMPTEDCONTACT: "rgba(128, 0, 128, 0.8)",
    WORKING: "rgba(0, 128, 128, 0.8)",
    OPEN: "rgba(255, 165, 0, 0.8)",
    NEEDSFOLLOWUP: "rgba(255, 192, 203, 0.8)",
    NOTENGAGED: "rgba(128, 128, 128, 0.8)",
  };

  const chartData = {
    labels: Object.keys(vendorCountByStatus), // Changed to vendorCountByStatus
    datasets: [
      {
        data: Object.values(vendorCountByStatus), // Changed to vendorCountByStatus
        backgroundColor: Object.values(statusColors),
        borderColor: "rgb(245, 242, 242)",
        borderWidth: 4,
        borderRadius: 3,
        hoverBackgroundColor: [
          "rgba(75,192,192,0.7)",
          "rgba(178,34,34,0.7)",
          "rgba(255,182,193,0.7)",
          "rgba(255,215,0,0.7)",
          "rgba(0,255,127,0.7)",
          "rgba(218,112,214,0.7)",
          "rgba(255, 165, 0, 0.7)",
          "rgba(255, 222, 173, 0.7)",
          "rgba(240, 230, 140, 0.7)",
        ],
        hoverBorderColor: [
          "rgba(75,192,192,1)",
          "rgba(178,34,34,1)",
          "rgba(255,182,193,1)",
          "rgba(255,215,0,1)",
          "rgba(0,255,127,1)",
          "rgba(218,112,214,1)",
          "rgba(255, 165, 0, 1)",
          "rgba(255, 222, 173, 1)",
          "rgba(240, 230, 140, 1)",
        ],
      },
    ],
  };

  const padNumber = (num) => (num < 10 ? `0${num}` : num);
  const lineChartData = {
    labels: Array.from({ length: 31 }, (_, i) => padNumber(i + 1)),
    datasets: [
      {
        label: "Total Vendors in Current Month", // Changed to vendor-related label
        data: Array.from(
          { length: 31 },
          (_, i) =>
            totalVendorInCurrentMonth[Number.parseInt(padNumber(i + 1))] || 0
        ),
        backgroundColor: [
          "rgba(22, 144, 0, 0.50)",
          "rgba(7, 181, 249, 0.50)",
          // Add more colors as needed
        ],
        borderWidth: 2,
        borderRadius: 5,
        hoverBackgroundColor: "rgba(75,192,192,0.7)",
        hoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value, 10));
  };

  const greetings = ["Good Morning 🌄", "Good Afternoon 🌇", "Good Evening 🌃"];
  const currentHour = new Date().getHours();
  let index =
    currentHour >= 12 && currentHour < 17 ? 1 : currentHour >= 17 ? 2 : 0;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,600,700&display=swap"
        rel="stylesheet"
      />
      {/* welcome message */}
      <div className="greet">
        <div
          className=" bg-white rounded mt-2 d-flex align-items-center subcon3"
          style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="col-sm-4 mt-2 ml-2 mb-2 subcon6">
            <strong>{greetings[index]} User Name !</strong>
            <div className=" mt-2">Welcome to the Vendor Dashboard.</div>
          </div>
          <div className=" col-8 d-flex justify-content-end pr-4 subcon4">
            <img
              loading="lazy"
              src={ss4}
              alt="not load"
              style={{ width: 200 }}
            />
          </div>
        </div>
      </div>

      {/* vendor dashboard sub componets  */}
      <div class="row p-2 m-0">
        <div class="col-lg-3 col-6 mb-3 p-2">
          <VendorDashboardSub
            index={0}
            name="Total Vendor"
            value={totalVendor}
            icon="HiOutlineShoppingBag"
            class="bg-info"
            addOn=""
          />
        </div>

        <div class="col-lg-3 col-6 mb-3 p-2">
          <VendorDashboardSub
            index={1}
            name="Converted Vendor"
            value={convertedVendor}
            icon="BiBarChart"
            class="bg-success"
            addOn=""
          />
        </div>

        <div class="col-lg-3 col-6 mb-3 p-2">
          <VendorDashboardSub
            index={2}
            name="Active Customer"
            value={activeVendor}
            icon="BiSolidUserPlus"
            class="bg-warning"
            addOn=""
          />
        </div>

        <div class="col-lg-3 col-6 mb-3 p-2">
          <VendorDashboardSub
            index={3}
            name="Inactive Customer"
            value={inactiveVendor}
            icon="IoMdPie"
            class="bg-danger"
            addOn=""
          />
        </div>
      </div>

      {/* bar and pie chart  */}
      <div className="col-12">
        <div className="row">
          {/* Bar chart */}
          <div className="col-lg-6 mb-4">
            <div
              className="w-100 elevation-2 rounded p-0"
              style={{ maxWidth: "100%" }}
              >
              <div style={{ height: "350px" }}>
                <div className="d-flex justify-content-between align-items-center"
                  style={{padding: "10px", height: "50px" }}
                  >
                    <div>
                      <FormGroup>
                        <FormControlLabel
                          label={`Colors ${colorsOn ? "On" : "Off"}`}
                          control={
                            <Switch
                              checked={colorsOn}
                              onChange={handleToggleChange}
                            />
                          }
                        />
                      </FormGroup>
                    </div>
                    <div>
                      <select
                        value={selectedYear}
                        onChange={handleYearChange}
                        className="form-select form-select-sm"
                        style={{ width: "100px" }}
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                </div>
                <div
                  style={{ height: "85%" }}
                >
                  <Bar  
                    key={chartKey}
                    data={barChartData}
                    options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
          {/* Pie chart */}
          <div className="col-lg-6 mb-4">
            <div
              className="w-100 elevation-2 rounded"
              style={{ maxWidth: "100%" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "350px" }}
              >
                <Doughnut data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* customer table and  chart here */}
      <div className="col-12 d-flex justify-content-center">
        <div
          className="col-12 border rounded"
          style={{
            padding: "5px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            background: "white",
          }}
        >
          {/* Separate div for VendorDashboardTable */}
          <VendorDashboardTable
            vendorList={vendorList}
            entriesPerPage={entriesPerPage}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Vendor chart of current month */}
      <div className="col-12 d-flex justify-content-center">
        <div
          className="col w-100 d-flex justify-content-center pt-1 mb-4 border rounded"
          style={{
            width: "100%",
            height: "350px",
            paddingLeft: 10,
            paddingBottom: 10,
            flexDirection: "column",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            marginTop: "1rem",
          }}
        >
          <div className="title">
            {/* Vendor-specific styling */}
            <div className="d-flex justify-content-right">
              <div
                className="bg-success col-12 m-1 mt-3 rounded shadow-sm elevation-2 pt-1"
                /* Change bg-info to bg-success for vendor-specific styling */
              ></div>
            </div>
            <label
              className="pl-6 ml-6 pt-2 m-0"
              style={{ fontWeight: "700", overflowWrap: "break-word" }}
            >
              {/* Vendor-specific label */}
              Vendor Added In Current Month
            </label>
          </div>
          <div
            className="position-absolute"
            style={{ top: "30px", right: "10px", zIndex: 10 }}
          >
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="form-select form-select-sm"
              style={{ width: "100px" }}
            >
              {monthNames.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Bar 
              key={chartKey} // Use chartKey to force re-render on data change
              data={barChartData2} 
              options={Options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorDashboardPage;
