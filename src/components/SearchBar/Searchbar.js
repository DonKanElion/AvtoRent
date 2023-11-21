// import { useCallback, useState } from 'react';
import { useState } from 'react';
import Select from 'react-select';
// import { useSelector } from 'react-redux';

// import { useDispatch, useSelector } from 'react-redux';
// import { useCallback, useState } from 'react';
// import { getCars } from 'redux/selector';

// import { useSearchParams } from 'react-router-dom';
// import { rentalPrice } from 'hooks/const';

import css from './Searchbar.module.css';
// import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [valueSelect, setValueSelect] = useState('');
  // const [inputValue, setInputValue] = useState('');
  // const cars = useSelector(getCars);

  let makesOptions = [];
  let rentalPriceOptions = [];

  const handleChange = event => {
    const selectedValue = event.currentTarget;
    setValueSelect(selectedValue);
    console.log('selectedValue', selectedValue);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setQuery(evt.currentTarget.value);
    // console.log('query', query)
    onSubmit(query.trim()); //вызываем имя пропса, кот.передаётся из onSubmit, в кот-м лежит  ссылка на метод handleFormSubmit
    setQuery('');
  };

  // if (cars) {
  //   cars.forEach(item =>
  //     makesOptions.push({ value: item.make, label: item.make })
  //   );
  //   rentalPrice.forEach(item =>
  //     rentalPriceOptions.push({ value: item, label: item })
  //   );
  // }
  console.log('makesOptions', makesOptions);
  console.log('rentalPriceOptions', rentalPriceOptions);

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form__text}>
          Car brand
          <Select
            className={css.form__select}
            defaultValue={{
              value: 'Enter the text...',
              label: 'Enter the text...',
            }}
            name="make"
            value={{ value: '', label: valueSelect || 'Enter the text...' }}
            options={[{ value: 'Enter the text...' }, ...makesOptions]}
            onChange={e => handleChange(e)}
          ></Select>
        </label>

        <label className={css.form__text}>
          Price/1 hour
          <Select
            className={css.form__select__price}
            placeholder="Select..."
            defaultValue={{
              value: 'To $',
              label: 'To $',
            }}
            name="rentalPrice"
            value={{ value: '', label: 'To $' }}
            options={[{ value: 'To $' }, ...rentalPriceOptions]}
          />
        </label>

        <label className={css.form__text__mile}>
          Car mileage / km
          <div className={css.form__text__div}>
            <input
              className={css.form__text__input}
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              value={query}
              id="mileFrom"
            />
            <label for="mileFrom" className={css.form__text__inputlabel}>
              From
            </label>
            <input
              className={css.form__text__input}
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              value={query}
              id="mileTo"
            />
            <label for="mileTo" className={css.form__text__inputlabelto}>
              To
            </label>
          </div>
        </label>

        <button type="submit" className={css.search_btn}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
