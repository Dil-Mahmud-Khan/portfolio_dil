import React from 'react';
import SectionHeader from './SectionHeader';

export default function Education({ education }) {
  return (
    <section id="education" style={sectionStyle}>
      <SectionHeader num="05" title="Education" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {education.map((edu, i) => (
          <EduCard key={i} edu={edu} />
        ))}
      </div>
    </section>
  );
}

function EduCard({ edu }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        padding: 28, background: 'var(--surface)',
        border: `1px solid ${edu.current ? 'rgba(56,217,245,0.4)' : hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        backdropFilter: 'blur(8px)', gap: 24, flexWrap: 'wrap',
        transition: 'border-color 0.3s',
      }}>
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--white)', marginBottom: 6 }}>{edu.degree}</div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--green)', marginBottom: edu.courses || edu.note ? 12 : 0 }}>
          {edu.school}
        </div>
        {edu.courses && (
          <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{edu.courses}</div>
        )}
        {edu.note && (
          <div style={{ fontSize: 14, color: 'var(--muted)', fontStyle: 'italic' }}>{edu.note}</div>
        )}
        {edu.badge && (
          <div style={{
            display: 'inline-block', marginTop: 12,
            fontFamily: 'var(--mono)', fontSize: 11,
            color: 'var(--cyan)', border: '1px solid var(--cyan)',
            background: 'var(--cyan-dim)', padding: '3px 10px',
            borderRadius: 4, letterSpacing: 1,
          }}>{edu.badge}</div>
        )}
      </div>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--cyan)',
        background: 'var(--cyan-dim)', padding: '3px 10px', borderRadius: 4,
        whiteSpace: 'nowrap', alignSelf: 'flex-start',
      }}>
        {edu.period}
      </div>
    </div>
  );
}

const sectionStyle = { padding: '92px 52px', maxWidth: 1160, margin: '0 auto' };
