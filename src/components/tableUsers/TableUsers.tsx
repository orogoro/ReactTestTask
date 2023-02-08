import { usersTypes } from "../../types";
import { TableUsersItem, Paginate, ModalLoader, Loader } from "../";

import styles from "./TableUsers.module.scss";

interface TableUsersProps {
  users: usersTypes.User[];
  usersFilter: usersTypes.User[];
  pagination: usersTypes.Pagination;
  nextPage: (page: number) => void;
  loading: boolean;
}

const TableUsers: React.FC<TableUsersProps> = ({
  users,
  usersFilter,
  pagination,
  nextPage,
  loading,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <p className={styles.title}>Name</p>
          <p className={styles.title}>Email</p>
          <p className={styles.title}>Gender</p>
          <p className={styles.title}>Status</p>
        </div>

        {loading && users.length !== 0 && <ModalLoader />}

        {users.length !== 0 &&
          usersFilter.length === 0 &&
          users.map((user) => <TableUsersItem key={user.id} user={user} />)}

        {usersFilter.length !== 0 &&
          usersFilter.map((user) => (
            <TableUsersItem key={user.id} user={user} />
          ))}

        {pagination && <Paginate pagination={pagination} nextPage={nextPage} />}
      </div>
      {users.length === 0 && usersFilter.length === 0 && <Loader />}
    </>
  );
};

export default TableUsers;
