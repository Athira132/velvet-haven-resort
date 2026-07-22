import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, ArrowRight, ShieldCheck, Flame, Utensils, MessageSquare, Sparkles, Star, Quote } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

export const HomePage: React.FC = () => {
  const { themeMode } = useTheme();

  const isNight = themeMode === 'night';

  return (
    <>
      <SEO title="Luxury Nature Resort in Vagamon" />

      {/* ================= HERO SECTION ================= */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '650px', overflow: 'hidden' }}>
        {/* Day Hero Layer (Hero 1) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${RESORT_CONFIG.images.hero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isNight ? 0 : 1,
            transition: 'opacity 0.3s ease',
            zIndex: 1
          }}
        />

        {/* Night Hero Layer (Hero 2) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${RESORT_CONFIG.images.hero2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isNight ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 1
          }}
        />

        {/* Subtle Ambient Overlay for readability without darkening light mode */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            background: isNight
              ? 'linear-gradient(90deg, rgba(3, 12, 8, 0.65) 0%, rgba(3, 12, 8, 0.35) 50%, rgba(3, 12, 8, 0.05) 100%)'
              : 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(8, 22, 16, 0.35) 100%)',
            transition: 'background 0.3s ease'
          }}
        />

        {/* Hero Content Overlay */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '6rem'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '520px' }}
          >
            {/* Prominent Resort Name Badge with Adaptive Day/Night Contrast */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: isNight ? 'var(--color-gold)' : '#071A12',
                  backgroundColor: isNight ? 'rgba(197, 160, 89, 0.16)' : 'rgba(255, 255, 255, 0.85)',
                  padding: '0.4rem 1rem',
                  borderRadius: '50px',
                  border: isNight ? '1px solid rgba(197, 160, 89, 0.35)' : '1px solid rgba(8, 26, 18, 0.2)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                <Sparkles size={15} style={{ color: isNight ? 'var(--color-gold)' : '#071A12' }} />
                VELVET HAVEN RESORT
              </span>
              <span
                style={{
                  color: isNight ? 'rgba(255, 255, 255, 0.9)' : '#071A12',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textShadow: isNight ? '0 2px 6px rgba(0,0,0,0.5)' : '0 1px 6px rgba(255,255,255,0.9)'
                }}
              >
                Vagamon, Kerala
              </span>
            </div>

            <h1
              className="heading-display font-serif"
              style={{
                color: isNight ? '#FFFFFF' : '#061710',
                marginBottom: '1.25rem',
                textShadow: isNight ? '0 4px 18px rgba(0,0,0,0.7)' : '0 2px 12px rgba(255,255,255,0.85)',
                fontWeight: 600
              }}
            >
              Where the Hills<br />Feel Like Home
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: isNight ? 'rgba(255, 255, 255, 0.95)' : '#0B2218',
                lineHeight: '1.6',
                marginBottom: '2.25rem',
                maxWidth: '500px',
                fontWeight: isNight ? 400 : 500,
                textShadow: isNight ? '0 2px 8px rgba(0,0,0,0.6)' : '0 1px 8px rgba(255,255,255,0.9)'
              }}
            >
              Peaceful stays, misty mountain views, and warm Kerala hospitality in Vagamon.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link to="/contact" className="btn btn-primary">
                Book Your Stay <ChevronRight size={18} />
              </Link>
              <Link
                to="/rooms"
                className={isNight ? "btn btn-outline-light" : "btn btn-outline-dark"}
                style={{ fontWeight: 600 }}
              >
                Explore The Resort
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= RESORT INTRODUCTION ================= */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Welcome to Velvet Haven</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                A Peaceful Mountain Haven Above the Clouds
              </h2>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Perched gracefully amidst the misty pine ridges of Vagamon, Velvet Haven Resort is designed for travelers who seek true stillness, elevated comfort, and unhurried luxury.
              </p>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Whether you are listening to morning birdsong over the pine valley or gathering around an evening campfire under a starry mountain sky, every moment here connects you deeply with nature and authentic Kerala warmth.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--color-gold)' }}>1,100m</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Elevation above sea level</p>
                </div>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--color-gold)' }}>100%</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tranquil Pine Nature</p>
                </div>
              </div>

              <Link to="/about" className="btn btn-outline-dark">
                Discover Our Story <ArrowRight size={16} />
              </Link>
            </div>

            <div className="img-zoom-container" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src={RESORT_CONFIG.images.resortPanorama}
                alt="Velvet Haven Resort Vagamon Hillside View"
                style={{ width: '100%', height: '520px', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY STAY WITH US (ADAPTIVE LIGHT / DARK THEME) ================= */}
      <section className={isNight ? "section-padding bg-pine" : "section-padding"} style={{ backgroundColor: isNight ? undefined : 'var(--color-sand)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>The Velvet Experience</span>
            <h2 className="heading-1 font-serif" style={{ color: isNight ? '#FFFFFF' : 'var(--color-heading)', marginBottom: '1rem' }}>
              Why Guests Choose Velvet Haven
            </h2>
            <p style={{ color: isNight ? 'rgba(255, 255, 255, 0.82)' : 'var(--color-muted-text)', fontSize: '1.05rem' }}>
              Thoughtfully curated amenities and natural luxury created for your peaceful stay.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { icon: Sparkles, title: "Unmatched Panoramic Views", desc: "Wake up to rolling pine hills shrouded in soft morning mist from private balconies." },
              { icon: Utensils, title: "Authentic Kerala Culinary", desc: "Farm-to-table traditional Travancore dishes and international dining in open mountain air." },
              { icon: Flame, title: "Starlight Campfires", desc: "Nightly campfire gatherings with acoustic music and outdoor barbecue under clear night skies." },
              { icon: ShieldCheck, title: "Warm Kerala Hospitality", desc: "Personalized host attention, excursion guidance, and 24/7 guest service." }
            ].map((feature, i) => (
              <div
                key={i}
                className={isNight ? "glass-panel-dark" : "glass-panel"}
                style={{ padding: '2.25rem', borderRadius: 'var(--radius-md)' }}
              >
                <feature.icon size={36} style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }} />
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: isNight ? '#FFFFFF' : 'var(--color-heading)', marginBottom: '0.75rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: isNight ? 'rgba(255, 255, 255, 0.78)' : 'var(--color-muted-text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACCOMMODATION PREVIEW (PRICING FREE & HIGH CONTRAST) ================= */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', gap: '1.5rem' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Luxury Stays</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)' }}>
                Rooms & Accommodation
              </h2>
            </div>
            <Link to="/rooms" className="btn btn-outline-dark">
              View All Rooms <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {RESORT_CONFIG.rooms.map((room) => (
              <div
                key={room.id}
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--color-border-theme)'
                }}
              >
                <div className="img-zoom-container" style={{ height: '260px' }}>
                  <img src={room.image} alt={room.name} />
                  {room.recommended && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        backgroundColor: 'var(--color-gold)',
                        color: '#081610',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}
                    >
                      Most Popular
                    </span>
                  )}
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    {room.subtitle}
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '0.75rem' }}>
                    {room.name}
                  </h3>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                    {room.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          backgroundColor: 'var(--color-sand)',
                          color: 'var(--color-body)',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '4px',
                          border: '1px solid var(--color-border-theme)'
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border-theme)', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <a
                      href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about staying in the ${room.name} at Velvet Haven Resort, Vagamon.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '0.55rem 1.1rem', fontSize: '0.825rem', width: '100%' }}
                    >
                      <MessageSquare size={15} /> Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GUEST TESTIMONIALS & REVIEWS (ADAPTIVE LIGHT / DARK THEME) ================= */}
      <section className={isNight ? "section-padding bg-pine" : "section-padding"} style={{ backgroundColor: isNight ? undefined : 'var(--color-sand)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>Guest Reflections</span>
            <h2 className="heading-1 font-serif" style={{ color: isNight ? '#FFFFFF' : 'var(--color-heading)', marginBottom: '1rem' }}>
              Stories from Velvet Haven
            </h2>
            <p style={{ color: isNight ? 'rgba(255, 255, 255, 0.82)' : 'var(--color-muted-text)', fontSize: '1.05rem' }}>
              Read what travelers say about their peaceful getaway at our Vagamon hillside sanctuary.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {RESORT_CONFIG.testimonials.map((item) => (
              <div
                key={item.id}
                className={isNight ? "glass-panel-dark" : "glass-panel"}
                style={{ padding: '2.25rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />
                    ))}
                  </div>
                  <Quote size={24} style={{ color: 'var(--color-gold)', opacity: 0.6, marginBottom: '0.75rem' }} />
                  <p style={{ color: isNight ? 'rgba(255, 255, 255, 0.92)' : 'var(--color-body)', fontStyle: 'italic', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    "{item.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--color-border-theme)', paddingTop: '1rem' }}>
                  <h4 className="font-serif" style={{ color: 'var(--color-gold)', fontSize: '1.15rem' }}>{item.author}</h4>
                  <p style={{ color: isNight ? 'rgba(255, 255, 255, 0.65)' : 'var(--color-muted-text)', fontSize: '0.85rem' }}>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATION PREVIEW ================= */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Destination Guide</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                Located in Pristine Vagamon, Kerala
              </h2>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Situated conveniently near Vagamon’s renowned Pine Forests, Kurisumala Ashram, and green meadows, our resort offers easy access to major sight-seeing spots while retaining complete hillside tranquility.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {RESORT_CONFIG.travelInfo.slice(0, 3).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MapPin size={20} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-heading)', fontWeight: 500, fontSize: '0.95rem' }}>{item.label}:</span>
                    <span style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem' }}>{item.distance}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={RESORT_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <MapPin size={18} /> Get Google Map Directions
                </a>
                <Link to="/location" className="btn btn-outline-dark">
                  View Location Details
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '420px', border: '1px solid var(--color-border-theme)' }}>
              <iframe
                title="Velvet Haven Resort Vagamon Location Map"
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

      {/* ================= GUEST RESERVATION CALLOUT (ADAPTIVE LIGHT / DARK THEME) ================= */}
      <section className={isNight ? "section-padding bg-pine" : "section-padding"} style={{ backgroundColor: isNight ? undefined : 'var(--color-sand)', textAlign: 'center' }}>
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Reservations</span>
          <h2 className="heading-1 font-serif" style={{ color: isNight ? '#FFFFFF' : 'var(--color-heading)', marginBottom: '1.25rem' }}>
            Ready for your Vagamon Mountain Getaway?
          </h2>
          <p style={{ color: isNight ? 'rgba(255, 255, 255, 0.88)' : 'var(--color-muted-text)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            Book directly through our dedicated reservation portal or connect instantly on WhatsApp with our front desk team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.25rem' }}>
              Proceed to Booking Enquiry <ArrowRight size={18} />
            </Link>
            <a
              href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to enquire about staying at Velvet Haven Resort, Vagamon.")}`}
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
