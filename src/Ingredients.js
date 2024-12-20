import styles from "./Ingredients.module.css";

const ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

function Ingredients() {
  return (
    <>
      <section className={styles.ingredientsSection}>
        <h2 className="sectionHeader">Ingredients</h2>
        <ul className={styles.ingredientsList}>
          {ingredients.map((e) => (
            <li key={e} className={styles.ingredientsItem}>
              {e}
            </li>
          ))}
        </ul>
      </section>
      <hr />
    </>
  );
}

export default Ingredients;
