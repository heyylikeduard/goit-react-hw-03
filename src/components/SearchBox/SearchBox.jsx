import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  const handleChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;
