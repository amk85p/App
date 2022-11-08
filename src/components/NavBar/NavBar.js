import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <article className={styles.nav}>
        <span className={styles.icon + ' fa fa-bars'} />
        <form>
          <ul className={styles.title}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/'
              >
                Home
              </NavLink>{' '}
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to={'/favorite'}
              >
                Favorite
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to={'/about'}
              >
                About
              </NavLink>
            </li>
          </ul>
        </form>
      </article>
    </div>
  );
};

export default NavBar;
