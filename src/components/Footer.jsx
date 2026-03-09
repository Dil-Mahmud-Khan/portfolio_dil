import React from 'react';

export default function Footer({ personal }) {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.12)',
      padding: '32px 52px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 12,
      maxWidth: 1160, margin: '0 auto',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
        &lt;<span style={{ color: 'var(--cyan)' }}>{personal.name}</span> /&gt; — SOC &amp; Cybersecurity Portfolio
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
        {personal.location} · <span style={{ color: 'var(--cyan)' }}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
