import styles from './Card.module.scss';
import { useSelector } from 'react-redux';

const Card = (props) => {
  return <li className={styles.card}>{props.title}</li>;
};

export default Card;
