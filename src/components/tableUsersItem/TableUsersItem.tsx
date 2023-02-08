import { Link } from "react-router-dom";

import { usersTypes } from "../../types";

import styles from "./TableUsersItem.module.scss";

interface TableUsersItemProps {
  user: usersTypes.User;
}

const TableUsersItem: React.FC<TableUsersItemProps> = ({ user }) => {
  const { email, gender, name, status, id } = user;
  return (
    <Link to={`/edit/${id}`} className={styles.container}>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>{email}</p>
      <p className={styles.text}>{gender}</p>
      <div
        className={`${styles.status} ${status === "active" && styles.active}`}
      ></div>
    </Link>
  );
};

export default TableUsersItem;
