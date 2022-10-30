import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = (props) => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const columnId = props.columnId;

  const handleSubmit = (e) => {
    e.preventDefault();
    //usunąć props.action({ title: title }, props.columnId)
    dispatch({ type: 'ADD_CARD', payload: { title: title, columnId } });
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
