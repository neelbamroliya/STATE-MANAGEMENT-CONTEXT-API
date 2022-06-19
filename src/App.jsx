import './App.css';
import MovieList from './MovieList';
import Navbar from './Navbar';
import AddMovies from './AddMovies';
import { MovieProvider } from './MovieContext';


function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Navbar />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
