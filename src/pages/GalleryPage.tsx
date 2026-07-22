import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { LightboxModal } from '../components/LightboxModal';

export const GalleryPage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = RESORT_CONFIG.gallery;

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
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.35), rgba(8, 22, 16, 0.55)), url(${RESORT_CONFIG.images.hero1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Visual Journey</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Resort Photo Gallery
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '680px', margin: '0 auto', textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)' }}>
            Explore the tranquil atmosphere, luxury interiors, and breathtaking natural vistas of Velvet Haven Resort.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {galleryItems.map((item, idx) => (
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
                  border: '1px solid var(--color-border-theme)'
                }}
                className="img-zoom-container"
              >
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Clean hover overlay with only Maximize2 icon, no headings or captions */}
                <div className="gallery-overlay">
                  <div style={{ backgroundColor: 'rgba(197, 160, 89, 0.95)', padding: '0.85rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Maximize2 size={24} style={{ color: '#081610' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </>
  );
};
