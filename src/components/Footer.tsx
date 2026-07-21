import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pine" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '5rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <img
              src={RESORT_CONFIG.images.logo}
              alt={RESORT_CONFIG.name}
              style={{ height: '90px', width: 'auto', marginBottom: '1.25rem', objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}
            />
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              A sanctuary of serenity nestled among Vagamon's misty mountain pine hills. Discover modern luxury, peaceful nature, and authentic Kerala hospitality.
            </p>
            <a
              href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to enquire about staying at Velvet Haven Resort, Vagamon.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
            >
              <MessageSquare size={16} /> WhatsApp Us
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif" style={{ color: 'var(--color-gold)', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              Explore Resort
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { name: 'About Our Story', path: '/about' },
                { name: 'Luxury Accommodation', path: '/rooms' },
                { name: 'Experiences & Activities', path: '/experiences' },
                { name: 'Resort Facilities', path: '/facilities' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Location & Travel', path: '/location' },
                { name: 'Contact & Enquiries', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      fontSize: '0.925rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Accommodation Types */}
          <div>
            <h4 className="font-serif" style={{ color: 'var(--color-gold)', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              Accommodation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {RESORT_CONFIG.rooms.map((room) => (
                <li key={room.id}>
                  <Link
                    to="/rooms"
                    style={{
                      color: 'rgba(255, 255, 255, 0.75)',
                      textDecoration: 'none',
                      fontSize: '0.925rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)')}
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Directions */}
          <div>
            <h4 className="font-serif" style={{ color: 'var(--color-gold)', fontSize: '1.35rem', marginBottom: '1.25rem' }}>
              Reach Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.925rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{RESORT_CONFIG.location}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <a href={`tel:${RESORT_CONFIG.contactPhone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {RESORT_CONFIG.contactPhone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                <a href={`mailto:${RESORT_CONFIG.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {RESORT_CONFIG.email}
                </a>
              </div>

              <a
                href={RESORT_CONFIG.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
                style={{ marginTop: '0.75rem', fontSize: '0.8rem', padding: '0.55rem 1rem' }}
              >
                Get Google Map Directions <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} {RESORT_CONFIG.name}, Vagamon, Kerala. All rights reserved.</p>
          <p style={{ letterSpacing: '0.02em' }}>Luxury Nature Stay & Hospitality in Vagamon</p>
        </div>
      </div>
    </footer>
  );
};
