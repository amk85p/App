import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnRedux';
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';
import { getListById } from '../../redux/listsRedux';

const List = () => {
  const { listId } = useParams();
  // const columns = useSelector(getColumnsByList);
  // // const columns = useSelector((state) => state.columns);

  // const listData = useSelector((state) => getListById(state, 1));
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector((state) => getColumnsByList(state, listId));

  //Etap 6
  if (!listData) return <Navigate to='' />;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;
