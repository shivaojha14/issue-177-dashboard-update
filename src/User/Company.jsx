import React,{useState} from "react";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/CreateTask.css";
import "../Style/NewCustomer.css"
import MainSidebar from "./Mainsidebar";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import { path_url } from "../Config/config";
import General from "./Company_Setiing/General";
import Shipping from "./Company_Setiing/Shipping";
import Payment from "./Company_Setiing/Payment";


const customerSchema = Yup.object().shape({
  duedate: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
});

export default function Company() {
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
  const [activeTab, setActiveTab] = useState('general');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
 
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
       <div className="min-vh-100">
       <div className="card card-primary card-outline m-4">
        <div class="card-header">
            <h3 class="card-title">
            <i className="fa-solid fa-briefcase pr-2"></i>
                Company Settings
            </h3>
          </div>
          <div className="card-body p-4">
          
          <div className="row">
      <div className="col-5 col-sm-3 p-0" style={{maxWidth:"10%", }}>
        <div className="nav flex-column  border-0 nav-tabs  ">
          <a className={`nav-link ${activeTab === 'general' ? 'border-right-0 border-bottom active ' : 'border-right text-colo'} rounded-0`} onClick={() => handleTabClick('general')}>General</a>
          <a className={`nav-link ${activeTab === 'payment' ? 'border-right-0 border-bottom active' : 'border-right text-colo'} rounded-0`} onClick={() => handleTabClick('payment')}>Payment</a>
          <a className={`nav-link ${activeTab === 'shipping' ? 'border-right-0 border-bottom active' : 'border-right text-colo'} rounded-0`} onClick={() => handleTabClick('shipping')}>Shipping</a>
          <a className={`nav-link ${activeTab === 'e-filing' ? 'border-right-0 border-bottom active' : 'border-right text-colo'} rounded-0`} onClick={() => handleTabClick('e-filing')}>E-Filing</a>
          <a className={`nav-link ${activeTab === 'tax-information' ? 'border-right-0 border-bottom active' : 'border-right text-colo'} rounded-0`} onClick={() => handleTabClick('tax-information')}>Tax Information</a>
          <a className={`nav-link ${activeTab === 'company-badge' ? 'border-right-0 border-bottom active' : 'border-right text-colo'} rounded-0`} onClick={() => handleTabClick('company-badge')}>Company Badge</a>
          <a className={`nav-link ${activeTab === 'user-experience' ? 'border-right-0 border-bottom active' : 'border-right text-colo'} rounded-0`} onClick={() => handleTabClick('user-experience')}>User Experience</a>
        </div>
      </div>
      <div className="col-7 col-sm-9 p-0" style={{maxWidth:"90%", flex:"0 0 100%"}}>
        <div className="tab-content" style={{overflowY: "auto", maxHeight: "calc(100vh - 130px)"}}>
          <div className={`tab-pane ${activeTab === 'general' ? 'active' : ''}`} style={{background:"none"}}>
            {/* Content for General Tab */}
            <General />
          </div>
          <div className={`tab-pane ${activeTab === 'payment' ? 'active' : ''}`} style={{background:"none"}}>
            {/* Content for Payment Tab */}
            <Payment/>
          </div>
          <div className={`tab-pane ${activeTab === 'shipping' ? 'active' : ''}`} style={{background:"none"}}>
            {/* Content for Shipping Tab */}
            <Shipping/>
          </div>
          <div className={`tab-pane ${activeTab === 'e-filing' ? 'active' : ''}`} style={{background:"none"}}>
            {/* Content for E-Filing Tab */}
            Pellentesque vestibulum commodo nibh nec blandit...
          </div>
          <div className={`tab-pane ${activeTab === 'tax-information' ? 'active' : ''}`} style={{background:"none"}}>
            {/* Content for Tax Information Tab */}
            Quisque tincidunt venenatis vulputate...
          </div>
          <div className={`tab-pane ${activeTab === 'company-badge' ? 'active' : ''}`} style={{background:"none"}}>
            {/* Content for Company Badge Tab */}
            Vivamus faucibus eu massa eget condimentum...
          </div>
          <div className={`tab-pane ${activeTab === 'user-experience' ? 'active' : ''}`} style={{background:"none"}}>
            {/* Content for User Experience Tab */}
            Integer vestibulum orci odio...
          </div>
        </div>
      </div>
    </div>
            
          </div>
                
            </div>
       </div>
      
        
        <UserFooter />
      </div>
    </div>
  );
                                }