import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu1.module.css";
const Menu1 = () => {
  const navigate = useNavigate();

  const onRectangle10Click = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  const onSettingsTextClick = useCallback(() => {
    navigate("/dashboard2");
  }, [navigate]);

  return (
    <form className={styles.menu} action="Dashboard2" method="get">
      <div className={styles.menuChild} />
      <div className={styles.menuItem} />
      <div className={styles.menuInner} />
      <div className={styles.rectangleDiv} onClick={onRectangle10Click} />
      <div className={styles.menuChild1} />
      <div className={styles.menuChild2} />
      <div className={styles.menuChild3} />
      <div className={styles.recentRecordings}>Recent Recordings</div>
      <div className={styles.settings} onClick={onSettingsTextClick}>
        Settings
      </div>
      <div className={styles.feedback}>Feedback</div>
      <div className={styles.faq}>FAQ</div>
      <div className={styles.contactUs}>Contact Us</div>
      <div className={styles.resultsOverview}>Results Overview</div>
    </form>
  );
};

export default Menu1;
