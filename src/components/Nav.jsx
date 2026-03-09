import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',  href: '#contact' },
];

export default function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const initials = name.split(' ').map(w => w[0]).join('');

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: 66,
      background: scrolled ? 'rgba(0,4,40,0.95)' : 'rgba(0,4,40,0.85)',
      borderBottom: '1px solid rgba(255,255,255,0.12)',
      backdropFilter: 'blur(16px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 52px',
      transition: 'background 0.3s',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 16, color: 'var(--cyan)', letterSpacing: 2 }}>
        &lt;<span style={{ color: 'var(--orange)' }}>{initials}</span> /&gt;
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }} className="nav-desktop">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: 14, fontWeight: 500, color: 'var(--muted)',
                textDecoration: 'none', letterSpacing: 0.3,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'none', flexDirection: 'column', gap: 5,
          padding: 4,
        }}
        className="nav-hamburger"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--cyan)', borderRadius: 2 }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 66, left: 0, right: 0,
          background: 'rgba(0,4,40,0.98)',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          padding: '20px 32px',
          display: 'flex', flexDirection: 'column', gap: 16,
          zIndex: 199,
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--off-white)', textDecoration: 'none', fontSize: 16, fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </nav>
  );
}
