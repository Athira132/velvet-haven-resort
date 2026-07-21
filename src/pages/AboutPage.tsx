import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Heart, Leaf, Sun } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Our Resort"
        description="Discover the story of Velvet Haven Resort in Vagamon, Kerala. Learn about our nature-focused luxury architecture, Kerala hospitality, and serene hill sanctuary."
        canonicalPath="/about"
      />

      {/* Page Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.7), rgba(8, 22, 16, 0.85)), url(${RESORT_CONFIG.images.hero2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Our Story & Philosophy</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            About Velvet Haven Resort
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '680px', margin: '0 auto' }}>
            Crafted as a sanctuary of quiet luxury among Vagamon's pine forests and high-altitude mist.
          </p>
        </div>
      </section>

      {/* Resort Story Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Nestled in Vagamon</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                Where Nature meets Uncompromised Luxury
              </h2>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Velvet Haven Resort was conceived around a single core vision: to offer travelers a peaceful mountain haven that respects the untouched natural beauty of Vagamon while providing modern, high-end comfort.
              </p>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Every element of our architecture—from wide glass viewing windows to locally crafted timber elements—was thoughtfully integrated into the sloping landscape. Our guests enjoy panoramic vistas of rolling tea estates and evergreen pine groves right from their rooms.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/rooms" className="btn btn-primary">
                  View Accommodations
                </Link>
                <Link to="/contact" className="btn btn-outline-dark">
                  Contact Reservation
                </Link>
              </div>
            </div>

            <div className="img-zoom-container" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src={RESORT_CONFIG.images.landscapeSurroundings}
                alt="Velvet Haven Resort Vagamon Hilltop View"
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Core Values & Pillars */}
      <section className="section-padding bg-pine">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>Hospitality Pillars</span>
            <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
              The Spirit of Vagamon Hospitality
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.05rem' }}>
              We believe luxury is not just fine materials, but the tranquility of mind and warmth of genuine care.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Leaf, title: "Harmony with Nature", desc: "Low-impact design that leaves the surrounding forest and wildlife corridors undisturbed." },
              { icon: Heart, title: "Authentic Kerala Care", desc: "Warm, intuitive service inspired by traditional Kerala hospitality and guest honor." },
              { icon: Compass, title: "Unplugged Peace", desc: "Secluded hilltop positioning designed to help you slow down, breathe, and recharge." },
              { icon: Sun, title: "Curated Experiences", desc: "Bespoke tea tasting, guided nature trails, and outdoor dining tailored to your rhythm." }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel-dark"
                style={{ padding: '2.5rem', borderRadius: 'var(--radius-md)' }}
              >
                <pillar.icon size={36} style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }} />
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>Resort Life</span>
            <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)' }}>
              Moments at Velvet Haven
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="img-zoom-container" style={{ borderRadius: 'var(--radius-md)', height: '320px' }}>
              <img src={RESORT_CONFIG.images.suiteInterior} alt="Resort Suite Detail" />
            </div>
            <div className="img-zoom-container" style={{ borderRadius: 'var(--radius-md)', height: '320px' }}>
              <img src={RESORT_CONFIG.images.diningOutdoor} alt="Resort Outdoor Dining" />
            </div>
            <div className="img-zoom-container" style={{ borderRadius: 'var(--radius-md)', height: '320px' }}>
              <img src={RESORT_CONFIG.images.eveningCampfire} alt="Evening Starlight Campfire" />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/gallery" className="btn btn-outline-dark">
              Explore Photo Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
