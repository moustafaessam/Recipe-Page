import styles from "./Nutrition.module.css";

function Nutrition() {
  return (
    <section className={styles.sectionBox}>
      <h1 className="sectionHeader">Nutrition</h1>
      <p className={styles.text}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className={styles.micros}>
        <div className={styles.row}>
          <div className={styles.rowItem}>Calories</div>
          <div className={`${styles.rowItem} ${styles.value}`}>277kcal</div>
        </div>
        <hr />
        <div className={styles.row}>
          <div className={styles.rowItem}>Carbs</div>
          <div className={`${styles.rowItem} ${styles.value}`}>0g</div>
        </div>
        <hr />
        <div className={styles.row}>
          <div className={styles.rowItem}>Protein</div>
          <div className={`${styles.rowItem} ${styles.value}`}>20g</div>
        </div>
        <hr />
        <div className={styles.row}>
          <div className={styles.rowItem}>Fat</div>
          <div className={`${styles.rowItem} ${styles.value}`}>22g</div>
        </div>
      </div>
    </section>
  );
}

export default Nutrition;
