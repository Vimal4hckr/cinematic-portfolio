import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export const Closing: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    });
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Filmmaking Collaboration from ${inquiryName}`);
    const body = encodeURIComponent(
      `Name: ${inquiryName}\nEmail: ${inquiryEmail}\n\nProject details / message:\n${inquiryMsg}`
    );
    window.location.href = `mailto:${portfolioData.contacts.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="end wrap" id="contact">
      <span className="label">{portfolioData.closing.label}</span>

      <h2 className="bill" style={{ marginTop: '22px' }}>
        Let's make
        <br />
        <span>the next one</span>
        <wbr />
      </h2>

      <div className="ways">
        {/* Email */}
        <div className="way">
          <a
            href={`mailto:${portfolioData.contacts.email}`}
            aria-label={`Email: ${portfolioData.contacts.email}`}
          >
            <span className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m4 7 8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="label">Email</span>
            <span className="val">{portfolioData.contacts.email}</span>
          </a>
          <button
            type="button"
            className="cp label"
            aria-label="Copy email address"
            onClick={() => handleCopy(portfolioData.contacts.email, 'email')}
          >
            {copiedType === 'email' ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* WhatsApp */}
        <div className="way">
          <a
            href={portfolioData.contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp: ${portfolioData.contacts.phone}`}
          >
            <span className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.2 8.6c.3-.6.7-.6 1-.2l.8 1.3c.2.3.1.6-.1.9l-.4.5c.5 1.1 1.4 2 2.5 2.5l.5-.4c.3-.2.6-.3.9-.1l1.3.8c.4.3.4.7-.2 1-1 .6-2 .5-3-.1a8.4 8.4 0 0 1-3.4-3.4c-.6-1-.7-2-.1-3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="label">WhatsApp</span>
            <span className="val">{portfolioData.contacts.phone}</span>
          </a>
          <button
            type="button"
            className="cp label"
            aria-label="Copy phone number"
            onClick={() => handleCopy(portfolioData.contacts.phone, 'phone')}
          >
            {copiedType === 'phone' ? 'Copied' : 'Copy'}
          </button>
        </div>

        {/* YouTube */}
        <div className="way">
          <a
            href={portfolioData.contacts.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel: Balaji L."
          >
            <span className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect
                  x="2.5"
                  y="5.5"
                  width="19"
                  height="13"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M10.2 9.4v5.2l4.4-2.6Z" fill="currentColor" />
              </svg>
            </span>
            <span className="label">YouTube</span>
            <span className="val">@directorlbalaji</span>
          </a>
        </div>

        {/* Instagram */}
        <div className="way">
          <a
            href={portfolioData.contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram: @lbalaji16"
          >
            <span className="ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </span>
            <span className="label">Instagram</span>
            <span className="val">@lbalaji16</span>
          </a>
        </div>
      </div>

      <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <a
          className="resume-cta label"
          href="/resume.pdf"
          download="Balaji-L-Filmmaker-Resume.pdf"
        >
          {portfolioData.closing.resume}
          <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
            <path
              d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <button
          type="button"
          className="cta label"
          onClick={() => setShowInquiryForm(!showInquiryForm)}
          style={{ minHeight: '48px', padding: '0 24px' }}
        >
          {showInquiryForm ? 'Close Message Box' : 'Send Direct Message ↗'}
        </button>
      </div>

      {/* Optional Interactive Inquiry Drawer */}
      {showInquiryForm && (
        <form
          onSubmit={handleSendInquiry}
          style={{
            maxWidth: '600px',
            margin: '40px auto 0',
            background: 'var(--raise)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            padding: 'clamp(20px, 3vw, 32px)',
            textAlign: 'left',
          }}
        >
          <div style={{ marginBottom: '16px' }}>
            <label className="label" style={{ display: 'block', marginBottom: '8px' }}>
              Your Name
            </label>
            <input
              type="text"
              required
              value={inquiryName}
              onChange={(e) => setInquiryName(e.target.value)}
              placeholder="e.g. Mani Ratnam"
              style={{
                width: '100%',
                background: 'var(--black)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '12px 16px',
                color: 'var(--screen)',
                fontFamily: 'var(--f)',
                fontSize: '15px',
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label className="label" style={{ display: 'block', marginBottom: '8px' }}>
              Your Email
            </label>
            <input
              type="email"
              required
              value={inquiryEmail}
              onChange={(e) => setInquiryEmail(e.target.value)}
              placeholder="director@studio.com"
              style={{
                width: '100%',
                background: 'var(--black)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '12px 16px',
                color: 'var(--screen)',
                fontFamily: 'var(--f)',
                fontSize: '15px',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label className="label" style={{ display: 'block', marginBottom: '8px' }}>
              Project / Collaboration Note
            </label>
            <textarea
              required
              rows={4}
              value={inquiryMsg}
              onChange={(e) => setInquiryMsg(e.target.value)}
              placeholder="Tell Balaji about your film, series, commercial or script..."
              style={{
                width: '100%',
                background: 'var(--black)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '12px 16px',
                color: 'var(--screen)',
                fontFamily: 'var(--f)',
                fontSize: '15px',
                resize: 'vertical',
              }}
            />
          </div>

          <button
            type="submit"
            className="resume-cta label"
            style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
          >
            Send Mail to directorlbalaji@gmail.com ↗
          </button>
        </form>
      )}
    </section>
  );
};
