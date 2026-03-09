import React from 'react';
import SectionHeader from './SectionHeader';

export default function Contact({ personal }) {
  const { email, phone, linkedin, linkedinHandle, github, githubHandle } = personal;

  const cards = [
    { icon: '✉️', label: 'Email', val: email, href: `mailto:${email}` },
    { icon: '📞', label: 'Phone', val: phone, href: `tel:${phone.replace(/\s/g, '')}` },
    { icon: '🔗', label: 'LinkedIn', val: linkedinHandle, href: linkedin },
    { icon: '🐙', label: 'GitHub', val: githubHandle, href: github },
  ];

  return (
    <section id="contact" style={sectionStyle}>
      <SectionHeader num="08" title="Contact" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="contact-grid">
        {cards.map((c, i) => (
          <ContactCard key={i} card={c} />
        ))}
      </div>
      <style>{`
        @media (max-width: 560px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ContactCard({ card }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={card.href}
      target={card.label !== 'Email' && card.label !== 'Phone' ? '_blank' : undefined}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '22px 24px',
        background: 'var(--surface)', border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        backdropFilter: 'blur(8px)',
        textDecoration: 'none',
        transition: 'border-color 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}>
      <div style={{ fontSize: 28 }}>{card.icon}</div>
      <div>
        <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: 1, marginBottom: 4 }}>
          {card.label.toUpperCase()}
        </div>
        <div style={{ fontSize: 15, color: hovered ? 'var(--cyan)' : 'var(--off-white)', transition: 'color 0.2s', fontWeight: 500 }}>
          {card.val}
        </div>
      </div>
    </a>
  );
}

const sectionStyle = { padding: '92px 52px', maxWidth: 1160, margin: '0 auto' };
