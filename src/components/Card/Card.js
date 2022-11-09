import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();

  const id = props.id;
  const isFavorite = props.isFavorite;

  const clickHandle = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite({ id, isFavorite }));
    console.log('g', props.id, props.isFavorite);
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        onClick={clickHandle}
        className={clsx(
          styles.icon + ' fa fa-star',
          props.isFavorite && styles.active
        )}
      >
        {/* <span className={styles.icon + ' fa fa-star'}></span> */}
      </button>
    </li>
  );
};

export default Card;
