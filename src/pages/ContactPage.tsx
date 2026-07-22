import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Navigation } from 'lucide-react';
import { RESORT_CONFIG } from '../config/resortConfig';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Resort Enquiry - Velvet Haven Resort, Vagamon*
---------------------------------------
👤 *Name:* ${formData.name || 'Not specified'}
📞 *Phone:* ${formData.phone || 'Not specified'}
✉️ *Email:* ${formData.email || 'Not specified'}
📅 *Check-in:* ${formData.checkIn || 'TBD'}
📅 *Check-out:* ${formData.checkOut || 'TBD'}
👥 *Guests:* ${formData.guests}
📝 *Message:* ${formData.message || 'I would like to enquire about staying at Velvet Haven Resort.'}`;

    const url = `https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <SEO
        title="Contact & Booking Enquiry"
        description="Get in touch with Velvet Haven Resort, Vagamon. Send your booking enquiry directly on WhatsApp or email velvethavenresort@gmail.com."
        canonicalPath="/contact"
      />

      {/* Header Banner */}
      <section
        style={{
          paddingTop: '10rem',
          paddingBottom: '5rem',
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.35), rgba(8, 22, 16, 0.55)), url(${RESORT_CONFIG.images.hero1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Reservations & Assistance</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            Contact Velvet Haven Resort
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '680px', margin: '0 auto', textShadow: '0 1px 6px rgba(0, 0, 0, 0.4)' }}>
            Our host team is delighted to assist you with reservations, room choices, and travel planning in Vagamon.
          </p>
        </div>
      </section>

      {/* Contact Form & Direct Details */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Details & Info Card */}
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Reach Out</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                We're Here to Help
              </h2>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                For instant booking support or questions regarding availability, send us a WhatsApp message or reach us via email.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-heading)' }}>Email Us</h3>
                    <a href={`mailto:${RESORT_CONFIG.email}`} style={{ color: 'var(--color-muted-text)', textDecoration: 'none', fontSize: '1rem' }}>
                      {RESORT_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-heading)' }}>Call Us</h3>
                    <a href={`tel:${RESORT_CONFIG.contactPhone}`} style={{ color: 'var(--color-muted-text)', textDecoration: 'none', fontSize: '1rem' }}>
                      {RESORT_CONFIG.contactPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-heading)' }}>Resort Location</h3>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: '1rem' }}>{RESORT_CONFIG.location}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.2)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-heading)' }}>Front Desk Hours</h3>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: '1rem' }}>24 Hours Guest Support & Check-in</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-theme)' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#25D366', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={20} /> Quick WhatsApp Chat
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--color-muted-text)', marginBottom: '1.25rem' }}>
                  Click below to directly chat with our Vagamon desk host without filling the form.
                </p>
                <a
                  href={`https://wa.me/${RESORT_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to enquire about staying at Velvet Haven Resort, Vagamon.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Interactive Enquiry Form */}
            <div style={{ backgroundColor: 'var(--color-card-bg)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border-theme)' }}>
              <h2 className="font-serif" style={{ fontSize: '2rem', color: 'var(--color-heading)', marginBottom: '0.5rem' }}>
                Send Reservation Enquiry
              </h2>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill out the form below to generate a pre-formatted WhatsApp message for instant booking.
              </p>

              <form onSubmit={handleWhatsAppSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--color-input-border)',
                        backgroundColor: 'var(--color-input-bg)',
                        color: 'var(--color-input-text)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Your Contact Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--color-input-border)',
                        backgroundColor: 'var(--color-input-bg)',
                        color: 'var(--color-input-text)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.9rem',
                      borderRadius: '4px',
                      border: '1px solid var(--color-input-border)',
                      backgroundColor: 'var(--color-input-bg)',
                      color: 'var(--color-input-text)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--color-input-border)',
                        backgroundColor: 'var(--color-input-bg)',
                        color: 'var(--color-input-text)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 0.9rem',
                        borderRadius: '4px',
                        border: '1px solid var(--color-input-border)',
                        backgroundColor: 'var(--color-input-bg)',
                        color: 'var(--color-input-text)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.9rem',
                      borderRadius: '4px',
                      border: '1px solid var(--color-input-border)',
                      backgroundColor: 'var(--color-input-bg)',
                      color: 'var(--color-input-text)',
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

                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your trip plans, preferences, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.9rem',
                      borderRadius: '4px',
                      border: '1px solid var(--color-input-border)',
                      backgroundColor: 'var(--color-input-bg)',
                      color: 'var(--color-input-text)',
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

          </div>
        </div>
      </section>

      {/* Map & Get Directions Callout */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--color-border-theme)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Map Navigation</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                How to Find Us
              </h2>
              <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Velvet Haven Resort is nestled in the quiet upper hills of Vagamon, Idukki District, Kerala. The route passes through scenic winding tea estates and cool mist-laden roads.
              </p>

              <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-card-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-theme)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <MapPin size={22} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-heading)' }}>Resort Address</h3>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem' }}>{RESORT_CONFIG.name}, {RESORT_CONFIG.location} - {RESORT_CONFIG.pinCode}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Phone size={22} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-heading)' }}>Front Desk Assistance</h3>
                    <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem' }}>{RESORT_CONFIG.contactPhone}</p>
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
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', height: '460px', border: '1px solid var(--color-border-theme)' }}>
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
            <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '1.05rem' }}>
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
                <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#FFFFFF' }}>
                  {info.label}
                </h3>
                <p style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '1.05rem', margin: 0 }}>
                  {info.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="badge-gold" style={{ marginBottom: '1rem' }}>Local Sightseeing</span>
            <h2 className="heading-1 font-serif" style={{ color: 'var(--color-heading)', marginBottom: '1rem' }}>
              Nearby Vagamon Attractions
            </h2>
            <p style={{ color: 'var(--color-muted-text)', fontSize: '1.05rem' }}>
              Explore famous sightseeing destinations located just minutes away from Velvet Haven Resort.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {RESORT_CONFIG.nearbyAttractions.map((spot, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-card-bg)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-border-theme)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--color-heading)' }}>
                      {spot.name}
                    </h3>
                    <span style={{ fontSize: '0.825rem', color: 'var(--color-gold)', fontWeight: 700, backgroundColor: 'var(--color-sand)', padding: '0.25rem 0.6rem', borderRadius: '4px', border: '1px solid var(--color-border-theme)' }}>
                      {spot.distance}
                    </span>
                  </div>
                  <p style={{ color: 'var(--color-muted-text)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
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
