import styles from "./Introduction.module.css";

// Total: Approximately 10 minutes
// Preparation: 5 minutes
// Cooking: 5 minutes

const preparation = [
  "Total: Approximately 10 minutes",
  "Preparation: 5 minutes",
  "Cooking: 5 minutes",
];

function Introduction() {
  return (
    <section>
      <h1 className={styles.mainHeader}>Simple Omelette Recipe</h1>
      <p className={styles.description}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className={styles.preparationListBox}>
        <h3 className={styles.preparationHeader}>Preparation time</h3>
        <ul className={styles.preparationList}>
          {preparation.map((e) => (
            <li key={e} className={styles.preparationItem}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Introduction;
