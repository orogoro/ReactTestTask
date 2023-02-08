import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container_title}>
        <h1>
          Welcome to <span className={styles.span}>Users App</span>
        </h1>
      </div>
      <div className={styles.container_img}>
        <div className={styles.slider}>
          <div className={styles.container}>
            <div className={styles.slide + " " + styles.x}></div>
            <div className={styles.slide + " " + styles.y}></div>
            <div className={styles.slide + " " + styles.z}></div>
          </div>
          <div className={styles.shadow}></div>
        </div>
      </div>
      <div className={styles.container_button}>
        <p className={styles.text}>Fast React Application</p>
        <Link to="/users" className={styles.button} type="button">
          Try it now
        </Link>
      </div>
    </>
  );
};

export default Home;
