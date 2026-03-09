import React from 'react';
import SectionHeader from './SectionHeader';

export default function Skills({ skillGroups }) {
  return (
    <section id="skills" style={sectionStyle}>
      <SectionHeader num="02" title="Skills" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 22,
      }} className="skills-grid">
        {skillGroups.map((group, i) => (
          <SkillGroup key={i} group={group} />
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SkillGroup({ group }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)', border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)', padding: 28,
        backdropFilter: 'blur(8px)', transition: 'border-color 0.3s',
      }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: 2.5,
        textTransform: 'uppercase', color: 'var(--cyan)',
        marginBottom: 18, paddingBottom: 12,
        borderBottom: '1px solid var(--border)',
      }}>
        {group.title}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {group.skills.map((skill, i) => (
          <SkillTag key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillTag({ skill }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 13,
        padding: '6px 14px',
        border: `1px solid ${skill.highlight || hovered ? 'rgba(56,217,245,0.5)' : 'var(--border)'}`,
        color: skill.highlight || hovered ? 'var(--cyan)' : 'var(--off-white)',
        borderRadius: 4,
        background: skill.highlight ? 'var(--cyan-dim)' : 'var(--surface2)',
        transition: 'all 0.18s',
        cursor: 'default',
        fontWeight: skill.highlight ? 500 : 400,
      }}>
      {skill.name}
    </span>
  );
}

const sectionStyle = { padding: '92px 52px', maxWidth: 1160, margin: '0 auto' };
