import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteCars } from 'redux/selector';
import { CardList } from 'components/Card/Cardlist';

import BasicImg from '../../img/istockphoto-125419244-1024x1024.jpg';
import css from './FavoriteForm.module.css';

const FavoriteForm = () => {
  const favoriteCars = useSelector(getFavoriteCars);
  //   console.log('favoriteCars', favoriteCars);

  return (
    <div>
      {favoriteCars.length > 0 ? (
        <CardList carsData={favoriteCars} />
      ) : (
        <div>
          <img
            className={css.notImg}
            src={BasicImg}
            alt="A car"
            width="261"
            height="326"
          />
          <p className={css.notImgText}>
            You haven't added any favorite cars yet
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoriteForm;
