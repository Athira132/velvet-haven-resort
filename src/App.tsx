import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
            {/* Sticky Header */}
            <Navbar />

            {/* Main Page Content */}
            <main style={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/rooms" element={<RoomsPage />} />
                <Route path="/rooms/:roomId" element={<RoomsPage />} />
                <Route path="/experiences" element={<ExperiencesPage />} />
                <Route path="/facilities" element={<FacilitiesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>

            {/* Persistent Sticky WhatsApp & Call Actions */}
            <StickyActions />

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
