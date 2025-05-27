import React from "react";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";
import "../styleSheet/Calendar.css";
import teeth from "../assets/teeth.png";
import inject from "../assets/inject.png";
import { FaHeart, FaRegEye } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
const Calendar = () => {
  return (
    <div className="module ms-2">
      <section
        className="cal-title d-flex justify-content-between align-items-center"
        style={{ color: "#041c7d" }}
      >
        <h4>october 2021</h4>
        <div className="px-4">
          <RiArrowLeftFill className="me-2" size={20} />
          <RiArrowRightFill size={20} />
        </div>
      </section>
      <section className="table">
        <table className="cal-table" st>
          <tr>
            <td className="text-decoration-none">
              <span className="d-block fw-normal">Mon</span>
              <span className="fw-bold fs-4">25</span>
            </td>
            <td
              style={{
                backgroundColor: "#c7c5c523",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <span className="d-block fw-normal">Tues</span>
              <span className="fw-bold fs-4">26</span>
            </td>
            <td>
              <span className="d-block fw-normal">Wed</span>
              <span className="fw-bold fs-4">27</span>
            </td>
            <td>
              <span className="d-block fw-normal">Thurs</span>
              <span className="fw-bold fs-4">28</span>
            </td>
            <td>
              <span className="d-block fw-normal">Fri</span>
              <span className="fw-bold fs-4">29</span>
            </td>
            <td>
              <span className="d-block fw-normal">Sat</span>
              <span className="fw-bold fs-4">30</span>
            </td>
            <td className="opacity-50">
              <span className="d-block fw-normal">Sun</span>
              <span className="fw-bold fs-4">31</span>
            </td>
          </tr>
          <tr>
            <td>10:00</td>
            <td style={{ backgroundColor: "#c7c5c523" }}>08:00</td>
            <td>12:00</td>
            <td>10:00</td>
            <td className="opacity-50">
              <sup>
                <sup>_________</sup>
              </sup>
            </td>
            <td className="opacity-50" colSpan={2}>
              <span
                style={{
                  backgroundColor: "#041c7d",
                  borderRadius: "10px",
                  color: "white",
                  padding: "5px 15px",
                }}
              >
                12:00 <span className="ms-4">09:00</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>11:00</td>
            <td style={{ backgroundColor: "#c7c5c523" }}>
              <span
                style={{
                  backgroundColor: "#041c7d",
                  borderRadius: "10px",
                  color: "white",
                  padding: "5px 12px",
                }}
              >
                09:00
              </span>
            </td>
            <td>
              <sup>
                <sup>_________</sup>
              </sup>
            </td>
            <td>
              <span
                style={{
                  backgroundColor: "#041c7d",
                  borderRadius: "10px",
                  color: "white",
                  padding: "5px 12px",
                }}
              >
                11:00
              </span>
            </td>
            <td>14:00</td>
            <td>14:00</td>
            <td className="opacity-50">10:00</td>
          </tr>
          <tr>
            <td>12:00</td>
            <td
              style={{
                backgroundColor: "#c7c5c523",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              10:00
            </td>
            <td>13:00</td>
            <td>
              <sup>
                <sup>_________</sup>
              </sup>
            </td>
            <td>16:00</td>
            <td>15:00</td>
            <td className="opacity-50">11:00</td>
          </tr>
        </table>
      </section>
      <section className="doc d-flex flex-row justify-content-between  mx-4">
        <div className="cal-teeth d-flex flex-column ">
          <div className="d-flex align-items-center justify-content-between">
            <span>Dentist</span>
            <img src={teeth} alt="" height={40} />
          </div>
          <span>09:00-11:00</span>
          <span>Dr. Cameron Williamson</span>
        </div>
        <div className="cal-phy d-flex flex-column">
          <div className="d-flex align-items-center justify-content-between">
            <span>Physiotherapy Appoinment</span>
            <span style={{ fontSize: "20px" }}>💪</span>
          </div>
          <span>11:00-12:00</span>
          <span>Dr. Kevin Djones</span>
        </div>
      </section>
      <section className="upcoming mx-4">
        <h3>The Upcoming Schedule</h3>
        <h5>On Thursday</h5>
        <div className="schedules1 d-flex justify-content-between">
          <div className="cal-inject d-flex flex-column ">
            <div className="d-flex align-items-center justify-content-between">
              <span>Health checkup complete</span>
              <img src={inject} alt="" height={35} />
            </div>
            <span>11:00 AM</span>
          </div>
          <div className="cal-eye d-flex flex-column ">
            <div className="d-flex align-items-center justify-content-between">
              <span>Ophthalmologist</span>
              <FaRegEye color="brown" size={20} />
            </div>
            <span>14:00 PM</span>
          </div>
        </div>
        <h5>On Saturday</h5>
        <div className="schedules2 d-flex ">
          <div className="cal-hearts d-flex flex-column me-5 ">
            <div className="d-flex align-items-center justify-content-between">
              <span>Cardiologist</span>
              <FaHeart color="red" size={20} />
            </div>
            <span>12:00 AM</span>
          </div>
          <div className="cal-neuro d-flex flex-column ">
            <div className="d-flex align-items-center justify-content-between">
              <span>Neurologist</span>
              <FaUserDoctor color="brown" size={20} />
            </div>
            <span>16:00 PM</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
