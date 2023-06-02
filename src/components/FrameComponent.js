import { useMemo } from "react";
import styles from "./FrameComponent.module.css";
const FrameComponent = ({ propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={styles.materialSymbolsaddAPhotoOParent}
      style={frameDivStyle}
    >
      <div className={styles.materialSymbolsaddAPhotoO} />
      <div className={styles.frameChild} />
      <div className={styles.fullNameContainer}>
        <span>
          <span>Full Name</span>
        </span>
        <span className={styles.span}>
          <span>{` `}</span>
          <span className={styles.span1}>{`: `}</span>
          <span>{`_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `}</span>
          <span className={styles.span1}>{` `}</span>
        </span>
      </div>
      <div className={styles.registrationNumberContainer}>
        <span>
          <span>{`Registration Number `}</span>
          <span className={styles.span3}>: _ _ _ _ _ _ _ _ _</span>
        </span>
        <span className={styles.span3}>
          <span>{` `}</span>
        </span>
      </div>
      <div className={styles.applicationNumberContainer}>
        <span>
          <span
            className={styles.applicationNumber}
          >{`Application Number `}</span>
          <span className={styles.span1}>: _ _ _ _ _ _ _ _ _ _</span>
        </span>
        <span className={styles.span1}>
          <span>{` `}</span>
        </span>
      </div>
      <div className={styles.branchContainer}>
        <span>
          <span className={styles.applicationNumber}>{`Branch `}</span>
          <span
            className={styles.span1}
          >{`: _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ `}</span>
        </span>
        <span className={styles.span1}>
          <span>{` `}</span>
        </span>
      </div>
      <div className={styles.mentorNameContainer}>
        <span>
          <span className={styles.applicationNumber}>{`Mentor Name `}</span>
          <span
            className={styles.span1}
          >{`: _ _ _ _ _ _ _ _ _ _ _ _ _ _ `}</span>
        </span>
        <span className={styles.span1}>
          <span>{` `}</span>
        </span>
      </div>
      <div className={styles.mentorMobileNumberContainer}>
        <span>
          <span>{`Mentor Mobile Number `}</span>
          <span className={styles.span3}>{`: _ _ _ _ _ _ _ _ `}</span>
        </span>
        <span className={styles.span3}>
          <span>{` `}</span>
        </span>
      </div>
      <div className={styles.kushajSolanki}>
        <span>KUSHAJ SOLANKI</span>
        <span className={styles.span13}>{` `}</span>
      </div>
      <div className={styles.welcomeBack}>Welcome back,</div>
      <div className={styles.frameItem} />
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
    </div>
  );
};

export default FrameComponent;
