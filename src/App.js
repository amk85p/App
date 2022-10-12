import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container';

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
const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};
export default App;
