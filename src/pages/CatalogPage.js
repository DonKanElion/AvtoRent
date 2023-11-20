import Searchbar from 'components/SearchBar/Searchbar';
import CatalogForm from 'components/CatalogForm/CatalogForm';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <div className={css.container}>
      <Searchbar />
      <CatalogForm />
    </div>
  );
}
