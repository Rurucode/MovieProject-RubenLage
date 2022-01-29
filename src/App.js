import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import {contextMovieList} from './context/contextMovieList';
 
function App() {
  // Hook para almacenar las peliculas buscadas de la Api
  const [movieList, setMovieList] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <contextMovieList.Provider value={{movieList, setMovieList}}>
          <Main />
        </contextMovieList.Provider>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
