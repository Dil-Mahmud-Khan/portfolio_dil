import React from 'react';

export default function SectionHeader({ num, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 52 }}>
      <span style={{
        fontFamily: 'var(--mono)', fontSize: 13,
        color: 'var(--orange)', letterSpacing: 2,
        background: 'rgba(255,140,66,0.15)', padding: '3px 10px', borderRadius: 4,
      }}>
        {num}
      </span>
      <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, color: 'var(--white)', letterSpacing: -1 }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  );
}
