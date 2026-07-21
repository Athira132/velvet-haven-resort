import React, { useState } from 'react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { MessageSquare, Compass } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'nature' | 'adventure' | 'relaxation' | 'family'>('all');

  const filtered = filter === 'all'
    ? RESORT_CONFIG.experiences
    : RESORT_CONFIG.experiences.filter(exp => exp.category === filter);

  return (
    <>
      <SEO
        title="Vagamon Experiences & Activities"
        description="Explore vibrant Vagamon activities at Velvet Haven Resort. Paragliding, pine forest treks, 4x4 jeep safaris, tea plantation walks, waterfall cascades, and starlight campfires."
        canonicalPath="/experiences"
      />

      {/* Bright Scenic Header Banner */}
      <section
        style={{
          position: 'relative',
          paddingTop: '11rem',
          paddingBottom: '6rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.35), rgba(8, 22, 16, 0.55)), url(${RESORT_CONFIG.images.landscapeSurroundings})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow" style={{ position: 'relative', zIndex: 5 }}>
          <span className="badge-gold" style={{ marginBottom: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#071A12', fontWeight: 700 }}>
            <Compass size={14} style={{ display: 'inline', marginRight: '0.3rem' }} /> Vagamon Curations
          </span>
          <h1
            className="heading-1 font-serif"
            style={{
              color: '#FFFFFF',
              marginBottom: '1rem',
              textShadow: '0 3px 12px rgba(0,0,0,0.6)',
              fontWeight: 600
            }}
          >
            Vagamon Experiences & Activities
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '720px',
              margin: '0 auto',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              lineHeight: 1.6
            }}
          >
            Immerse yourself in mountain quietude, paragliding over pine ridges, 4x4 jeep safaris, tea plantation walks, and starlight campfire evenings.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section style={{ backgroundColor: 'var(--color-sand)', padding: '2rem 0', borderBottom: '1px solid var(--color-border-theme)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            { id: 'all', label: 'All Vagamon Experiences' },
            { id: 'adventure', label: 'Adventure & Safari 🪂' },
            { id: 'nature', label: 'Nature & Trails 🌲' },
            { id: 'relaxation', label: 'Relaxation & Starlight 🌌' },
            { id: 'family', label: 'Culinary & Culture 🍲' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '50px',
                border: '1px solid',
                borderColor: filter === tab.id ? 'var(--color-gold)' : 'var(--color-border-theme)',
                backgroundColor: filter === tab.id ? 'var(--color-gold)' : 'var(--color-card-bg)',
                color: filter === tab.id ? '#081610' : 'var(--color-heading)',
                fontFamily: 'var(--font-sans)',
                fontWeight: filter === tab.id ? 700 : 500,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: filter === tab.id ? 'var(--shadow-gold)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Experiences Photography Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
            {filtered.map((exp) => (
              <div
                key={exp.id}
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--color-border-theme)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* 100% Bright Crisp Photo Viewer */}
                <div className="img-zoom-container" style={{ height: '320px', position: 'relative' }}>
                  <img
                    src={exp.image}
                    alt={exp.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'none'
                    }}
                  />
                  
                  {/* Category Tag Badge */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      backgroundColor: 'rgba(8, 26, 18, 0.88)',
                      color: 'var(--color-gold)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '50px',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)'
                    }}
                  >
                    {exp.tag}
                  </span>
                </div>

                {/* Clean Light Content Box Below Image */}
                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h2 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '0.75rem', fontWeight: 600 }}>
                    {exp.title}
                  </h2>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                    {exp.fullDesc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-theme)' }}>
                    <a
                      href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about experiencing ${exp.title} at Velvet Haven Resort, Vagamon.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: '100%', padding: '0.8rem' }}
                    >
                      <MessageSquare size={16} /> Enquire About This Activity
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Vagamon Travel Callout */}
      <section className="section-padding bg-pine" style={{ textAlign: 'center' }}>
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Tailored Itineraries</span>
          <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Want a Custom Vagamon Sightseeing Itinerary?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Our resort host team will help organize paragliding slots, 4x4 jeep safaris, waterfall treks, and tea garden visits tailored specifically to your family or group stay.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to plan a custom Vagamon activity itinerary with Velvet Haven Resort.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '1rem 2.25rem' }}
            >
              Plan Your Trip on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
