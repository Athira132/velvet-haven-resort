import React, { useEffect } from 'react';
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
        backgroundColor: 'rgba(5, 15, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#FFFFFF',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 2010,
          transition: 'all 0.2s ease'
        }}
      >
        <X size={24} />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '1100px',
          maxHeight: '75vh',
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
            maxHeight: '75vh',
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
            left: '-1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(14, 36, 27, 0.8)',
            color: 'var(--color-gold)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: '-1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(14, 36, 27, 0.8)',
            color: 'var(--color-gold)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Caption info */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          marginTop: '1.5rem',
          textAlign: 'center',
          color: '#FFFFFF',
          maxWidth: '650px'
        }}
      >
        <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--color-gold)', marginBottom: '0.35rem' }}>
          {currentItem.title}
        </h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.95rem' }}>
          {currentItem.caption}
        </p>
      </div>
    </div>
  );
};
