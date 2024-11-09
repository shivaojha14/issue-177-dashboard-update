import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { path_url } from "../../Config/config";
import axios from "axios";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-responsive';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import 'datatables.net-buttons/js/buttons.colVis.min.js';
import 'jszip';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const VendorDashboardTable = () => {
  const token = localStorage.getItem("accessToken");
    const adminId = localStorage.getItem("adminId");
    const navigate = useNavigate();

    const vendorData = async () => {
      try {
        const res = await axios.get(`${path_url}/vendor/dashboard/${adminId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
    
        console.log("Vendor Response",res);
        // Extract vendor List from the response
        const vendorList = res.data.body.vendorList;

        // Check if DataTable is already initialized, if yes, destroy it
        if ($.fn.DataTable.isDataTable('#example1')) {
          $('#example1').DataTable().clear().destroy();
        }

        // Initialize DataTable with the customerList
        $('#example1').DataTable({
          data: vendorList,
          columns: [
            { 
              title: "Full Name", 
              data: null, 
              render: function(data, type, row) {
                const fullName = `${row.firstname} ${row.lastname}`;
                return `<a href="" class="vendor-name" data-id="${row.id}">${fullName}</a>`;
              }
            },
            { title: "Company", data: "companyname" },
            { title: "Status", data: "status" },
            { title: "Mobile", data: "mobile" },
            { title: "Email", data: "email" },
            { title: "Notes", data: "notes" },
            { title: "Pincode", data: "pincode" },
            { title: "Product", data: "product" },
            { title: "Address1", data: "add1"},
            { title: "Address2", data: "add2"},
            { title: "City", data: "city" },
            { title: "State", data: "state" },
            { title: "Country", data: "country" },
          ],
          paging: true,
          pagingType: 'simple_numbers',
          responsive: false,
          lengthChange: false,
          autoWidth: true,
          scrollX: true,
          dom: 'Bfrtip',
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
        }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');

        // Add a click event listener to handle name clicks
        $('#example1 tbody').on('click', '.vendor-name', function() {
          const vendorId = $(this).data('id');
          navigate(`/vendor-details/${vendorId}`);
        });

      } catch (error) {
          console.log("Error while fetching Customer Data: ", error);
        }
    };

    useEffect(() => {
      vendorData();

        return () => {
        if ($.fn.DataTable.isDataTable('#example1')) {
          $('#example1').DataTable().destroy();
        }
        };
    }, []);

  return (
    <>
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Vendor Table</h3>
                </div>
                <div class="card-body">
                  <table 
                      id="example1" 
                      class="table table-bordered table-striped" 
                      style={{ whiteSpace: 'nowrap' }}>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorDashboardTable;
