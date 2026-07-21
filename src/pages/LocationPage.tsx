import React from 'react';
import { MapPin, Navigation, Compass, Phone } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';

export const LocationPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Location & How to Reach"
        description="Find directions and travel information for Velvet Haven Resort, Vagamon, Kerala. Conveniently located near pine forests, meadows, and major Kerala transit hubs."
        canonicalPath="/location"
      />

      {/* Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.75), rgba(8, 22, 16, 0.85)), url(${RESORT_CONFIG.images.hero2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Hill Station Directions</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            Location & Travel Guide
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '680px', margin: '0 auto' }}>
            Perched amidst Vagamon's peaceful mountain landscape with effortless access to top attractions.
          </p>
        </div>
      </section>

      {/* Map & Get Directions Callout */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Map Navigation</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-pine)', marginBottom: '1.5rem' }}>
                How to Find Us
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Velvet Haven Resort is nestled in the quiet upper hills of Vagamon, Idukki District, Kerala. The route passes through scenic winding tea estates and cool mist-laden roads.
              </p>

              <div style={{ padding: '1.5rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-pine)' }}>
                  <MapPin size={22} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Resort Address</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{RESORT_CONFIG.name}, {RESORT_CONFIG.location} - {RESORT_CONFIG.pinCode}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--color-pine)' }}>
                  <Phone size={22} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Front Desk Assistance</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{RESORT_CONFIG.contactPhone}</p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={RESORT_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '1rem 2rem', fontSize: '1rem' }}
                >
                  <Navigation size={20} /> Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '460px', border: '1px solid var(--color-border)' }}>
              <iframe
                title="Velvet Haven Resort Google Map"
                src={RESORT_CONFIG.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transit & Travel Distances */}
      <section className="section-padding bg-pine">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>Transit Access</span>
            <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
              Travel Distances from Major Hubs
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem' }}>
              Smooth road connectivity from major Kerala airports, railway stations, and cities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {RESORT_CONFIG.travelInfo.map((info, idx) => (
              <div
                key={idx}
                className="glass-panel-dark"
                style={{ padding: '2rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <Compass size={28} style={{ color: 'var(--color-gold)' }} />
                <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#FFFFFF' }}>
                  {info.label}
                </h3>
                <p style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '1.05rem' }}>
                  {info.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>Local Sightseeing</span>
            <h2 className="heading-1 font-serif" style={{ color: 'var(--color-pine)', marginBottom: '1rem' }}>
              Nearby Vagamon Attractions
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem' }}>
              Explore famous sightseeing destinations located just minutes away from Velvet Haven Resort.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {RESORT_CONFIG.nearbyAttractions.map((spot, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--color-pine)' }}>
                      {spot.name}
                    </h3>
                    <span style={{ fontSize: '0.825rem', color: 'var(--color-gold)', fontWeight: 700, backgroundColor: 'var(--color-sand)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>
                      {spot.distance}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {spot.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
