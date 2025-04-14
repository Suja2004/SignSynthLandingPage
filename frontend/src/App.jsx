import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Demo from './components/Demo';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Product />
              <Demo />
              <Slider />
              <Footer />
            </>
          }
        />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  );
}

export default App;
