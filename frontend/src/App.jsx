import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Demo from './components/Demo';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Team from './components/Team';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const coords = useRef({ x: 0, y: 0 });
  const circleRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const circles = circleRefs.current;
    circles.forEach(circle => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.pageX;
      coords.current.y = e.pageY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        if (!circle) return;
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const circles = Array.from({ length: 30 }, (_, i) => {
    const hue = -(Math.floor((i / 30) * 200));
    const color = `hsl(${hue}, 100%, 60%)`;
    return (
      <div
        key={i}
        className="circle"
        ref={(el) => (circleRefs.current[i] = el)}
        style={{ backgroundColor: color }}
      />
    );
  });

  return (
    <>
      {circles}
      {loading ? (
        <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <Loading />
        </div>
      ) : (
        <div >
          <Navbar />

          <div className="app-content fade-in">
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
          </div>
        </div >
      )
      }
    </>
  );
}

export default App;
