import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PERFORMANCE1 from "../components/PERFORMANCE1";
import MESSAGES from "../components/MESSAGES";
import Menu1 from "../components/Menu1";
import styles from "./Dashboard3.module.css";
const Dashboard3 = () => {
  const navigate = useNavigate();

  const onRectangleLinkClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuIconClick = useCallback(() => {
    navigate("/dashboard1");
  }, [navigate]);

  return (
    <div className={styles.dashboard3}>
      <div className={styles.dashboard3Child} />
      <div className={styles.dashboard3Item} />
      <div className={styles.page1} />
      <div className={styles.studentsAreOfferedImmenseOParent}>
        <div className={styles.studentsAreOfferedContainer}>
          <p className={styles.studentsAreOffered}>
            Students are offered immense opportunities to learn,
          </p>
          <p className={styles.studentsAreOffered}>
            practice, grow, and thrive. Autonomous learning is encouraged
          </p>
          <p
            className={styles.studentsAreOffered}
          >{`in order to enable students to chart their own course . `}</p>
        </div>
        <div className={styles.vitApOffersDistinctiveContainer}>
          <p className={styles.studentsAreOffered}>
            {" "}
            VIT-AP offers distinctive education through its
          </p>
          <p className={styles.studentsAreOffered}>
            undergraduate, postgraduate and PhD programmes.
          </p>
        </div>
        <div className={styles.velloreInstituteOfContainer}>
          <p
            className={styles.studentsAreOffered}
          >{`VELLORE INSTITUTE OF TECHNOLOGY `}</p>
          <p className={styles.studentsAreOffered}> AMARAVATI</p>
        </div>
        <div className={styles.studentsCarryOutHandsOnExParent}>
          <div className={styles.studentsCarryOutContainer}>
            <p
              className={styles.studentsAreOffered}
            >{`Students carry out hands on experiments related to program content in the `}</p>
            <p className={styles.studentsAreOffered}>
              form of Engineering Clinics. Industrial and international exposure
              is provided
            </p>
          </div>
          <div className={styles.studentsCarryOutContainer}>
            <p className={styles.studentsAreOffered}>
              overall personality development ensured through sports, clubs and
              chapters
            </p>
            <p className={styles.studentsAreOffered}>
              and cultural activities.
            </p>
          </div>
        </div>
        <div className={styles.tap}>TAP</div>
        <img className={styles.frameChild} alt="" src="/group-5.svg" />
        <img className={styles.linesIcon} alt="" src="/lines.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      </div>
      <div className={styles.dashboard3Inner} />
      <div className={styles.aboutUsParent}>
        <div className={styles.aboutUs}>About us</div>
        <img className={styles.frameItem} alt="" src="/rectangle-4@2x.png" />
        <Link
          className={styles.frameInner}
          to="/home"
          onClick={onRectangleLinkClick}
        />
        <div className={styles.home}>Home</div>
        <div className={styles.logOut} onClick={onLogOutTextClick}>
          Log out
        </div>
        <img
          className={styles.menuIcon}
          alt=""
          src="/menu1.svg"
          onClick={onMenuIconClick}
        />
      </div>
      <div className={styles.rectangleDiv} />
      <FrameComponent propLeft="600px" />
      <PERFORMANCE1 propLeft="600px" />
      <MESSAGES propLeft="1377px" />
      <div className={styles.calender}>
        <div className={styles.february}>FEBRUARY</div>
        <img
          className={styles.calenderChild}
          alt=""
          src="/rectangle-16@2x.png"
        />
      </div>
      <Menu1 />
    </div>
  );
};

export default Dashboard3;
