import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label className={styles.FilterLable}>
        <input
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={filter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  inputHandler: PropTypes.func.isRequired,
};

export default Filter;