import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PERFORMANCE1 from "../components/PERFORMANCE1";
import MESSAGES from "../components/MESSAGES";
import Exams from "../components/Exams";
import styles from "./Dashboard1.module.css";
const Dashboard1 = () => {
  const navigate = useNavigate();

  const onMenuIconClick = useCallback(() => {
    navigate("/dashboard3");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.dashboard1}>
      <div className={styles.dashboard1Child} />
      <div className={styles.dashboard1Item} />
      <div className={styles.page1} />
      <div className={styles.aboutUsParent}>
        <div className={styles.aboutUs}>About us</div>
        <img className={styles.frameChild} alt="" src="/rectangle-4@2x.png" />
        <img
          className={styles.menuIcon}
          alt=""
          src="/menu.svg"
          onClick={onMenuIconClick}
        />
        <div className={styles.frameItem} onClick={onRectangle1Click} />
        <div className={styles.home}>Home</div>
        <div className={styles.logOut} onClick={onLogOutTextClick}>
          Log out
        </div>
      </div>
      <div className={styles.dashboard1Inner} />
      <FrameComponent propLeft="216px" />
      <PERFORMANCE1 />
      <MESSAGES />
      <div className={styles.calender}>
        <div className={styles.february}>FEBRUARY</div>
        <img
          className={styles.calenderChild}
          alt=""
          src="/rectangle-16@2x.png"
        />
      </div>
      <Exams />
    </div>
  );
};

export default Dashboard1;
