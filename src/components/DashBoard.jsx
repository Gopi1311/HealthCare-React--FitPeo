import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashCont from "./DashCont";
import Calendar from "./Calendar";

const DashBord = () => {
  return (
    <div className="dash-bord ">
      <Navbar />
      <div className="cont d-flex flex-direction-row "style={{marginTop:'30px',marginLeft:'50px'}}>
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="dash-cont">
            <DashCont/>
        </section>
        <section className="calendar">
          <Calendar/>
        </section>
      </div>
    </div>
  );
};

export default DashBord;
