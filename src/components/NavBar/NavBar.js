import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <article className={styles.nav}>
        <span className={styles.icon + ' fa fa-bars'} />
        <form>
          <h3 className={styles.title}>
            <Link className={styles.link} to={'/'}>
              Home
            </Link>
          </h3>
          <h3 className={styles.title}>
            <Link className={styles.link} to={'/favorite'}>
              Favorite
            </Link>
          </h3>
          <h3 className={styles.title}>
            <Link className={styles.link} to={'/about'}>
              About
            </Link>
          </h3>
        </form>
      </article>
    </div>
  );
};

export default NavBar;
