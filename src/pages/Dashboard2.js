import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import styles from "./Dashboard2.module.css";
const Dashboard2 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.dashboard2}>
      <div className={styles.dashboard2Child} />
      <div className={styles.dashboard2Item} />
      <div className={styles.page1} />
      <div className={styles.aboutUsParent}>
        <div className={styles.aboutUs}>About us</div>
        <img className={styles.frameChild} alt="" src="/rectangle-4@2x.png" />
        <div className={styles.frameItem} onClick={onRectangle1Click} />
        <div className={styles.home}>Home</div>
        <div className={styles.logOut} onClick={onLogOutTextClick}>
          Log out
        </div>
        <img className={styles.menuIcon} alt="" src="/menu1.svg" />
      </div>
      <div className={styles.dashboard2Inner} />
      <Menu />
      <div className={styles.appearanceParent}>
        <div className={styles.appearance}>Appearance</div>
        <div className={styles.frameInner} />
        <div className={styles.ellipseDiv} />
        <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
      </div>
    </div>
  );
};

export default Dashboard2;
