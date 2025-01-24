import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import './styles/Root.css';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';

function App() {
  const updateClientWidth = () => {
    const clientWidth = document.documentElement.clientWidth;
    console.log('client-width', clientWidth);
    document.documentElement.style.setProperty('--client-width', `${clientWidth}px`);
  };
  useEffect(() => {
    updateClientWidth();
    window.addEventListener('resize', updateClientWidth);
    return () => window.removeEventListener('resize', updateClientWidth);
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          index
          path='/'
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
