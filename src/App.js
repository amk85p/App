import Home from './components/Home/Home';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import List from './components/List/List';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/list/list/:listId' element={<List />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <h1>404 NOT FOUND</h1>
              </main>
            }
          />
        </Routes>
      </Container>
    </main>
  );
};
export default App;
