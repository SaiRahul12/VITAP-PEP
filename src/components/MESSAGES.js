import { useMemo } from "react";
import styles from "./MESSAGES.module.css";
const MESSAGES = ({ propLeft }) => {
  const mESSAGESStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.messages} style={mESSAGESStyle}>
      <div className={styles.messagesChild} />
      <div className={styles.messagesItem} />
      <div className={styles.messagesInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.messagesChild1} />
      <div className={styles.messagesChild2} />
      <div className={styles.p}>P</div>
      <div className={styles.e}>E</div>
      <div className={styles.maths}>Maths :</div>
      <div className={styles.phy}>Phy :</div>
      <div className={styles.eng}>Eng :</div>
      <div className={styles.iHaveUploaded}>I have uploaded the m</div>
      <div className={styles.thereWillNo}>There will no class tod</div>
      <div className={styles.m}>M</div>
      <div className={styles.lastDateFor}>Last date for subm</div>
      <div className={styles.messages1}>MESSAGES</div>
    </div>
  );
};

export default MESSAGES;
