import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const handleClick = evt => {
    console.log('Evt', evt.target);
  };

  return (
    <nav className={css.listNav}>
      <NavLink className={css.link} to="/" onClick={evt => handleClick(evt)}>
        Home
      </NavLink>
      <NavLink
        className={css.link}
        to="/catalog"
        onClick={evt => handleClick(evt)}
      >
        Catalog
      </NavLink>
      <NavLink
        className={css.link}
        to="/favorites"
        onClick={evt => handleClick(evt)}
      >
        Favorites
      </NavLink>
    </nav>
  );
};
