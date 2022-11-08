import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { uptadeSearchstring } from '../../redux/store';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: searchString });
    dispatch(uptadeSearchstring(searchString));
  };

  // useEffect(() => {
  //   dispatch(uptadeSearchstring(searchString));
  // }, [searchString]);

  //Etap 6
  useEffect(() => {
    dispatch(uptadeSearchstring(searchString));
  }, []);

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        placeholder='Search...'
        type='text'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
