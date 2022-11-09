import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = (props) => {
  const cardsFav = useSelector(getFavoriteCards);
  console.log(props.id, props.isFavorite);
  const card = props.card;

  return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>
        A simple to-do app, with lists, columns and card
      </p>
      <div>
        <ul className={styles.cards}>
          {cardsFav.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Favorite;
