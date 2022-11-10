import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

import { getFavoriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = (props) => {
  const cardsFav = useSelector(getFavoriteCards);

  const card = props.card;
  console.log(props.id, props.isFavorite, cardsFav);
  if (cardsFav.length === 0)
    return (
      <div className={styles.hero}>
        <PageTitle>Favorite</PageTitle>{' '}
        <p className={styles.subtitle}>
          A simple to-do app, with lists, columns and card
        </p>
        <p>You don't have any favorite cards</p>
      </div>
    );

  return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>
        A simple to-do app, with lists, columns and card
      </p>
      <div className={styles.container}>
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
