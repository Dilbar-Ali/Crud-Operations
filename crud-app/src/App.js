import "./App.css";

// __________Components___________

import NavBar from "./components/NavBar";
import MovieFlex  from "./components/MovieFlex";
import AllUsers from "./components/AllUsers";
import AddUsers from "./components/AddUsers";

import {BrowserRouter,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <MovieFlex/>
      <AllUsers/>
      <AddUsers/>
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
