import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';

export const StickyActions: React.FC = () => {
  const whatsappMsg = encodeURIComponent("Hello, I would like to enquire about staying at Velvet Haven Resort, Vagamon.");
  const whatsappUrl = `https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '1.75rem',
        zIndex: 990,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        alignItems: 'center'
      }}
    >
      {/* Sticky Phone Call Action */}
      <a
        href={`tel:${RESORT_CONFIG.contactPhone}`}
        aria-label="Call Velvet Haven Resort"
        title="Call Us"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-pine)',
          color: 'var(--color-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(14, 36, 27, 0.35)',
          border: '1px solid rgba(197, 160, 89, 0.4)',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <Phone size={22} />
      </a>

      {/* Sticky Icon-Only WhatsApp Action (No Text) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Enquiry"
        title="Enquire on WhatsApp"
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 28px rgba(37, 211, 102, 0.5)',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.65)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(37, 211, 102, 0.5)';
        }}
      >
        <MessageSquare size={28} />
      </a>
    </div>
  );
};
