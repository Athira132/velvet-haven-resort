import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { LightboxModal } from '../components/LightboxModal';

import { useTheme } from '../context/ThemeContext';

export const GalleryPage: React.FC = () => {
  const { heroImage } = useTheme();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = RESORT_CONFIG.gallery;

  return (
    <>
      <SEO
        title="Photo Gallery | Best Luxury Resort in Vagamon Kerala"
        description="Browse the photo gallery of Velvet Haven Resort, a premium luxury resort in Vagamon, Kerala. Explore our scenic pine forest landscape, rooms, and dining areas."
        canonicalPath="/gallery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" }
        ]}
      />

      {/* Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.35), rgba(8, 22, 16, 0.55)), url(${heroImage})`,
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

      {/* Gallery Grid using CSS columns Masonry */}
      <section style={{ paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="masonry-grid">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border-theme)',
                  transition: 'transform 0.3s ease'
                }}
                className="img-zoom-container masonry-item"
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${RESORT_CONFIG.name}, Vagamon`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  loading="lazy"
                />
                
                {/* Clean hover overlay with only Maximize2 icon */}
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
