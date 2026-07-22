import React from 'react';
import { Utensils, Waves, Flame, ShieldCheck, CheckCircle2, Wifi, Car, Coffee, Sparkles } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';

export const FacilitiesPage: React.FC = () => {
  const iconMap: Record<string, any> = {
    Utensils: Utensils,
    Waves: Waves,
    Flame: Flame,
    ShieldCheck: ShieldCheck
  };

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
            {RESORT_CONFIG.facilities.map((facility) => {
              const IconComp = iconMap[facility.iconName] || Sparkles;
              return (
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

                  <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(197, 160, 89, 0.2)',
                          color: 'var(--color-gold)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={22} />
                      </div>
                      <h2 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-heading)' }}>
                        {facility.title}
                      </h2>
                    </div>

                    <p style={{ color: 'var(--color-muted-text)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                      {facility.description}
                    </p>

                    <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-theme)' }}>
                      <h3 style={{ fontSize: '0.85rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', fontWeight: 600 }}>
                        Key Highlights
                      </h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                        {facility.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--color-body)' }}>
                            <CheckCircle2 size={15} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
              { icon: Wifi, text: "High-Speed Wi-Fi" },
              { icon: Car, text: "Free Secured Parking" },
              { icon: Utensils, text: "Hilltop Restaurant" },
              { icon: Flame, text: "Night Campfire" },
              { icon: Coffee, text: "24/7 Tea & Coffee" },
              { icon: ShieldCheck, text: "24/7 Power Backup" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-panel-dark"
                style={{ padding: '1.75rem', borderRadius: 'var(--radius-md)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <item.icon size={32} style={{ color: 'var(--color-gold)', marginBottom: '0.75rem' }} />
                <span style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '0.95rem' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
