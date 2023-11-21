import css from './index.module.css';

export const ContactHeader = () => {
  return (
    <div className={css.contact}>
      <ul className={css.list}>
        <li className={css.item}>
          <a
            className={`${css.link} ${css.email}`}
            href="mailto:info@devstudio.com"
          >
            info@avtorent.com
          </a>
        </li>
        <li className={css.item}>
          <a className={`${css.link} ${css.phone}`} href="tel:+380961111111">
            +38 066 055 80 11
          </a>
        </li>
      </ul>
    </div>
  );
};
