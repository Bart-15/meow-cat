import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from '../src/pages/Search';
import CatItem from '../src/components/Cats/CatItem/CatItem'
import {CssBaseline} from '@mui/material';

function App() {
  
  return (
    <div>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/cat" element={<CatItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
