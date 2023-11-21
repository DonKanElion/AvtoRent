import React, { useState } from 'react';
import css from './CardList.module.css';
import stop from '../../img/placeholder.png';

export const CardlistItem = ({ props }, cars) => {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    img,
    address,
    rentalCompany,
    type,
    functionalities,
  } = props;

  const [carsFavorite, setCarsFavorite] = useState([]);
  const [isInFavorite, setIsInFavorite] = useState(false);

  const handleClickFavorite = props => {
    const index = carsFavorite.findIndex(car => car.id === props.id);

    if (cars?.length === 0) {
      setIsInFavorite(true);
    } else {
      if (index === -1 && isInFavorite) {
        setIsInFavorite(false);
      } else {
        setIsInFavorite(true);
      }
    }
  };

  return (
    <li key={id} className={css.item}>
      <img
        src={img || stop}
        alt={make}
        className={css.image}
        width="274"
        height="268"
        onError={event => (event.target.src = stop)}
      />
      <button
        type="submit"
        onClick={() => handleClickFavorite(props)}
        className={css.iconBtn}
        style={{ stroke: 'red' }}
      >
        <i className="fa fa-heart"></i>
      </button>
      <div className={css.footerCart}>
        <div className={css.modelTextWrapper}>
          <p>{make}&nbsp;</p> <p className={css.model}>{model},&nbsp;</p>
          <p>{year}&nbsp;</p>
          <p className={css.price}>{rentalPrice}</p>
        </div>

        <div className={css.infoCar}>
          <p>{address} |</p>
          <p>{rentalCompany} |</p>
          <p>{type} |</p>
          <p>{id} |</p>
          <p>{functionalities[1]}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.btn}
        // onClick={handleClick}
      >
        Learn more
      </button>
    </li>
  );
};
