import React from 'react';
import SectionHeader from './SectionHeader';

export default function Projects({ projects }) {
  return (
    <section id="projects" style={sectionStyle}>
      <SectionHeader num="04" title="Projects" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
      }} className="proj-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} />
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) { .proj-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .proj-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ProjectCard({ proj }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)', border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)', padding: 26,
        display: 'flex', flexDirection: 'column',
        backdropFilter: 'blur(8px)', position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s, transform 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}>
      {/* bottom bar on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, var(--cyan), var(--green))',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s',
      }} />

      <div style={{ fontSize: 30, marginBottom: 14 }}>{proj.icon}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--orange)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 7 }}>
        {proj.category}
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--white)', marginBottom: 11 }}>
        {proj.url
          ? <a href={proj.url} target="_blank" rel="noreferrer" style={{ color: 'var(--white)', textDecoration: 'none' }}>{proj.title} ↗</a>
          : proj.title}
      </div>
      <p style={{ fontSize: 14, color: 'var(--off-white)', lineHeight: 1.78, flexGrow: 1, marginBottom: 18 }}>
        {proj.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {proj.tags.map((t, i) => (
          <span key={i} style={{
            fontSize: 12, padding: '4px 10px',
            border: '1px solid rgba(56,217,245,0.25)',
            color: 'var(--cyan)', borderRadius: 4,
            background: 'var(--cyan-dim)',
            fontFamily: 'var(--mono)',
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

const sectionStyle = { padding: '92px 52px', maxWidth: 1160, margin: '0 auto' };
