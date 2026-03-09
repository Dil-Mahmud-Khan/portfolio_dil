import React from 'react';
import SectionHeader from './SectionHeader';

const statusConfig = {
  active:      { label: 'ACTIVE',      color: '#2eedb3', bg: 'rgba(46,237,179,0.12)' },
  progress:    { label: 'IN PROGRESS', color: '#38d9f5', bg: 'rgba(56,217,245,0.12)' },
  award:       { label: 'AWARD',       color: '#ff8c42', bg: 'rgba(255,140,66,0.12)' },
  certificate: { label: 'CERTIFICATE', color: 'rgba(255,255,255,0.7)', bg: 'rgba(255,255,255,0.08)' },
};

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" style={sectionStyle}>
      <SectionHeader num="06" title="Certifications & Awards" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
      }} className="cert-grid">
        {certifications.map((cert, i) => (
          <CertCard key={i} cert={cert} />
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) { .cert-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .cert-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function CertCard({ cert }) {
  const [hovered, setHovered] = React.useState(false);
  const cfg = statusConfig[cert.status] || statusConfig.certificate;
  return (
    <div
    
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)', border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)', padding: '22px 20px',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
        textAlign: 'center', 

      }}>
      <div style={{ fontSize: 28, marginBottom: 12 }}>{cert.icon}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--white)', marginBottom: 6, lineHeight: 1.4 }}>{cert.name}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 14 }}>{cert.org}</div>
      <span style={{
        display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10,
        color: cfg.color, background: cfg.bg,
        border: `1px solid ${cfg.color}`,
        padding: '2px 8px', borderRadius: 3, letterSpacing: 1,
      }}>{cfg.label}</span>
    </div>
  );
}

const sectionStyle = { padding: '92px 52px', maxWidth: 1160, margin: '0 auto' };
