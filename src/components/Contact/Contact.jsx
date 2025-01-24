import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <p className={styles.name}>{name}</p>
      <p className={styles.number}>{number}</p>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
