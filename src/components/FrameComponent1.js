import { Link } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
const FrameComponent1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <Link className={styles.frameInner} to="/dashboard1" />
      <div className={styles.password}>Password</div>
      <div className={styles.registrationNumber}>Registration Number</div>
      <div className={styles.login}>Login</div>
      <div className={styles.login1}>Login</div>
      <Link className={styles.rectangleA} to="/" />
      <div className={styles.back}>Back</div>
    </div>
  );
};

export default FrameComponent1;
