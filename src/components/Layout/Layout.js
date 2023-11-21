import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { ContactHeader } from 'components/ContactHeader/ContactHeader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <body>
      <header className={css.mainNav}>
        <Link className={css.logo} to="/">
          Avto<span>Rent</span>
        </Link>
        <Navigation />
        <ContactHeader />
      </header>

      <main>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </body>
  );
};

export default Layout;
