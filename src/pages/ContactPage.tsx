import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock } from 'lucide-react';
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
          backgroundImage: `linear-gradient(rgba(8, 22, 16, 0.75), rgba(8, 22, 16, 0.85)), url(${RESORT_CONFIG.images.hero1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFFFFF',
          textAlign: 'center'
        }}
      >
        <div className="container container-narrow">
          <span className="badge-gold" style={{ marginBottom: '1rem' }}>Reservations & Assistance</span>
          <h1 className="heading-1 font-serif" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            Contact Velvet Haven Resort
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '680px', margin: '0 auto' }}>
            Our host team is delighted to assist you with reservations, room choices, and travel planning in Vagamon.
          </p>
        </div>
      </section>

      {/* Contact Form & Direct Details */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
            
            {/* Contact Details & Info Card */}
            <div>
              <span className="badge-gold" style={{ marginBottom: '1rem' }}>Reach Out</span>
              <h2 className="heading-1 font-serif" style={{ color: 'var(--color-pine)', marginBottom: '1.5rem' }}>
                We're Here to Help
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                For instant booking support or questions regarding availability, send us a WhatsApp message or reach us via email.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-pine)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-pine)' }}>Email Us</h3>
                    <a href={`mailto:${RESORT_CONFIG.email}`} style={{ color: 'var(--color-muted)', textDecoration: 'none', fontSize: '1rem' }}>
                      {RESORT_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-pine)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-pine)' }}>Call Us</h3>
                    <a href={`tel:${RESORT_CONFIG.contactPhone}`} style={{ color: 'var(--color-muted)', textDecoration: 'none', fontSize: '1rem' }}>
                      {RESORT_CONFIG.contactPhone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-pine)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-pine)' }}>Resort Location</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '1rem' }}>{RESORT_CONFIG.location}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-pine)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-pine)' }}>Front Desk Hours</h3>
                    <p style={{ color: 'var(--color-muted)', fontSize: '1rem' }}>24 Hours Guest Support & Check-in</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div style={{ padding: '2rem', backgroundColor: '#E8F6EE', borderRadius: 'var(--radius-lg)', border: '1px solid #C2EBD0' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#116530', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={20} /> Quick WhatsApp Chat
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#2C5E3B', marginBottom: '1.25rem' }}>
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
            <div style={{ backgroundColor: '#FFFFFF', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
              <h2 className="font-serif" style={{ fontSize: '2rem', color: 'var(--color-pine)', marginBottom: '0.5rem' }}>
                Send Reservation Enquiry
              </h2>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill out the form below to generate a pre-formatted WhatsApp message for instant booking.
              </p>

              <form onSubmit={handleWhatsAppSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
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
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
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
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
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
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
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
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
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
                        border: '1px solid var(--color-border)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.9rem',
                      borderRadius: '4px',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.95rem',
                      backgroundColor: '#FFFFFF',
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
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-charcoal)', marginBottom: '0.35rem' }}>
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
                      border: '1px solid var(--color-border)',
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
    </>
  );
};
