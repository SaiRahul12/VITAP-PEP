import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.studentsAreOfferedImmenseOParent} id="home">
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
        <img className={styles.frameChild} alt="" src="/group-5.svg" />
        <img className={styles.linesIcon} alt="" src="/lines.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <div className={styles.aboutUsParent}>
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.logIn} onClick={onLogInTextClick}>
          Log in
        </div>
        <img className={styles.frameInner} alt="" src="/rectangle-4@2x.png" />
        <div className={styles.rectangleDiv} />
        <div className={styles.home1}>Home</div>
      </div>
      <div className={styles.page1} />
      <div className={styles.homeInner} />
      <div className={styles.div} />
      <Button
        className={styles.button}
        sx={{ width: 271 }}
        variant="text"
        name="login"
        id="login"
        color="primary"
        href="/login-page"
      >
        Button
      </Button>
      <TextField
        className={styles.textfield}
        sx={{ width: 257 }}
        color="primary"
        variant="filled"
        multiline
        label="Label"
        placeholder="Textarea placeholder"
        margin="none"
      />
      <div className={styles.login}>LOGIN</div>
      <div className={styles.examTest}>EXAM TEST</div>
      <div className={styles.login1}>{`LOGIN `}</div>
      <div className={styles.vitopia}>{`VITOPIA `}</div>
    </div>
  );
};

export default Home;
