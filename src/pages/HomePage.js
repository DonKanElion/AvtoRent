import css from './HomePage.module.css';

export default function Home() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.hero_title}>Car hire in the Ukraine.</h1>
        <h3 className={css.title}>
          Holiday Autos Car Rental. Search. Compare. Save.
        </h3>
      </div>
    </section>
  );
}
