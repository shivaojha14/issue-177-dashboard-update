import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';  // Import Yup
import Navbar from './Navbar';
import Footer from './Footer';
import login_image from "../Images/Login-image.png";
import icons8_google from "../Images/icons8-google.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import { path_url, responseMessages } from '../Config/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  const [isLogin, SetLogin] = useState(false);
  const navigate = useNavigate();

  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),

    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values, { setSubmitting, setStatus }) => {
      try {
        const event = new Event("submit", { cancelable: true });
        event.preventDefault();
        const response = await axios.post(
          `${path_url}/authenticate`,
          values
        );

        localStorage.setItem("accessToken", response.data.token);

        SetLogin(true);
        toast.success("Login Successfully");


      } catch (error) {
        const errorMessage = responseMessages[error.response.data.message];
        toast.error(errorMessage);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    
    if (isLogin) {
      const token = localStorage.getItem("accessToken");

        const fetchData = async () => {
          try {
            const response = await axios.get(
              `${path_url}/user`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              }
            );
    
            const userId = response.data.id;
            const adminId = response.data.adminid;
            const name = response.data.name;
            localStorage.setItem("userId", userId);
            localStorage.setItem("adminId",adminId);
            localStorage.setItem("name",name);
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
   
      const redirectTimer = setTimeout(() => {
        return navigate("/crm-dashboard", { replace: true }); // Replace '/user' with the actual path to the user page
      }, 3000);

      return () => {
        clearTimeout(redirectTimer);
      };
    }
  }, [isLogin, navigate]);


  return (
    <>
      <Navbar />
      <div className="Login-form">
        <div className='login-image-container'>
          <img src={login_image} alt="login" className="login-image" />
        </div>
        <form onSubmit={formik.handleSubmit} className='form-container'>
          <div className="contents">
            <span className="Login-heading">Welcome to AI Smart ERP Solution</span>
            <span className="Login-content">Login to explore more.</span>
          </div>

          <div className='login-form-main-container'>
            <div className="login-form-content">
            <div className="form-group">
              <input
                name="username"
                type="text"
                placeholder="Username"
                className={
                  "form-control form-control-2" +
                  (formik.errors.username && formik.touched.username
                    ? " is-invalid"
                    : "")
                }
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              <div className="invalid-feedback">
                {formik.errors.username && formik.touched.username
                  ? formik.errors.username
                  : null}
              </div>
            </div>

            <div className="form-group">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className={
                  "form-control form-control-2" +
                  (formik.errors.password && formik.touched.password
                    ? " is-invalid"
                    : "")
                }
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className="invalid-feedback">
                {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null}
              </div>
            </div>
            </div>

            <div className="buttons buttons-2">
              <div className="form-group">
              <button type="submit" className="login-buttons">
                <div className="btn-content">
                  <span>Log</span>
                  <span> in</span>
                </div>
              </button>
              </div>
              <div className="form-group">
              <Link to="/register">
                <button type="submit" className="user-buttons">
                  Create New User
                </button>
              </Link>
              </div>
              <div className="form-group">
              <button type="submit" className="Google-buttons" >
                <div className="google-icon">
                  <img src={icons8_google} alt="goole-icon" />
                </div>
                Log in with Google
              </button>
              </div>
            </div>
          </div>

        </form>
      </div>

      <Footer />
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
    </>
  )
}
