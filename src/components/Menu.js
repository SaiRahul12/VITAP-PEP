import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menuChild} />
      <div className={styles.menuItem} />
      <div className={styles.menuInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.menuChild1} />
      <div className={styles.menuChild2} />
      <div className={styles.menuChild3} />
      <div className={styles.recentRecordings}>Recent Recordings</div>
      <div className={styles.settings}>Settings</div>
      <div className={styles.feedback}>Feedback</div>
      <div className={styles.faq}>FAQ</div>
      <div className={styles.contactUs}>Contact Us</div>
      <div className={styles.resultsOverview}>Results Overview</div>
    </div>
  );
};

export default Menu;
