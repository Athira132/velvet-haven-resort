import React, { useState } from 'react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { MessageSquare } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'nature' | 'relaxation' | 'romantic' | 'family'>('all');

  const filtered = filter === 'all'
    ? RESORT_CONFIG.experiences
    : RESORT_CONFIG.experiences.filter(exp => exp.category === filter);

  return (
    <>
      <SEO
        title="Resort Experiences & Activities"
        description="Explore curated experiences at Velvet Haven Resort, Vagamon. From pine forest trails to starlight campfires and tea plantation tours."
        canonicalPath="/experiences"
      />

      {/* Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.75), rgba(8, 22, 16, 0.85)), url(${RESORT_CONFIG.images.landscapeSurroundings})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Vagamon Curations</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            Experiences & Activities
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '680px', margin: '0 auto' }}>
            Immerse yourself in mountain quietude, guided nature trails, campfire evenings, and local Vagamon culture.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ backgroundColor: 'var(--color-sand)', padding: '2rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            { id: 'all', label: 'All Experiences' },
            { id: 'nature', label: 'Nature & Trails' },
            { id: 'relaxation', label: 'Relaxation & Starlight' },
            { id: 'romantic', label: 'Romantic & Sunset' },
            { id: 'family', label: 'Family & Culinary' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '50px',
                border: '1px solid',
                borderColor: filter === tab.id ? 'var(--color-pine)' : 'var(--color-border)',
                backgroundColor: filter === tab.id ? 'var(--color-pine)' : '#FFFFFF',
                color: filter === tab.id ? 'var(--color-gold)' : 'var(--color-charcoal)',
                fontWeight: filter === tab.id ? 600 : 400,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
            {filtered.map((exp) => (
              <div
                key={exp.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div className="img-zoom-container" style={{ height: '280px' }}>
                  <img src={exp.image} alt={exp.title} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'var(--color-pine)',
                      color: 'var(--color-gold)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.35rem 0.85rem',
                      borderRadius: '50px',
                      border: '1px solid rgba(197, 160, 89, 0.4)'
                    }}
                  >
                    {exp.tag}
                  </span>
                </div>

                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h2 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-pine)', marginBottom: '0.75rem' }}>
                    {exp.title}
                  </h2>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {exp.fullDesc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                    <a
                      href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about ${exp.title} at Velvet Haven Resort, Vagamon.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: '100%', padding: '0.75rem' }}
                    >
                      <MessageSquare size={16} /> Enquire About This Experience
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
