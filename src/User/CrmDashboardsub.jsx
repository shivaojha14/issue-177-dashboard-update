import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiBarChart } from "react-icons/bi";
import { BiSolidUserPlus } from "react-icons/bi";
import { IoMdPie } from "react-icons/io";

const CrmDashboardSub = (props) => {
  let [mouse, setmouse] = useState(false);

  const mouseout = () => {
    setmouse(false);
  };
  const mouseover = () => {
    setmouse(true);
  };
  const style = {
    fontSize: mouse ? 60 : 50,
    color: "white",
    transition: "font-size 0.5s",
  };

  const [mouse1, setmouse1] = useState(false);
  const mouseout1 = () => {
    setmouse1(false);
    setmouse(false);
  };
  const mouseover1 = () => {
    setmouse1(true);
    setmouse(true);
  };
  const style1 = {
    backgroundColor: mouse1 ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    color: "white",
    border: "none",
    width: "100%",
  };

  const iconComponents = {
    BiBarChart: <BiBarChart style={style} />,
    HiOutlineShoppingBag: <HiOutlineShoppingBag style={style} />,
    BiSolidUserPlus: <BiSolidUserPlus style={style} />,
    IoMdPie: <IoMdPie style={style} />,
  };

  return (
    <div 
      style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
      className={props.class + " col-12 rounded me-1 mb-2"}>
      <div
        className={`d-flex ${props.addOn}`}
        onMouseEnter={mouseover}
        onMouseLeave={mouseout}
      >
        <div className="col-8 pt-3 pl-2 pb-4">
          <h3 className="mb-2 inner">{props.value > 0 ? props.value : 0}</h3>
          <p>{props.name}</p>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center pe-2">
          {iconComponents[props.icon]}
        </div>
      </div>
      <div>
        <button
          className="btn btn-sm w-100 m-0"
          onMouseEnter={mouseover1}
          onMouseLeave={mouseout1}
          style={style1}
        >
          <span className="fs-6">More info</span>
          <i
            className="fa fa-arrow-circle-right ml-2 fs-6"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  );
};

export default CrmDashboardSub;
