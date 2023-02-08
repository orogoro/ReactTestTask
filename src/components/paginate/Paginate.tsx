import Pagination from "rc-pagination";

import styles from "./Paginate.module.scss";

import { usersTypes } from "../../types";

interface PaginateProps {
  pagination: usersTypes.Pagination;
  nextPage: (page: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({ pagination, nextPage }) => {
  const PaginationChange = (page: number) => {
    nextPage(page);
  };

  return (
    <div className={styles.container}>
      <Pagination
        className="ant-pagination"
        onChange={PaginationChange}
        total={pagination?.pages * 10}
        current={pagination?.page}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Paginate;
