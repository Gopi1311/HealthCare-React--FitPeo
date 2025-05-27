import React from "react";
import { FileChartLine } from "lucide-react";
import "../styleSheet/Sidebar.css";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <section className="general">
        <span>General</span>
        <div style={{ opacity: "1", color: "#041c7d" }}>
          <i class="bi bi-grid-fill"></i>
          <h5>DashBord</h5>
        </div>
        <div>
          <i class="bi bi-arrow-down-up"></i>
          <h5>History</h5>
        </div>
        <div>
          <i class="bi bi-calendar-week"></i>
          <h5>Calendar</h5>
        </div>
        <div>
          <FileChartLine />
          <h5>Statistics</h5>
        </div>
      </section>
      <section className="tools">
        <span>Tools</span>
        <div>
          <i class="bi bi-chat-dots-fill"></i>
          <h5>Chat</h5>
        </div>
        <div>
          <i class="bi bi-telephone-fill"></i>
          <h5>Support</h5>
        </div>
      </section>
      <section className="setting  ">
        <IoSettings className="setting-icon" />
        <h5>Setting</h5>
      </section>
    </div>
  );
};

export default Sidebar;
