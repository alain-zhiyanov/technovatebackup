import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';
import SubscribePage from './pages/SubscribePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
