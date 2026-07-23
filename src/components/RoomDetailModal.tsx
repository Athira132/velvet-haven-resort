import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import type { RoomItem } from '../config/resortConfig';
import { RESORT_CONFIG } from '../config/resortConfig';

interface RoomDetailModalProps {
  room: RoomItem | null;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (room) {
      setActiveImageIdx(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [room]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!room) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && room.images.length > 1) {
        setActiveImageIdx((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight' && room.images.length > 1) {
        setActiveImageIdx((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [room, onClose]);

  if (!room) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };

  const whatsappMessage = `Hello, I would like to book the ${room.name} at Velvet Haven Resort, Vagamon. Please let me know the availability.`;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 16, 11, 0.85)',
        backdropFilter: 'blur(16px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'center',
        padding: isMobile ? '0' : '2rem',
        overflowY: isMobile ? 'auto' : 'visible'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          backgroundColor: 'var(--color-surface)',
          borderRadius: isMobile ? '0' : 'var(--radius-lg)',
          overflow: isMobile ? 'visible' : 'hidden',
          boxShadow: 'var(--shadow-lg)',
          border: isMobile ? 'none' : '1px solid var(--color-border-theme)',
          maxWidth: '1080px',
          width: '100%',
          minHeight: isMobile ? '100vh' : 'auto',
          maxHeight: isMobile ? 'none' : '90vh',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Close Button - Sticky/Fixed on mobile at the top right */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: isMobile ? 'fixed' : 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(5, 16, 11, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          <X size={20} />
        </button>

        {/* Left Side: Photo Gallery / Carousel */}
        <div
          style={{
            flex: isMobile ? 'none' : '1.1',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#05100B',
            justifyContent: 'center',
            position: 'relative',
            height: isMobile ? '280px' : 'auto',
            borderRight: isMobile ? 'none' : '1px solid var(--color-border-theme)',
            borderBottom: isMobile ? '1px solid var(--color-border-theme)' : 'none'
          }}
        >
          {/* Main Active Image */}
          <div style={{ position: 'relative', width: '100%', height: isMobile ? '220px' : '440px', overflow: 'hidden' }}>
            <img
              src={room.images[activeImageIdx]}
              alt={`${room.name} gallery ${activeImageIdx + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.3s ease'
              }}
            />

            {/* Navigation Arrows */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="Previous image"
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(5, 16, 11, 0.65)',
                    color: 'var(--color-gold)',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next image"
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(5, 16, 11, 0.65)',
                    color: 'var(--color-gold)',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails Row */}
          {room.images.length > 1 && (
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.75rem',
                justifyContent: 'center',
                overflowX: 'auto',
                backgroundColor: 'rgba(5, 16, 11, 0.4)'
              }}
            >
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  style={{
                    padding: 0,
                    border: activeImageIdx === idx ? '2px solid var(--color-gold)' : '2px solid transparent',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    width: '52px',
                    height: '39px',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    flexShrink: 0,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img src={img} alt={`thumbnail ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Description & Room details */}
        <div
          style={{
            flex: '1',
            padding: isMobile ? '1.5rem' : '2.5rem',
            overflowY: isMobile ? 'visible' : 'auto',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'none'
          }}
        >
          {/* Header */}
          <span
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-gold)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.35rem'
            }}
          >
            {room.subtitle}
          </span>
          <h2
            className="font-serif"
            style={{
              fontSize: isMobile ? '1.65rem' : '2.2rem',
              color: 'var(--color-heading)',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}
          >
            {room.name}
          </h2>

          {/* Description */}
          <p
            style={{
              color: 'var(--color-body)',
              fontSize: '0.975rem',
              lineHeight: '1.65',
              marginBottom: '1.5rem',
              opacity: 0.95
            }}
          >
            {room.description}
          </p>

          {/* Specs List */}
          <div
            style={{
              padding: '1.25rem',
              backgroundColor: 'var(--color-sand)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem',
              border: '1px solid var(--color-border-theme)'
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--color-body)' }}>
              <span style={{ display: 'block', fontWeight: 600, color: 'var(--color-heading)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.15rem' }}>View</span>
              {room.viewType}
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-heading)', marginBottom: '0.5rem', fontWeight: 700 }}>Room Amenities</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {room.features.map((feat, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.8rem',
                    backgroundColor: 'rgba(197, 160, 89, 0.08)',
                    color: 'var(--color-heading)',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    padding: '0.3rem 0.65rem',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* WhatsApp booking Enquiry */}
          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <a
              href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <MessageSquare size={18} /> Book / Enquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
