import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../config/resortConfig';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
      if (e.key === 'ArrowRight') onNavigate(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 15, 10, 0.96)',
        backdropFilter: 'blur(20px)',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '1rem' : '2rem'
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: isMobile ? '1rem' : '2rem',
          right: isMobile ? '1rem' : '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: isMobile ? '40px' : '44px',
          height: isMobile ? '40px' : '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 2010,
          transition: 'all 0.2s ease'
        }}
      >
        <X size={isMobile ? 20 : 24} />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '1100px',
          maxHeight: isMobile ? '60vh' : '75vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          style={{
            maxWidth: '100%',
            maxHeight: isMobile ? '60vh' : '75vh',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)'
          }}
        />

        {/* Prev Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: isMobile ? '0.5rem' : '-1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(14, 36, 27, 0.85)',
            color: 'var(--color-gold)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '50%',
            width: isMobile ? '40px' : '48px',
            height: isMobile ? '40px' : '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          <ChevronLeft size={isMobile ? 22 : 28} />
        </button>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: isMobile ? '0.5rem' : '-1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(14, 36, 27, 0.85)',
            color: 'var(--color-gold)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '50%',
            width: isMobile ? '40px' : '48px',
            height: isMobile ? '40px' : '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          <ChevronRight size={isMobile ? 22 : 28} />
        </button>
      </div>

      {/* Elegant Title & Caption Overlay at the bottom */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          marginTop: isMobile ? '1rem' : '2rem',
          textAlign: 'center',
          color: '#FFFFFF',
          maxWidth: '640px',
          padding: '0 1rem',
          zIndex: 2010
        }}
      >
        <h3 className="font-serif" style={{ fontSize: isMobile ? '1.2rem' : '1.45rem', color: 'var(--color-gold)', marginBottom: '0.4rem', fontWeight: 600 }}>
          {currentItem.title}
        </h3>
        <p style={{ fontSize: isMobile ? '0.85rem' : '0.95rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0, lineHeight: 1.5 }}>
          {currentItem.caption}
        </p>
      </div>

    </div>
  );
};
