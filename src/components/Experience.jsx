import React from 'react';
import SectionHeader from './SectionHeader';

export default function Experience({ experiences }) {
  return (
    <section id="experience" style={sectionStyle}>
      <SectionHeader num="03" title="Experience" />
      <div style={{ position: 'relative', paddingLeft: 38 }}>
        {/* vertical line */}
        <div style={{
          position: 'absolute', left: 0, top: 8, bottom: 8, width: 2,
          background: 'linear-gradient(180deg, var(--cyan), var(--green), transparent)',
          borderRadius: 2,
        }} />
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ exp }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative', marginBottom: 28,
        padding: 28, background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateX(4px)' : 'none',
      }}>
      {/* dot */}
      <div style={{
        position: 'absolute', left: -45, top: 30,
        width: 13, height: 13, background: 'var(--cyan)',
        border: '3px solid var(--grad-dark)',
        borderRadius: '50%', boxShadow: '0 0 0 2px var(--cyan)',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 5, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--white)' }}>{exp.role}</div>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--cyan)',
          background: 'var(--cyan-dim)', padding: '3px 10px', borderRadius: 4, whiteSpace: 'nowrap',
        }}>{exp.period}</div>
      </div>

      <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--green)', marginBottom: 12 }}>
        {exp.company} — {exp.location}
      </div>

      <p style={{ fontSize: 16, color: 'var(--off-white)', marginBottom: 14, lineHeight: 1.75 }}>{exp.desc}</p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 16, color: 'var(--off-white)', paddingLeft: 22, position: 'relative', lineHeight: 1.65 }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--cyan)', fontSize: 13, top: 4 }}>▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

const sectionStyle = { padding: '92px 52px', maxWidth: 1160, margin: '0 auto' };
