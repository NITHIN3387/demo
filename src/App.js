import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './pages/Home';
import HomeLayout from './layout/HomeLayout';
import MainLayout from './layout/MainLayout';
import Main from './pages/Main';
import Score from './pages/Score';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/main/*' element={<MainLayout />}>
          <Route path='*' element={<Main />} />
          <Route path='score' element={<Score />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
