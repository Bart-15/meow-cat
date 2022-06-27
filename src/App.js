import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from '../src/pages/Search';
import {CssBaseline} from '@mui/material';

function App() {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
