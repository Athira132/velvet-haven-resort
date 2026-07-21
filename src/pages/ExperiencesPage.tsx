import React from 'react';
import { Link } from 'react-router-dom';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { MessageSquare, Compass, Zap, Trees, Mountain, ArrowRight } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const thrillActivities = RESORT_CONFIG.experiences.filter(exp => exp.category === 'thrill');
  const natureActivities = RESORT_CONFIG.experiences.filter(exp => exp.category === 'nature');
  const trekkingActivities = RESORT_CONFIG.experiences.filter(exp => exp.category === 'trekking');

  const renderCardGrid = (items: typeof RESORT_CONFIG.experiences) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
      {items.map((exp) => (
        <div
          key={exp.id}
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
          {/* 100% Bright Greenery Photo */}
          <div className="img-zoom-container" style={{ height: '300px', position: 'relative' }}>
            <img
              src={exp.image}
              alt={exp.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'none'
              }}
            />
            
            {/* Category Tag Badge */}
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
              {exp.tag}
            </span>
          </div>

          {/* Clean Light Content Area Below Image */}
          <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <h3 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '0.75rem', fontWeight: 600 }}>
              {exp.title}
            </h3>
            <p style={{ color: 'var(--color-muted-text)', fontSize: '0.975rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {exp.fullDesc}
            </p>

            <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-theme)' }}>
              <a
                href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about visiting ${exp.title} during my stay at Velvet Haven Resort, Vagamon.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.8rem' }}
              >
                <MessageSquare size={16} /> Enquire About This Activity
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <SEO
        title="What You Can Do in Vagamon - Experience Guide"
        description="Discover what you can do in Vagamon: Paragliding, Vagamon Adventure Park, 4x4 Jeep Safaris, Pine Forests, Rolling Meadows, Marmala Waterfalls, and Kurisumala Peak Treks."
        canonicalPath="/experiences"
      />

      {/* Bright Green Scenic Header Banner */}
      <section
        style={{
          position: 'relative',
          paddingTop: '11rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.3), rgba(8, 22, 16, 0.5)), url(${RESORT_CONFIG.images.landscapeSurroundings})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow" style={{ position: 'relative', zIndex: 5 }}>
          <span className="badge-gold" style={{ marginBottom: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#071A12', fontWeight: 700 }}>
            <Compass size={14} style={{ display: 'inline', marginRight: '0.3rem' }} /> Vagamon Travel Guide
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
            Vagamon offers the perfect mix of thrill and tranquility. Walk through towering pine forests, explore lush green meadows, discover hidden waterfalls, and experience the beauty of Kerala’s highlands.
          </p>
        </div>
      </section>

      {/* CATEGORY 1: HIGH-THRILL ACTIVITIES */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={22} />
            </div>
            <div>
              <span className="badge-gold" style={{ fontSize: '0.75rem' }}>Category 1</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginTop: '0.2rem' }}>
                High-Thrill Activities
              </h2>
            </div>
          </div>

          {renderCardGrid(thrillActivities)}
        </div>
      </section>

      {/* CATEGORY 2: NATURE & SIGHTSEEING */}
      <section className="section-padding bg-sand" style={{ borderTop: '1px solid var(--color-border-theme)', borderBottom: '1px solid var(--color-border-theme)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Trees size={22} />
            </div>
            <div>
              <span className="badge-gold" style={{ fontSize: '0.75rem' }}>Category 2</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginTop: '0.2rem' }}>
                Nature & Sightseeing
              </h2>
            </div>
          </div>

          {renderCardGrid(natureActivities)}
        </div>
      </section>

      {/* CATEGORY 3: TREKKING & SPIRITUAL TRAILS */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mountain size={22} />
            </div>
            <div>
              <span className="badge-gold" style={{ fontSize: '0.75rem' }}>Category 3</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginTop: '0.2rem' }}>
                Trekking & Spiritual Trails
              </h2>
            </div>
          </div>

          {renderCardGrid(trekkingActivities)}
        </div>
      </section>

      {/* FINAL CTA: DISCOVER VAGAMON & PLAN YOUR STAY */}
      <section className="section-padding bg-pine" style={{ textAlign: 'center' }}>
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Discover Vagamon</span>
          <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Plan Your Stay at Velvet Haven Resort
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Experience peaceful hill-station luxury nestled right in the center of Vagamon's top natural attractions. Connect with our hosts to arrange custom excursion transport and guidance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.25rem' }}>
              Book Your Mountain Getaway <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to plan a trip to explore Vagamon while staying at Velvet Haven Resort.")}`}
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
