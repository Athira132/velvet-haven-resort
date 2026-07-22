import React from 'react';

import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';

export const RoomsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Rooms & Accommodation"
        description="Explore luxury suites and hillside villas at Velvet Haven Resort, Vagamon. Featuring panoramic misty mountain views, private balconies, and premium comfort."
        canonicalPath="/rooms"
      />

      {/* Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.35), rgba(8, 22, 16, 0.55)), url(${RESORT_CONFIG.images.roomMain})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Mountain Sanctuary</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Luxury Accommodation
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '680px', margin: '0 auto', textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)' }}>
            Wake up to soft mountain fog and endless green valleys. Each room combines privacy, elegance, and natural tranquility.
          </p>
        </div>
      </section>

      {/* Accommodation Cards List */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {RESORT_CONFIG.rooms.map((room, index) => (
              <div
                key={room.id}
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  border: '1px solid var(--color-border-theme)'
                }}
              >
                {/* Room Image */}
                <div
                  className="img-zoom-container"
                  style={{
                    minHeight: '380px',
                    order: index % 2 === 1 ? 2 : 1
                  }}
                >
                  <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Room Details */}
                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: index % 2 === 1 ? 1 : 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {room.subtitle}
                    </span>
                  </div>

                  <h2 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--color-heading)', marginBottom: '1rem' }}>
                    {room.name}
                  </h2>

                  <p style={{ color: 'var(--color-muted-text)', fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {room.description}
                  </p>

                  {/* Room Specs Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', padding: '1.25rem', backgroundColor: 'var(--color-sand)', borderRadius: 'var(--radius-md)', marginBottom: '1.75rem', border: '1px solid var(--color-border-theme)' }}>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-body)' }}>
                      <strong>Bed:</strong> {room.bedType}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-body)' }}>
                      <strong>Size:</strong> {room.size}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-body)' }}>
                      <strong>View:</strong> {room.viewType}
                    </div>
                  </div>

                  {/* Features badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                    {room.features.map((feat, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.85rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          color: 'var(--color-body)',
                          fontWeight: 500
                        }}
                      >
                        • {feat}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a
                      href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I am interested in booking the ${room.name} at Velvet Haven Resort, Vagamon. Please let me know available dates.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      Enquire Availability on WhatsApp
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
