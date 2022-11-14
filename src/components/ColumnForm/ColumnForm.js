import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnRedux';

const ColumnForm = ({ listId }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  //console.log(listId, icon, title);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));

    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.ColumnForm}>
      Title:{' '}
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      Icon:{' '}
      <input
        type='text'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        className={styles.input}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
