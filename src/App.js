import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from '../src/pages/Search';
import LandingPage from '../src/pages/Landingpage';
import CatItem from '../src/components/Cats/CatItem/CatItem'
import {CssBaseline, Paper} from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/cat/:id" element={<CatItem />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
