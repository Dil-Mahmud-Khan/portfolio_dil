import React from 'react';
import SectionHeader from './SectionHeader';

export default function About({ personal }) {
  const { aboutParagraphs, terminalLines, email, phone, location, linkedin, linkedinHandle, github, githubHandle, languages, status } = personal;

  const infoRows = [
    { key: 'Email',    val: <a href={`mailto:${email}`} style={{ color: 'var(--cyan)', textDecoration: 'none' }}>{email}</a> },
    { key: 'Phone',    val: phone },
    { key: 'Location', val: location },
    { key: 'LinkedIn', val: <a href={linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>{linkedinHandle}</a> },
    { key: 'GitHub',   val: <a href={github} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>{githubHandle}</a> },
    { key: 'Languages', val: languages },
    { key: 'Status',   val: <span style={{
      display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 11,
      color: 'var(--green)', border: '1px solid var(--green)',
      background: 'rgba(46,237,179,0.1)', padding: '3px 10px', borderRadius: 4, letterSpacing: 1,
    }}>{status}</span> },
  ];

  return (
    <section id="about" style={sectionStyle}>
      <SectionHeader num="01" title="About" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 52 }} className="about-grid">
        {/* Left: text + terminal */}
        <div>
          {aboutParagraphs.map((p, i) => (
            <p key={i} style={{ color: 'var(--off-white)', fontSize: 17, lineHeight: 1.85, marginBottom: 18 }}
              dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <Terminal lines={terminalLines} />
        </div>

        {/* Right: info rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {infoRows.map((row, i) => (
            <InfoRow key={i} label={row.key} value={row.val} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ label, value }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 14,
        padding: '13px 16px',
        background: 'var(--surface)', border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)', transition: 'border-color 0.2s',
        backdropFilter: 'blur(6px)',
      }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--cyan)', letterSpacing: 1.5, textTransform: 'uppercase', minWidth: 76, paddingTop: 2 }}>
        {label}
      </span>
      <span style={{ fontSize: 15, color: 'var(--off-white)' }}>{value}</span>
    </div>
  );
}

function Terminal({ lines }) {
  return (
    <div style={{
      background: 'rgba(0,4,40,0.75)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius)', padding: '28px 24px 22px',
      fontFamily: 'var(--mono)', fontSize: 15,
      color: 'var(--muted)', marginTop: 32, position: 'relative',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{ position: 'absolute', top: 12, left: 16, fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: 5 }}>● ● ●</div>
      <div style={{ marginTop: 10 }}>
        {lines.map((line, i) => (
          <div key={i} style={{ marginTop: i === 0 ? 0 : 9 }}>
            <span style={{ color: 'var(--green)' }}>{line.prompt}</span>
            <span style={{ color: 'var(--cyan)' }}>:~$ </span>
            {line.cmd}
            <div>
              <span style={{ color: 'var(--muted)' }}>→ </span>
              <span style={{ color: 'var(--white)' }}>{line.out}
                {i === lines.length - 1 && (
                  <span style={{
                    display: 'inline-block', width: 2, height: '1em',
                    background: 'var(--cyan)', marginLeft: 2, verticalAlign: 'middle',
                    animation: 'blink 1s step-end infinite',
                  }} />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const sectionStyle = {
  padding: '92px 52px',
  maxWidth: 1160,
  margin: '0 auto',
};
