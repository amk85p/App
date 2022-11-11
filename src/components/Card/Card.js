import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const isFavorite = props.isFavorite;

  const clickHandle = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        type='button'
        onClick={clickHandle}
        className={clsx(styles.button, isFavorite && styles.buttonActive)}
      >
        <span className={styles.icon + ' fa fa-star'} />
      </button>
    </li>
  );
};

export default Card;
