import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Moon, Sun } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { themeMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          backgroundColor: isScrolled
            ? (themeMode === 'night' ? 'rgba(5, 16, 11, 0.96)' : 'rgba(8, 22, 16, 0.94)')
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          paddingTop: isScrolled ? '0.35rem' : '0.6rem',
          paddingBottom: isScrolled ? '0.35rem' : '0.6rem'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo on Left - Large & Prominent in a Slim Header */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginRight: 'auto' }}>
            <img
              src={RESORT_CONFIG.images.logo}
              alt={`${RESORT_CONFIG.name} Logo`}
              style={{
                height: isScrolled ? '85px' : '115px',
                maxHeight: '125px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.3s ease',
                filter: 'drop-shadow(0 4px 18px rgba(0,0,0,0.5))'
              }}
            />
          </Link>

          {/* All Navigation Options Right-Aligned */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1.75rem', marginLeft: 'auto' }} className="desktop-nav">
            <nav style={{ display: 'flex', gap: '1.4rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-gold)' : (themeMode === 'day' && !isScrolled ? '#081A12' : '#FFFFFF'),
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    fontWeight: isActive || (themeMode === 'day' && !isScrolled) ? '600' : '500',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease',
                    borderBottom: isActive ? '2px solid var(--color-gold)' : '2px solid transparent',
                    paddingBottom: '0.2rem',
                    textShadow: themeMode === 'day' && !isScrolled ? '0 1px 4px rgba(255,255,255,0.8)' : '0 2px 6px rgba(0,0,0,0.5)'
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Single Day/Night Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={themeMode === 'day' ? 'Switch to Night Mode' : 'Switch to Day Mode'}
              title={themeMode === 'day' ? 'Switch to Night Mode 🌙' : 'Switch to Day Mode ☀️'}
              className="theme-toggle-btn"
            >
              {themeMode === 'day' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Primary Action Button */}
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}>
              Book Your Stay
            </Link>
          </div>

          {/* Mobile Actions (Toggle + Drawer button) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-toggle-btn">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="theme-toggle-btn"
              style={{ width: '40px', height: '40px' }}
            >
              {themeMode === 'day' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                color: themeMode === 'day' && !isScrolled ? '#081A12' : '#FFFFFF',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: themeMode === 'night' ? 'rgba(5, 16, 11, 0.98)' : 'rgba(8, 22, 16, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          transition: 'all 0.3s ease'
        }}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          <X size={32} />
        </button>

        <img
          src={RESORT_CONFIG.images.logo}
          alt={RESORT_CONFIG.name}
          style={{ height: '115px', marginBottom: '2rem', objectFit: 'contain', filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.5))' }}
        />

        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? 'var(--color-gold)' : '#FFFFFF',
                textDecoration: 'none',
                fontSize: '1.35rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: isActive ? '600' : '400',
                letterSpacing: '0.05em'
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '280px', gap: '0.85rem' }}>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Book Your Stay
          </Link>

          <a
            href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to enquire about staying at Velvet Haven Resort, Vagamon.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: '100%' }}
          >
            <MessageSquare size={18} /> WhatsApp Enquiry
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
