import HashLoader from "react-spinners/HashLoader";

import styles from "./ModalLoader.module.scss";

const ModalLoader: React.FC = () => {
  return (
    <div className={styles.container}>
      <HashLoader color={"#ffffff"} size={100} />
    </div>
  );
};

export default ModalLoader;
