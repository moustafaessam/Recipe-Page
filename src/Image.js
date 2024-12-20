import styles from "./Image.module.css";

function Image() {
  return (
    <section className={styles.imgSection}>
      <img
        src="image-omelette.jpeg"
        alt="omelette Image"
        className={styles.img}
      />
    </section>
  );
}

export default Image;
