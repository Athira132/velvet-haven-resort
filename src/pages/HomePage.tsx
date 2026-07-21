import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, ArrowRight, ShieldCheck, Flame, Utensils, MessageSquare, Sparkles } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  const heroImages = [RESORT_CONFIG.images.hero1, RESORT_CONFIG.images.hero2];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Form State for Enquiry
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    message: ''
  });

  // Slow cinematic hero transition every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Resort Enquiry - Velvet Haven Resort, Vagamon*
---------------------------------------
👤 *Name:* ${formData.name || 'Not specified'}
📞 *Phone:* ${formData.phone || 'Not specified'}
✉️ *Email:* ${formData.email || 'Not specified'}
📅 *Check-in:* ${formData.checkIn || 'TBD'}
📅 *Check-out:* ${formData.checkOut || 'TBD'}
👥 *Guests:* ${formData.guests}
📝 *Message:* ${formData.message || 'I would like to enquire about room availability.'}`;

    const url = `https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO title="Luxury Nature Resort in Vagamon" />

      {/* ================= HERO SECTION ================= */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '650px', overflow: 'hidden' }}>
        {/* Background Image Slider with Cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${heroImages[currentHeroIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </AnimatePresence>

        {/* Elegant Subtle Dark Gradient Overlay for optimal readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(8, 22, 16, 0.45) 0%, rgba(8, 22, 16, 0.25) 50%, rgba(8, 22, 16, 0.75) 100%)'
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
            color: '#FFFFFF',
            paddingTop: '5rem'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: '750px' }}
          >
            <span className="badge-gold" style={{ marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={14} /> Sanctuary in the Mist • Vagamon, Kerala
            </span>

            <h1
              className="heading-display font-serif"
              style={{
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                textShadow: '0 4px 16px rgba(0,0,0,0.4)',
                fontWeight: 500
              }}
            >
              Escape to the Hills.<br />Stay in the Moment.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.92)',
                lineHeight: '1.6',
                marginBottom: '2.25rem',
                maxWidth: '620px',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)'
              }}
            >
              Experience peaceful stays, scenic landscapes, and warm hospitality in the heart of Vagamon, Kerala.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary">
                Book Your Stay <ChevronRight size={18} />
              </Link>
              <Link to="/rooms" className="btn btn-outline-light">
                Explore The Resort
              </Link>
            </div>
          </motion.div>

          {/* Slider Indicators */}
          <div style={{ position: 'absolute', bottom: '2.5rem', right: '1.5rem', display: 'flex', gap: '0.5rem', zIndex: 20 }}>
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentHeroIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{
                  width: idx === currentHeroIndex ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: idx === currentHeroIndex ? 'var(--color-gold)' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESORT INTRODUCTION ================= */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Welcome to Velvet Haven</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-pine)', marginBottom: '1.5rem' }}>
                A Peaceful Mountain Haven Above the Clouds
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
                Perched gracefully amidst the misty pine ridges of Vagamon, Velvet Haven Resort is designed for travelers who seek true stillness, elevated comfort, and unhurried luxury.
              </p>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Whether you are listening to morning birdsong over the pine valley or gathering around an evening campfire under a starry mountain sky, every moment here connects you deeply with nature and authentic Kerala warmth.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--color-gold)' }}>1,100m</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Elevation above sea level</p>
                </div>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '2.2rem', color: 'var(--color-gold)' }}>100%</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tranquil Pine Nature</p>
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

      {/* ================= WHY STAY WITH US ================= */}
      <section className="section-padding bg-pine">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>The Velvet Experience</span>
            <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
              Why Guests Choose Velvet Haven
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem' }}>
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
                className="glass-panel-dark"
                style={{ padding: '2.25rem', borderRadius: 'var(--radius-md)', transition: 'transform 0.3s ease' }}
              >
                <feature.icon size={36} style={{ color: 'var(--color-gold)', marginBottom: '1.25rem' }} />
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACCOMMODATION PREVIEW ================= */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', gap: '1.5rem' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Luxury Stays</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-pine)' }}>
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
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column'
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
                  <h3 className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-pine)', marginBottom: '0.75rem' }}>
                    {room.name}
                  </h3>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                    {room.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          backgroundColor: 'var(--color-sand)',
                          color: 'var(--color-pine)',
                          padding: '0.3rem 0.65rem',
                          borderRadius: '4px'
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-pine)' }}>{room.price}</span>
                    </div>
                    <a
                      href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to enquire about booking the ${room.name} at Velvet Haven Resort, Vagamon.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                      style={{ padding: '0.55rem 1.1rem', fontSize: '0.825rem' }}
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

      {/* ================= EXPERIENCES & SCENIC HIGHLIGHT ================= */}
      <section
        style={{
          position: 'relative',
          paddingTop: '7rem',
          paddingBottom: '7rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.75), rgba(8, 22, 16, 0.85)), url(${RESORT_CONFIG.images.mistyHills})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1.25rem' }}>Vagamon Curated Journeys</span>
          <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>
            Immerse Yourself in Vagamon's Natural Beauty
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
            From pine forest sunrise walks to acoustic campfire evenings under mountain stars, create timeless memories at Velvet Haven.
          </p>
          <Link to="/experiences" className="btn btn-primary">
            Explore All Experiences <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= LOCATION PREVIEW ================= */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Destination Guide</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-pine)', marginBottom: '1.5rem' }}>
                Located in Pristine Vagamon, Kerala
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Situated conveniently near Vagamon’s renowned Pine Forests, Kurisumala Ashram, and green meadows, our resort offers easy access to major sight-seeing spots while retaining complete hillside tranquility.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {RESORT_CONFIG.travelInfo.slice(0, 3).map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MapPin size={20} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                    <span style={{ color: 'var(--color-charcoal)', fontWeight: 500, fontSize: '0.95rem' }}>{item.label}:</span>
                    <span style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{item.distance}</span>
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

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '420px', border: '1px solid var(--color-border)' }}>
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

      {/* ================= GUEST ENQUIRY SECTION ================= */}
      <section className="section-padding bg-pine">
        <div className="container container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>Instant WhatsApp Enquiry</span>
            <h2 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
              Plan Your Stay at Velvet Haven
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '1.05rem' }}>
              Fill out your preferred stay details below and click to send your enquiry directly to our reservation team on WhatsApp.
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="glass-panel-dark"
            style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter contact number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                Number of Guests
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(14, 36, 27, 0.95)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests (Couple)</option>
                <option value="3 - 4 Guests">3 - 4 Guests (Family)</option>
                <option value="5+ Guests">5+ Guests (Group)</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                Special Requests or Questions
              </label>
              <textarea
                rows={3}
                placeholder="Mention any specific preferences, room choices, or questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '1rem' }}>
              <MessageSquare size={20} /> Send Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
