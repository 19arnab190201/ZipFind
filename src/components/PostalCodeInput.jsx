// PostalCodeInput.js
import React from "react";
import styles from "./PostalCodeInput.module.css";

const PostalCodeInput = ({ postalCode, onPostalCodeChange, onSubmit }) => {
  return (
    <form className={styles.PostalCodeForm} onSubmit={onSubmit}>
      <input
        className={styles.postalCodeInput}
        placeholder='Enter Postal Code'
        type='text'
        value={postalCode}
        onChange={onPostalCodeChange}
      />

      <button type='submit'>Search</button>
    </form>
  );
};

export default PostalCodeInput;
