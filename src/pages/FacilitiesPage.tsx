import React from 'react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';

export const FacilitiesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Resort Facilities & Amenities"
        description="Explore luxury facilities at Velvet Haven Resort, Vagamon. Hilltop dining, valley view pool deck, starlight campfire arena, high-speed Wi-Fi, and safe parking."
        canonicalPath="/facilities"
      />

      {/* Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.35), rgba(8, 22, 16, 0.55)), url(${RESORT_CONFIG.images.diningOutdoor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Elevated Comfort</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Resort Facilities & Amenities
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '680px', margin: '0 auto', textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)' }}>
            Designed for total peace of mind, delightful dining, and unhurried relaxation in Vagamon.
          </p>
        </div>
      </section>

      {/* Main Facilities Cards */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {RESORT_CONFIG.facilities.map((facility) => (
              <div
                key={facility.id}
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border-theme)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="img-zoom-container" style={{ height: '260px' }}>
                  <img src={facility.image} alt={facility.title} />
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h2 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '0.75rem' }}>
                    {facility.title}
                  </h2>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.975rem', lineHeight: '1.7', margin: 0 }}>
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Amenity Grid */}
      <section className="section-padding bg-pine">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>At a Glance</span>
            <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
              All Confirmed Amenities
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { text: "High-Speed Wi-Fi" },
              { text: "Free Secured Parking" },
              { text: "Hilltop Restaurant" },
              { text: "Night Campfire" },
              { text: "24/7 Tea & Coffee" },
              { text: "24/7 Power Backup" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-panel-dark"
                style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}
              >
                <span style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
