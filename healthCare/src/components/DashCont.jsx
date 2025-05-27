import human from "../assets/human.png";
import lung from "../assets/lungs.png";
import teeth from "../assets/teeth.png";
import bone from "../assets/bone.png";
import "./DashCont.css";
import { ScanLine, Rotate3D } from "lucide-react";
import { GiLeg } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import WeeklyBarChart from "./WeeklyBarChart";

const DashCont = () => {
  return (
    <div className="dash-cont">
      <section className="dash-set1">
        <h2 style={{ color: "#041c7d" }}>Dashboard</h2>
        <select name="" id="" style={{ color: "#041c7d" }}>
          <option value="">This Week</option>
        </select>
      </section>
      <section className="dash-set2">
        <div className="dash-body mt-4 ">
          <span
            className="text-white py-2 px-2 fs-6 "
            style={{
              backgroundColor: "#3407ba",
              position: "relative",
              top: "130px",
              left: "230px",
              borderRadius: "10px",
              border: "solid,3px,#021aa3",
            }}
          >
            <i class="bi bi-heart-fill  me-2" style={{ color: "#ff000d" }}></i>
            Healthly Heart
          </span>
          <ScanLine
            size={45}
            strokeWidth="2.55px"
            className="scan1 opacity-50"
            style={{
              position: "relative",
              left: "30px",
              top: "125px",
              color: "#0335fc",
            }}
          />
          <img
            src={human}
            alt=""
            height="400px"
            width="360px"
            style={{ paddingBottom: "20px", paddingTop: "0px" }}
          />
          <ScanLine
            size={45}
            strokeWidth="2.55px"
            className="scan2 opacity-50"
            style={{
              position: "relative",
              bottom: "150px",
              left: "135px",
              color: "#0335fc",
            }}
          />
          <span
            className="py-2 px-2 fs-6 border border-info border-3"
            style={{
              backgroundColor: "#03d9ff",
              position: "relative",
              bottom: "146px",
              right: "40px",
              borderRadius: "10px",
              color: "#3407ba",
            }}
          >
            <GiLeg style={{ color: "#ffee03", marginRight: "5px" }} />
            Healthly Leg
          </span>
          <div class="curve-element"></div>
          <Rotate3D
            size={20}
            color="white"
            style={{
              position: "relative",
              bottom: "85px",
              left: "170px",
              backgroundColor: "black",
              borderRadius: "50px",
            }}
          />
        </div>
        <div className="dash-parts ">
          <div className="lungs">
            <div>
              <img height="70px" src={lung} alt="" />
              <h4>Lungs</h4>
            </div>
            <div className="mb-2 opacity-50">
              <span className="">Date: 26 okt 2021</span>
            </div>
            <div>
              <div className="range">
                <h1 style={{ backgroundColor: "red" }}></h1>
              </div>
            </div>
          </div>
          <div className="teeth">
            <div>
              <img height="70px" src={teeth} alt="" />
              <h4>Teeth</h4>
            </div>
            <div className="mb-2 opacity-50">
              <span>Date: 26 okt 2021</span>
            </div>
            <div>
              <div className="range">
                <h1 style={{ backgroundColor: "green" }}></h1>
              </div>
            </div>
          </div>
          <div className="bone">
            <div>
              <img height="70px" src={bone} alt="" />
              <h4>Bone</h4>
            </div>
            <div className="mb-2 opacity-50">
              <span>Date: 26 okt 2021</span>
            </div>
            <div>
              <div className="range">
                <h1 style={{ backgroundColor: "#f25f0a" }}></h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button>
        Details <IoIosArrowRoundForward />{" "}
      </button>
      <section className="activity d-flex justify-content-between mt-4 mx-5">
        <h5>Activity</h5>
        <span className="opacity-50">3 appointment on this week</span>
      </section>
      <section className="chart-bar">
        <WeeklyBarChart />
      </section>
    </div>
  );
};

export default DashCont;
