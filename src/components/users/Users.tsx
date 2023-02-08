import { useEffect, useMemo, useRef, useState } from "react";

import { getUsersRequest } from "../../API/APIusers";
import { usersTypes } from "../../types";

import { TableUsers, Filter } from "../";

import styles from "./Users.module.scss";

const Users: React.FC = () => {
  const [users, setUsers] = useState<usersTypes.User[] | []>([]);
  const [genderUsers, setGenderUsers] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [pagination, setPagination] = useState<usersTypes.Pagination | null>(
    null
  );
  const [page, setPage] = useState<number>(1);
  const currentPage = useRef<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (currentPage.current === page) {
      return;
    }

    (async () => {
      try {
        setLoading(true);
        const response = await getUsersRequest(page);
        setUsers(response!.data);
        setPagination(response!.meta.pagination);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();

    currentPage.current = page;
  }, [page]);

  const nextPage = (page: number): void => {
    setPage(page);
  };

  const changeFilter = (valueSelect: any): void => {
    if (valueSelect === null) {
      setGenderUsers(null);
      return;
    }

    setGenderUsers(valueSelect);
  };

  const filterSelect = useMemo<usersTypes.User[]>(() => {
    let data = users;

    if (genderUsers === null) {
      return data;
    }

    if (genderUsers.label === "Female") {
      const fameleUsers = data?.filter(
        (item) => item.gender === genderUsers.value
      );
      return fameleUsers;
    }

    if (genderUsers.label === "Male") {
      const maleUsers = data?.filter(
        (item) => item.gender === genderUsers.value
      );
      return maleUsers;
    }

    return data;
  }, [genderUsers, users]);

  return (
    <div className={styles.container}>
      <Filter changeFilter={changeFilter} />
      <TableUsers
        users={users}
        usersFilter={filterSelect}
        pagination={pagination!}
        nextPage={nextPage}
        loading={loading}
      />
    </div>
  );
};

export default Users;
