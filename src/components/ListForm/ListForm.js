import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const Listform = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));

    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listform}>
      Title:{' '}
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      Description:{' '}
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default Listform;
