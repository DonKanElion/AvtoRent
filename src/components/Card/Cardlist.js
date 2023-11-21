import React, { useState } from 'react';
import { useGetCarsQuery } from 'redux/carsSlice';

import css from './CardList.module.css';
import { CardlistItem } from './CardListItem';

export const CardList = () => {
  const [page, setPage] = useState(1);
  const { data: cars, isFetching, error } = useGetCarsQuery({ page: page });

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul className={css.list}>
      {cars?.map(car => (
        <CardlistItem key={car.id} props={car} cars={cars} />
      ))}
      {/* {isShowModal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
        )} */}
    </ul>
  );
};
