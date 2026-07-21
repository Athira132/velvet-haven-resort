import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { LightboxModal } from '../components/LightboxModal';

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'resort' | 'accommodation' | 'dining' | 'nature'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeTab === 'all'
    ? RESORT_CONFIG.gallery
    : RESORT_CONFIG.gallery.filter(item => item.category === activeTab);

  return (
    <>
      <SEO
        title="Photo Gallery"
        description="Visual gallery of Velvet Haven Resort, Vagamon. Explore pictures of our luxury rooms, misty pine landscapes, hilltop dining, and campfire evenings."
        canonicalPath="/gallery"
      />

      {/* Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.75), rgba(8, 22, 16, 0.85)), url(${RESORT_CONFIG.images.hero1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Visual Journey</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            Resort Photo Gallery
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '680px', margin: '0 auto' }}>
            Explore the tranquil atmosphere, luxury interiors, and breathtaking natural vistas of Velvet Haven Resort.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section style={{ backgroundColor: 'var(--color-sand)', padding: '2rem 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'resort', label: 'Resort & Panoramas' },
            { id: 'accommodation', label: 'Rooms & Suites' },
            { id: 'dining', label: 'Dining & Evenings' },
            { id: 'nature', label: 'Nature & Pine Groves' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '50px',
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'var(--color-pine)' : 'var(--color-border)',
                backgroundColor: activeTab === tab.id ? 'var(--color-pine)' : '#FFFFFF',
                color: activeTab === tab.id ? 'var(--color-gold)' : 'var(--color-charcoal)',
                fontWeight: activeTab === tab.id ? 600 : 400,
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

      {/* Gallery Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  height: '280px',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border)'
                }}
                className="img-zoom-container"
              >
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Overlay on hover */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(8, 22, 16, 0.1) 0%, rgba(8, 22, 16, 0.85) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                    color: '#FFFFFF',
                    opacity: 0.9,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--color-gold)', margin: 0 }}>
                      {item.title}
                    </h3>
                    <div style={{ backgroundColor: 'rgba(197, 160, 89, 0.3)', padding: '0.4rem', borderRadius: '50%' }}>
                      <Maximize2 size={16} style={{ color: '#FFFFFF' }} />
                    </div>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.25rem' }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </>
  );
};
