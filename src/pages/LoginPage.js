import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/login-page2");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/login-page2");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageChild} />
      <div className={styles.loginPageItem} />
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
      <div className={styles.loginPageInner} />
      <div className={styles.aboutUsParent}>
        <div className={styles.aboutUs}>About us</div>
        <img className={styles.frameItem} alt="" src="/rectangle-4@2x.png" />
        <div className={styles.frameInner} />
        <div className={styles.home} onClick={onHomeTextClick}>
          Home
        </div>
        <div className={styles.logIn}>Log in</div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.loginPageChild1} />
      <div className={styles.loginPageChild2} onClick={onRectangle5Click} />
      <div className={styles.studentsLogin}>Student’s Login</div>
      <div className={styles.loginPageChild3} onClick={onRectangle6Click} />
      <div className={styles.facultyLogin}>Faculty Login</div>
    </div>
  );
};

export default LoginPage;
