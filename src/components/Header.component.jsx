import ThemeSwitcher from './ThemeSwitcher.component';
import styles from './../scss/header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="/">
          Magic Link Auth
        </a>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
