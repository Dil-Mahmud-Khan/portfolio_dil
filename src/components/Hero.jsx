import React from 'react';

export default function Hero({ personal }) {
  const { name, heroEyebrow, heroTitle, heroAccentWord, heroDesc, stats, email, resumeUrl, github } = personal;

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 24px 72px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* dot grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
        {/* Avatar placeholder */}
        <div style={{
          width: 130, height: 130, borderRadius: '50%',
          margin: '0 auto 32px', position: 'relative',
          animation: 'fadeUp 0.7s ease both',
        }}>
          <div style={{
            position: 'absolute', inset: -3, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--cyan), var(--green))',
          }} />
          <div style={{
            position: 'absolute', inset: 3, borderRadius: '50%',
            background: 'var(--grad-dark)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 58, overflow: 'hidden',
          }}>
            <img src="/dil.jpeg" alt="Dil" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
        </div>

        {/* Eyebrow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontFamily: 'var(--mono)', fontSize: 13,
          color: 'var(--cyan)', letterSpacing: 3, textTransform: 'uppercase',
          marginBottom: 20,
          animation: 'fadeUp 0.7s ease both',
        }}>
          <span style={{ opacity: 0.45 }}>—</span>
          {heroEyebrow}
          <span style={{ opacity: 0.45 }}>—</span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontSize: 'clamp(46px, 7vw, 86px)',
          fontWeight: 800,
          letterSpacing: -2, lineHeight: 1.04,
          color: 'var(--white)',
          marginBottom: 22,
          animation: 'fadeUp 0.7s 0.08s ease both',
        }}>
          {heroTitle.map((word, i) => (
            <span key={i}>
              {word === heroAccentWord
                ? <span style={{ color: 'var(--cyan)' }}>{word}</span>
                : word}
              {i < heroTitle.length - 1 && ' '}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p style={{
          fontSize: 19, fontWeight: 400,
          color: 'var(--off-white)',
          maxWidth: 1000, margin: '0 auto 38px',
          lineHeight: 1.85,
          animation: 'fadeUp 0.7s 0.16s ease both',
        }}>
          {heroDesc}
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 14,
          justifyContent: 'center', marginBottom: 22,
          animation: 'fadeUp 0.7s 0.22s ease both',
        }}>
          <a href="mailto:dilmahmudkhan956@gmail.com" style={btnPrimary}
  onMouseEnter={e => Object.assign(e.currentTarget.style, btnPrimaryHover)}
  onMouseLeave={e => Object.assign(e.currentTarget.style, btnPrimary)}>
  Email
</a>
<a href="https://linkedin.com/in/dil-mahmud-khan-71b4191a0" target="_blank" rel="noreferrer" style={btnOutline}
  onMouseEnter={e => Object.assign(e.currentTarget.style, btnOutlineHover)}
  onMouseLeave={e => Object.assign(e.currentTarget.style, btnOutline)}>
  LinkedIn ↗
</a>
<a href="https://github.com/Dil-Mahmud-Khan" target="_blank" rel="noreferrer" style={btnOutline}
  onMouseEnter={e => Object.assign(e.currentTarget.style, btnOutlineHover)}
  onMouseLeave={e => Object.assign(e.currentTarget.style, btnOutline)}>
  GitHub ↗
</a>
        </div>

      

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap',
          animation: 'fadeUp 0.7s 0.32s ease both',
        }}>
          {stats.map((s, i) => (
            <StatCard key={i} num={s.num} label={s.label} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column; align-items: center; }
        }
      `}</style>
    </section>
  );
}

function StatCard({ num, label }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--cyan)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        padding: '20px 30px', textAlign: 'center', minWidth: 115,
        backdropFilter: 'blur(8px)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        transition: 'border-color 0.2s, transform 0.2s',
      }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 28, color: 'var(--cyan)', lineHeight: 1, marginBottom: 6 }}>{num}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>{label}</div>
    </div>
  );
}

const btnPrimary = {
  padding: '14px 34px',
  background: 'var(--cyan)', color: '#000428',
  fontSize: 15, fontWeight: 700,
  textDecoration: 'none', borderRadius: 'var(--radius)',
  transition: 'all 0.2s', letterSpacing: 0.4,
  display: 'inline-block',
};
const btnPrimaryHover = {
  ...btnPrimary,
  background: 'var(--green)',
  transform: 'translateY(-2px)',
  boxShadow: '0 8px 24px rgba(56,217,245,0.35)',
};
const btnOutline = {
  padding: '13px 30px',
  background: 'transparent', color: 'var(--white)',
  fontSize: 15, fontWeight: 500,
  border: '1.5px solid rgba(255,255,255,0.12)',
  textDecoration: 'none', borderRadius: 'var(--radius)',
  transition: 'all 0.2s',
  display: 'inline-block',
};
const btnOutlineHover = {
  ...btnOutline,
  borderColor: 'var(--cyan)',
  color: 'var(--cyan)',
};
