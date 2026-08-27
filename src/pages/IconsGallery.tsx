import React, { useEffect, useState } from 'react';

type ProductIcon = {
  id: string;
  name: string;
  color: string;
  accent: string;
  blurb: string;
};

const ICONS: ProductIcon[] = [
  {
    id: 'phi',
    name: 'Phi Core',
    color: '#6366f1',
    accent: '#06b6d4',
    blurb: 'Base mark: left stem through the horizontal U bowl with a cyan core dot.',
  },
  {
    id: 'puijs',
    name: 'PUI.js',
    color: '#0ea5e9',
    accent: '#6366f1',
    blurb: 'Component library: chevron accent inside the bowl signals code and composition.',
  },
  {
    id: 'phidoc',
    name: 'PhiDoc',
    color: '#14b8a6',
    accent: '#0f766e',
    blurb: 'Documentation engine: two text lines sit inside the bowl like a page.',
  },
  {
    id: 'phixum',
    name: 'Phixum',
    color: '#0284c7',
    accent: '#0f172a',
    blurb: 'Options engine: an x-mark accent for strikes, crosses, and payoff math.',
  },
  {
    id: 'phiano',
    name: 'Phiano',
    color: '#8b5cf6',
    accent: '#ec4899',
    blurb: 'Phase instrument: a sine wave oscillates through the bowl.',
  },
  {
    id: 'phient',
    name: 'Phient',
    color: '#d946ef',
    accent: '#8b5cf6',
    blurb: 'Agentic ecosystem: three connected nodes form a minimal agent mesh.',
  },
];

const STORAGE_KEY = 'phidoc.icon-comments';

function loadComments(): Record<string, string> {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function IconsGallery() {
  const [comments, setComments] = useState<Record<string, string>>(() =>
    typeof window === 'undefined' ? {} : loadComments()
  );
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const copyPath = (id: string) => {
    const path = `/icons/${id}.svg`;
    navigator.clipboard?.writeText(path).then(() => {
      setCopied(id);
      setTimeout(() => setCopied((current) => (current === id ? null : current)), 1200);
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0b1020', color: '#e5e7eb', fontFamily: 'Inter, system-ui, sans-serif', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <header style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>Product Icon System</h1>
          <p style={{ color: '#9ca3af', marginTop: 8, maxWidth: 640 }}>
            One shared glyph — a left stem through a horizontal U bowl (the phi mark) — with a product-specific accent.
            Review each mark and leave a comment; notes are stored locally in your browser.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {ICONS.map((icon) => (
            <section
              key={icon.id}
              style={{ background: '#111832', border: '1px solid #1f2a4d', borderRadius: 12, padding: 20 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <img src={`/icons/${icon.id}.svg`} alt={`${icon.name} icon`} width={64} height={64} />
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                  <img src={`/icons/${icon.id}.svg`} alt="" width={32} height={32} />
                  <img src={`/icons/${icon.id}.svg`} alt="" width={16} height={16} />
                </div>
              </div>

              <h2 style={{ fontSize: 18, fontWeight: 600, margin: '16px 0 4px', color: icon.color }}>{icon.name}</h2>
              <p style={{ fontSize: 14, color: '#9ca3af', margin: '0 0 12px', lineHeight: 1.5 }}>{icon.blurb}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#6b7280', marginBottom: 12 }}>
                <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 3, background: icon.color }} />
                <code>{icon.color}</code>
                <span style={{ display: 'inline-block', width: 12, height: 12, borderRadius: 3, background: icon.accent }} />
                <code>{icon.accent}</code>
                <button
                  onClick={() => copyPath(icon.id)}
                  style={{ marginLeft: 'auto', background: 'none', border: '1px solid #1f2a4d', color: '#9ca3af', borderRadius: 6, padding: '4px 10px', cursor: 'pointer', fontSize: 12 }}
                >
                  {copied === icon.id ? 'Copied' : 'Copy path'}
                </button>
              </div>

              <textarea
                value={comments[icon.id] || ''}
                onChange={(event) => setComments((current) => ({ ...current, [icon.id]: event.target.value }))}
                placeholder={`Comment on the ${icon.name} mark...`}
                rows={2}
                style={{ width: '100%', boxSizing: 'border-box', background: '#0b1020', border: '1px solid #1f2a4d', borderRadius: 8, color: '#e5e7eb', padding: '8px 10px', fontSize: 13, resize: 'vertical' }}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
