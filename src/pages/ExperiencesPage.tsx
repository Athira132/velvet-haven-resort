import React from 'react';
import { Link } from 'react-router-dom';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { MessageSquare, MapPin, ArrowRight } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const vagamonLocations = RESORT_CONFIG.experiences;

  return (
    <>
      <SEO
        title="What You Can Do in Vagamon, Idukki, Kerala"
        description="Explore what you can do in Vagamon, Idukki district, Kerala: Thangal Para, Murugan Mala, Kurish Mala, Vagamon Pine Forest, Vagamon Meadows, and Vagamon Lake."
        canonicalPath="/experiences"
      />

      {/* Bright Green Scenic Header Banner */}
      <section
        style={{
          position: 'relative',
          paddingTop: '11rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.35), rgba(8, 22, 16, 0.55)), url(${RESORT_CONFIG.images.resortPanorama})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow" style={{ position: 'relative', zIndex: 5 }}>
          <span className="badge-gold" style={{ marginBottom: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#071A12', fontWeight: 700 }}>
            <MapPin size={14} style={{ display: 'inline', marginRight: '0.3rem' }} /> Idukki District, Kerala
          </span>
          <h1
            className="heading-1 font-serif"
            style={{
              color: '#FFFFFF',
              marginBottom: '1.25rem',
              textShadow: '0 3px 14px rgba(0,0,0,0.6)',
              fontWeight: 600
            }}
          >
            What You Can Do in Vagamon
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '740px',
              margin: '0 auto',
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              lineHeight: 1.7
            }}
          >
            Located in the scenic Idukki district of Kerala, Vagamon offers the perfect mix of thrill and tranquility. Walk through towering pine forests, explore lush green meadows, discover hidden waterfalls, and experience the beauty of Kerala’s highlands.
          </p>
        </div>
      </section>

      {/* Balanced 6-Card Grid Layout (3 Columns x 2 Rows on Desktop) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Visual Guide</span>
            <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)' }}>
              Top Destinations in Vagamon
            </h2>
            <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              Discover the six iconic natural attractions that define Vagamon's peaceful mountain charm in Idukki, Kerala.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
              alignItems: 'stretch'
            }}
          >
            {vagamonLocations.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--color-border-theme)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Bright Greenery Photo */}
                <div className="img-zoom-container" style={{ height: '280px', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={`${item.title} Vagamon Idukki`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'none'
                    }}
                  />
                  
                  {/* Badge Tag */}
                  <span
                    style={{
                      position: 'absolute',
                      top: '1.25rem',
                      left: '1.25rem',
                      backgroundColor: 'rgba(8, 26, 18, 0.88)',
                      color: 'var(--color-gold)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '50px',
                      border: '1px solid rgba(197, 160, 89, 0.4)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Card Content Area */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '0.75rem', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                    {item.fullDesc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-theme)' }}>
                    <a
                      href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about visiting ${item.title} during my stay at Velvet Haven Resort, Vagamon, Idukki.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ width: '100%', padding: '0.8rem' }}
                    >
                      Enquire About Visiting
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA: DISCOVER VAGAMON & PLAN YOUR STAY */}
      <section className="section-padding bg-pine" style={{ textAlign: 'center' }}>
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Idukki Hill Sanctuary</span>
          <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Plan Your Stay at Velvet Haven Resort
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Enjoy elevated stillness located conveniently close to Thangal Para, Murugan Mala, Kurish Mala, Vagamon Pine Forest, Meadows, and Lake in Idukki district, Kerala.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.25rem' }}>
              Book Your Stay in Vagamon <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to plan a trip to explore Vagamon while staying at Velvet Haven Resort, Idukki, Kerala.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '1rem 2.25rem' }}
            >
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
