import { useMemo } from "react";
import styles from "./PERFORMANCE1.module.css";
const PERFORMANCE1 = ({ propLeft }) => {
  const pERFORMANCEStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.performance} style={pERFORMANCEStyle}>
      <div className={styles.performance1}>PERFORMANCE</div>
      <div className={styles.performanceChild} />
      <div className={styles.performanceItem} />
      <div className={styles.div}>68%</div>
      <div className={styles.mathsPhysicsContainer}>
        <p className={styles.maths}>{`Maths : `}</p>
        <p className={styles.maths}>&nbsp;</p>
        <p className={styles.maths}>Physics :</p>
        <p className={styles.maths}>&nbsp;</p>
        <p className={styles.maths}>ECE :</p>
        <p className={styles.maths}>&nbsp;</p>
        <p className={styles.maths}>CSE :</p>
        <p className={styles.maths}>&nbsp;</p>
        <p className={styles.maths}>English :</p>
        <p className={styles.maths}>&nbsp;</p>
        <p className={styles.maths}>STS :</p>
      </div>
    </div>
  );
};

export default PERFORMANCE1;
