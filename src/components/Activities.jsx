import React from 'react';
import SectionHeader from './SectionHeader';

export default function Activities({ activities }) {
  return (
    <section id="activities" style={sectionStyle}>
      <SectionHeader num="07" title="Leadership & Activities" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
      }} className="activities-grid">
        {activities.map((act, i) => (
          <ActivityCard key={i} act={act} />
        ))}
      </div>
      <style>{`
        @media (max-width: 700px) { .activities-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ActivityCard({ act }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)', border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)', padding: 28,
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.3s',
      }}>
      <div style={{ fontSize: 30, marginBottom: 10 }}>{act.icon}</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>{act.org}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--cyan)', marginBottom: 16 }}>{act.role}</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: act.url ? 16 : 0 }}>
        {act.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 14, color: 'var(--off-white)', paddingLeft: 18, position: 'relative', lineHeight: 1.65 }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--cyan)', fontSize: 12, top: 4 }}>▸</span>
            {b}
          </li>
        ))}
      </ul>
      {act.url && (
        <a href={act.url} target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--mono)', fontSize: 13,
          color: 'var(--cyan)', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 4,
        }}>
          ↗ {act.urlLabel}
        </a>
      )}
    </div>
  );
}

const sectionStyle = { padding: '92px 52px', maxWidth: 1160, margin: '0 auto' };
