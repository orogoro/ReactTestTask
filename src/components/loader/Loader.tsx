import HashLoader from "react-spinners/HashLoader";

import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return <HashLoader className={styles.loader} color={"#1c183a"} size={70} />;
};

export default Loader;
