import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';
import { removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const isFavorite = props.isFavorite;

  const clickHandle = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemove = () => {
    dispatch(removeCard(id));
    console.log('remove', id);
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.buttons}>
        <button
          type='button'
          onClick={clickHandle}
          className={clsx(styles.button, isFavorite && styles.buttonActive)}
        >
          <span className={styles.icon + ' fa fa-star'} />
        </button>
        <button
          className={styles.button}
          onClick={() => handleRemove(props.id)}
        >
          <span className={styles.iconTrash + ' fa fa-trash'} />
        </button>
      </div>
    </li>
  );
};

export default Card;
