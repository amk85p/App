import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';

// const App = () => {
//   return (
//     <div>
//       <h1>My first React App</h1>
//       <p>A simple to-do app, with lists, columns and card</p>
//       <form>
//         <input type='text' />
//         <button>Search</button>
//       </form>
//     </div>
//   );
// };
const Home = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <List />
    </>
  );
};
export default Home;
