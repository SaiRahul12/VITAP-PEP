import styles from "./Exams.module.css";
const Exams = () => {
  return (
    <div className={styles.exams}>
      <div className={styles.examsChild} />
      <div className={styles.examsItem} />
      <div className={styles.examsInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.phyTest}>
        <p className={styles.phy}>Phy</p>
        <p className={styles.phy}>Test</p>
      </div>
      <div className={styles.cseViva}>
        <p className={styles.phy}>{`CSE `}</p>
        <p className={styles.phy}>Viva</p>
      </div>
      <div className={styles.cat}>{`CAT `}</div>
      <div className={styles.engTest}>
        <p className={styles.phy}>Eng</p>
        <p className={styles.phy}>Test</p>
      </div>
      <div className={styles.upcomingExams}>UPCOMING EXAMS</div>
    </div>
  );
};

export default Exams;
