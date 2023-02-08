import Select from "react-select";

import styles from "./Filter.module.scss";

interface FilterProps {
  changeFilter: (
    valueSelect: {
      label: string;
      value: string;
    } | null
  ) => void;
}

const Filter: React.FC<FilterProps> = ({ changeFilter }) => {
  const filterSelect = (valueSelect: any): void => {
    changeFilter(valueSelect);
  };

  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.text}>Change gender</p>
      <Select
        className={styles.select}
        isClearable
        options={options}
        onChange={filterSelect}
      />
    </div>
  );
};

export default Filter;
