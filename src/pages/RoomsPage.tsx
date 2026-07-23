import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { RESORT_CONFIG } from '../config/resortConfig';
import type { RoomItem } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { RoomDetailModal } from '../components/RoomDetailModal';

export const RoomsPage: React.FC = () => {
  const { roomId } = useParams<{ roomId?: string }>();
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);

  // Sync route param with selected room state
  useEffect(() => {
    if (roomId) {
      const room = RESORT_CONFIG.rooms.find(r => r.id === roomId);
      if (room) {
        setSelectedRoom(room);
      } else {
        setSelectedRoom(null);
      }
    } else {
      setSelectedRoom(null);
    }
  }, [roomId]);

  const handleOpenRoom = (room: RoomItem) => {
    navigate(`/rooms/${room.id}`);
  };

  const handleCloseRoom = () => {
    navigate('/rooms');
  };

  // Set room-specific SEO dynamically
  let seoTitle = "Luxury Resorts Accommodation in Vagamon | Rooms & Suites";
  let seoDesc = "Explore luxury accommodation options at the best resort in Vagamon. Book our premium Velvet Mist Suite or spacious Plantation Family Suite with mountain views.";
  let canonicalUrl = "/rooms";

  if (selectedRoom) {
    canonicalUrl = `/rooms/${selectedRoom.id}`;
    if (selectedRoom.id === 'velvet-mist-suite') {
      seoTitle = "Velvet Mist Suite | Premium Luxury Suite in Vagamon";
      seoDesc = "Experience unmatched panoramic mountain and valley views in the Velvet Mist Suite at Velvet Haven Resort, the best resort in Vagamon, Kerala.";
    } else if (selectedRoom.id === 'plantation-family-suite') {
      seoTitle = "Plantation Family Suite | Spacious Family Resort Stay in Vagamon";
      seoDesc = "Stay in the spacious Plantation Family Suite at the best family resort in Vagamon, Kerala. Features interconnected luxury suites with tea plantation views.";
    } else if (selectedRoom.id === 'standard-cottage') {
      seoTitle = "Standard Cottage | Cozy Hillside Resort Accommodation in Vagamon";
      seoDesc = "Book the cozy Standard Cottage at Velvet Haven Resort. A private hill station retreat with pine valley views and a private veranda in Vagamon, Kerala.";
    }
  }

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        canonicalPath={canonicalUrl}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Rooms", path: "/rooms" },
          ...(selectedRoom ? [{ name: selectedRoom.name, path: `/rooms/${selectedRoom.id}` }] : [])
        ]}
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
                  onClick={() => handleOpenRoom(room)}
                  style={{
                    minHeight: '380px',
                    order: index % 2 === 1 ? 2 : 1,
                    cursor: 'pointer'
                  }}
                >
                  <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="gallery-overlay">
                    <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      View Details & Gallery
                    </span>
                  </div>
                </div>

                {/* Room Details */}
                <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: index % 2 === 1 ? 1 : 2 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {room.subtitle}
                    </span>
                  </div>

                  <h2 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--color-heading)', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => handleOpenRoom(room)}>
                    {room.name}
                  </h2>

                  <p style={{ color: 'var(--color-muted-text)', fontSize: '1.025rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {room.description}
                  </p>

                  {/* Room Specs (Removed Size & Bed Details) */}
                  <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-sand)', borderRadius: 'var(--radius-md)', marginBottom: '1.75rem', border: '1px solid var(--color-border-theme)' }}>
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

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I am interested in booking the ${room.name} at Velvet Haven Resort, Vagamon. Please let me know available dates.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ flex: 1, minWidth: '220px', padding: '0.85rem 1.5rem' }}
                    >
                      Enquire on WhatsApp
                    </a>
                    <button
                      onClick={() => handleOpenRoom(room)}
                      className="btn btn-outline-dark"
                      style={{ flex: 1, minWidth: '200px', padding: '0.85rem 1.5rem' }}
                    >
                      View Details & Gallery
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoom}
        onClose={handleCloseRoom}
      />
    </>
  );
};
