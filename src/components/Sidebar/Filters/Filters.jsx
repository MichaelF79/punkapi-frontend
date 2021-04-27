import React from "react";
import styles from "./Filters.module.scss";

const Filters = (props) => {
  return (
    <form className={styles.filters} onChange={async (e) => await props.handleFilter(props.searchText, e)}>
      <h3>Filter By:</h3>
      <h4>ABV (Alc %)</h4>
      <div className={styles.filterRow}>
        <div className={styles.radioAndTag}>
          <label for="abv-ascending">Low</label>
          <input type="radio" name="sorting" value="abv-ascending" />
        </div>
        <div className={styles.radioAndTag}>
          <label for="abv-descending">High</label>
          <input type="radio" name="sorting" value="abv-descending" />
        </div>
      </div>
      <h4>EBC (Colour)</h4>
      <div className={styles.filterRow}>
        <div className={styles.radioAndTag}>
          <label for="ebc-ascending">Pale</label>
          <input type="radio" name="sorting" value="ebc-ascending" />
        </div>
        <div className={styles.radioAndTag}>
          <label for="ebc-descending">Dark</label>
          <input type="radio" name="sorting" value="ebc-descending" />
        </div>
      </div>

      <h4>IBU (Bitterness)</h4>
      <div className={styles.filterRow}>
        <div className={styles.radioAndTag}>
          <label for="ibu-ascending">Slight</label>
          <input type="radio" name="sorting" value="ibu-ascending" />
        </div>
        <div className={styles.radioAndTag}>
          <label for="abv-descending">Extreme</label>
          <input type="radio" name="sorting" value="ibu-descending" />
        </div>
      </div>
    </form>
  );
};

export default Filters;
