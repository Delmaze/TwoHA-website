// Variation B — Playful Puzzle / Card-based
// More energy: floating puzzle pieces, gradient accents, card grid

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < breakpoint);
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isMobile;
}

function VariationB({ width = '100%' }) {
  const [lang, setLang] = React.useState('ko');
  const [copied, setCopied] = React.useState(false);
  const t = I18N[lang];
  const C = TWOHA_COLORS;
  const isMobile = useIsMobile();

  const copy = () => {
    navigator.clipboard?.writeText('siwkcalb@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div style={{
      width,
      fontFamily: "'Pretendard', 'Plus Jakarta Sans', -apple-system, sans-serif",
      color: C.ink,
      background: C.paper,
      lineHeight: 1.5,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* ───────── NAV ───────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.borderSoft}`
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: isMobile ? '14px 20px' : '18px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <TwoHAMark size={isMobile ? 28 : 34} />
            <span style={{ fontWeight: 800, fontSize: isMobile ? 16 : 19, letterSpacing: '-0.02em' }}>TwoHA</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 2 : 8 }}>
            {[
            { href: '#games', label: t.nav.games },
            { href: '#about', label: t.nav.about },
            { href: '#contact', label: t.nav.contact }].
            map((it) =>
            <a key={it.href} href={it.href} style={{
              color: C.ink, fontSize: isMobile ? 13 : 14, fontWeight: 600,
              textDecoration: 'none',
              padding: isMobile ? '6px 10px' : '8px 16px', borderRadius: 999,
              transition: 'background .15s'
            }} onMouseEnter={(e) => e.currentTarget.style.background = C.blueTint}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                {it.label}
              </a>
            )}
            <div style={{ marginLeft: isMobile ? 4 : 16 }}><LangToggle lang={lang} setLang={setLang} /></div>
          </nav>
        </div>
      </header>

      {/* ───────── HERO with floating puzzle pieces ───────── */}
      <section style={{
        position: 'relative',
        padding: isMobile ? '64px 20px 80px' : '100px 48px 120px',
        overflow: 'hidden',
        background: `
          linear-gradient(180deg, ${C.paper} 0%, ${C.blueTint}55 50%, ${C.greenTint}40 100%)
        `
      }}>
        {/* Floating puzzle pieces */}
        <FloatingPuzzle x="6%" y="20%" rotate={-12} color={C.blueSoft} size={140} delay={0} />
        <FloatingPuzzle x="84%" y="14%" rotate={18} color={C.greenSoft} size={170} delay={0.8} />
        <FloatingPuzzle x="92%" y="68%" rotate={-22} color={C.blueSoft} size={110} delay={1.6} />
        <FloatingPuzzle x="4%" y="74%" rotate={28} color={C.greenSoft} size={130} delay={2.4} />
        <Dot x="22%" y="10%" color={C.blue} />
        <Dot x="78%" y="86%" color={C.green} />
        <Dot x="14%" y="50%" color={C.green} size={5} />

        <div style={{
          maxWidth: 1100, margin: '0 auto',
          position: 'relative', textAlign: 'center'
        }}>
          <Reveal>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 16px', borderRadius: 999,
              background: '#fff', border: `1px solid ${C.border}`,
              fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
              color: C.blue, marginBottom: 40,
              boxShadow: '0 4px 12px rgba(45,79,124,0.06)'
            }}>
              🎮 {t.hero.tag.toUpperCase()}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 style={{
              fontSize: isMobile ? 72 : 120, fontWeight: 900, lineHeight: 0.95,
              letterSpacing: '-0.05em', margin: '0 0 8px',
              fontFamily: "'Plus Jakarta Sans', 'Pretendard', sans-serif"
            }}>
              <span style={{ color: C.blue }}>Two</span>
              <span style={{ color: C.green }}>HA</span>
              <span style={{ color: C.ink, opacity: 0.18 }}>,</span>
            </h1>
            <h1 style={{
              fontSize: isMobile ? 32 : 56, fontWeight: 600, lineHeight: 1.1,
              letterSpacing: '-0.025em', margin: 0,
              color: C.ink,
              fontFamily: "'Plus Jakarta Sans', 'Pretendard', sans-serif"
            }}>
              Making <span style={{
                background: `linear-gradient(135deg, ${C.blue}, ${C.green})`,
                WebkitBackgroundClip: 'text', backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900
              }}>HAHA</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p style={{
              fontSize: 19, color: C.inkMuted, maxWidth: 600, margin: '40px auto 48px',
              whiteSpace: 'pre-line', lineHeight: 1.65
            }}>
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <a href="#games" style={{
                padding: '16px 32px', borderRadius: 14,
                background: C.blue, color: '#fff',
                fontSize: 15, fontWeight: 700,
                textDecoration: 'none',
                boxShadow: `0 10px 28px ${C.blue}30`,
                transition: 'transform .2s, box-shadow .2s',
                display: 'inline-flex', alignItems: 'center', gap: 8
              }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-3px)';}}
              onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)';}}>
                {t.hero.ctaPrimary} →
              </a>
              <a href="#about" style={{
                padding: '16px 32px', borderRadius: 14,
                background: '#fff', color: C.ink,
                fontSize: 15, fontWeight: 700,
                textDecoration: 'none',
                border: `1px solid ${C.border}`,
                transition: 'background .2s'
              }} onMouseEnter={(e) => e.currentTarget.style.background = C.cream}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}>
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── GAMES ───────── */}
      <section id="games" style={{ padding: isMobile ? '72px 20px' : '120px 48px', background: C.paper }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: isMobile ? 36 : 56, gap: 32 }}>
            <div>
              <Reveal>
                <div style={{
                  fontSize: 12, fontWeight: 800, letterSpacing: '0.2em',
                  color: C.green, marginBottom: 14
                }}>{t.games.eyebrow}</div>
              </Reveal>
              <Reveal delay={80}>
                <h2 style={{
                  fontSize: isMobile ? 32 : 64, fontWeight: 800, lineHeight: 1.05,
                  letterSpacing: '-0.035em', margin: '0 0 12px',
                  fontFamily: "'Plus Jakarta Sans', 'Pretendard', sans-serif"
                }}>{t.games.title}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p style={{ fontSize: 17, color: C.inkMuted, margin: 0, maxWidth: 480 }}>
                  {t.games.subtitle}
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', color: C.inkMuted, fontSize: 13 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: C.green, animation: 'twohaPulse 1.6s ease-in-out infinite' }}></span>
                {t.games.inDev}
              </div>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20 }}>
            <Reveal delay={100}>
              <GameCardB
                accent={C.blue} accentDeep={C.blueDeep} accentTint={C.blueTint} accentSoft={C.blueSoft}
                game={t.games.diceline} status={t.games.status} icon="dice" number="01" />
              
            </Reveal>
            <Reveal delay={220}>
              <GameCardB
                accent={C.green} accentDeep={C.greenDeep} accentTint={C.greenTint} accentSoft={C.greenSoft}
                game={t.games.countset} status={t.games.status} icon="cards" number="02" />
              
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── ABOUT — split panels ───────── */}
      <section id="about" style={{ padding: isMobile ? '0 20px 72px' : '0 48px 120px', background: C.paper }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: `linear-gradient(135deg, ${C.blueTint} 0%, ${C.greenTint} 100%)`,
            borderRadius: isMobile ? 20 : 32, padding: isMobile ? '48px 28px' : '80px 64px', position: 'relative', overflow: 'hidden'
          }}>
            <FloatingPuzzle x="-3%" y="60%" rotate={20} color={C.blueSoft} size={180} delay={0} />
            <FloatingPuzzle x="86%" y="-10%" rotate={-15} color={C.greenSoft} size={200} delay={1} />

            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? 32 : 64, alignItems: 'start' }}>
              <div>
                <Reveal>
                  <div style={{
                    fontSize: 12, fontWeight: 800, letterSpacing: '0.2em',
                    color: C.blue, marginBottom: 16
                  }}>{t.about.eyebrow}</div>
                </Reveal>
                <Reveal delay={80}>
                  <h2 style={{
                    fontSize: isMobile ? 36 : 56, fontWeight: 800, lineHeight: 1.08,
                    letterSpacing: '-0.035em', margin: '0 0 24px',
                    whiteSpace: 'pre-line',
                    fontFamily: "'Plus Jakarta Sans', 'Pretendard', sans-serif"
                  }}>{t.about.title}</h2>
                </Reveal>
                <Reveal delay={140}>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: C.ink, opacity: 0.78, margin: 0, whiteSpace: 'pre-line' }}>
                    {t.about.body}
                  </p>
                </Reveal>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                {t.about.values.map((v, i) =>
                <Reveal key={i} delay={180 + i * 100}>
                    <div style={{
                    background: '#fff',
                    borderRadius: 20,
                    padding: '32px 28px',
                    boxShadow: '0 4px 20px rgba(45,79,124,0.04)',
                    border: `1px solid ${C.borderSoft}`,
                    transition: 'transform .2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                      <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: i % 2 === 0 ? C.blueTint : C.greenTint,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 16
                    }}>
                        <span style={{
                        fontSize: 13, fontWeight: 800,
                        color: i % 2 === 0 ? C.blue : C.green,
                        fontFamily: 'ui-monospace, monospace'
                      }}>0{i + 1}</span>
                      </div>
                      <h3 style={{ fontSize: 19, fontWeight: 700, margin: '0 0 8px' }}>{v.t}</h3>
                      <p style={{ fontSize: 14, color: C.inkMuted, margin: 0, lineHeight: 1.55 }}>{v.d}</p>
                    </div>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="contact" style={{
        padding: isMobile ? '0 20px 72px' : '0 48px 120px'
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: C.ink,
            borderRadius: isMobile ? 20 : 32, padding: isMobile ? '48px 28px' : '80px 64px',
            position: 'relative', overflow: 'hidden',
            color: '#fff'
          }}>
            <FloatingPuzzle x="80%" y="-20%" rotate={20} color="rgba(111,179,66,0.18)" size={260} delay={0} />
            <FloatingPuzzle x="-8%" y="40%" rotate={-30} color="rgba(45,79,124,0.35)" size={220} delay={0.6} />

            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr', gap: isMobile ? 32 : 48, alignItems: 'center' }}>
              <div>
                <Reveal>
                  <div style={{
                    fontSize: 12, fontWeight: 800, letterSpacing: '0.2em',
                    color: C.greenSoft, marginBottom: 16
                  }}>{t.contact.eyebrow}</div>
                </Reveal>
                <Reveal delay={80}>
                  <h2 style={{
                    fontSize: isMobile ? 40 : 64, fontWeight: 800, lineHeight: 1.05,
                    letterSpacing: '-0.035em', margin: '0 0 16px',
                    fontFamily: "'Plus Jakarta Sans', 'Pretendard', sans-serif"
                  }}>{t.contact.title}</h2>
                </Reveal>
                <Reveal delay={140}>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: 460, whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                    {t.contact.subtitle}
                  </p>
                </Reveal>
              </div>
              <Reveal delay={200}>
                <div style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 20, padding: '24px'
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: '0.2em',
                    color: C.greenSoft, marginBottom: 8
                  }}>{t.contact.emailLabel}</div>
                  <div style={{
                    fontSize: 24, fontWeight: 700, color: '#fff',
                    marginBottom: 20, fontFamily: "'Plus Jakarta Sans', monospace",
                    letterSpacing: '-0.01em'
                  }}>
                    siwkcalb@gmail.com
                  </div>
                  <button onClick={copy} style={{
                    width: '100%',
                    padding: '14px', borderRadius: 12,
                    background: copied ? C.green : '#fff',
                    color: copied ? '#fff' : C.ink,
                    fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer',
                    transition: 'all .2s', fontFamily: 'inherit'
                  }}>
                    {copied ? `✓ ${t.contact.copied}` : t.contact.copy}
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer style={{
        padding: isMobile ? '24px 20px' : '32px 48px',
        background: C.paper,
        borderTop: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 8 : 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <TwoHAMark size={24} />
          <span style={{ fontSize: 13, color: C.inkMuted, fontWeight: 600 }}>{t.footer.tagline}</span>
        </div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>{t.footer.copyright}</div>
      </footer>

      <style>{`
        @keyframes twohaPulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }
        @keyframes twohaFloat { 0%,100% { transform: translate(0,0) rotate(var(--r,0deg)) } 50% { transform: translate(0,-14px) rotate(var(--r,0deg)) } }
      `}</style>
    </div>);

}

function FloatingPuzzle({ x, y, rotate = 0, color, size = 120, delay = 0 }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: size, height: size,
      transform: `rotate(${rotate}deg)`,
      animation: `twohaFloat ${6 + delay}s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
      ['--r']: `${rotate}deg`
    }}>
      <svg viewBox="0 0 120 120" width="100%" height="100%">
        <path
          d="M 10 10 L 50 10 Q 58 10 58 18 Q 58 26 65 26 Q 72 26 72 18 Q 72 10 80 10 L 110 10 L 110 50 Q 110 58 102 58 Q 95 58 95 65 Q 95 72 102 72 Q 110 72 110 80 L 110 110 L 80 110 Q 72 110 72 102 Q 72 95 65 95 Q 58 95 58 102 Q 58 110 50 110 L 10 110 L 10 80 Q 10 72 18 72 Q 26 72 26 65 Q 26 58 18 58 Q 10 58 10 50 Z"
          fill={color}
          opacity="0.55" />
        
      </svg>
    </div>);

}

function Dot({ x, y, color, size = 8 }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y,
      width: size, height: size, borderRadius: '50%',
      background: color, opacity: 0.5
    }} />);

}

function GameCardB({ accent, accentDeep, accentTint, accentSoft, game, status, icon, number }) {
  const C = TWOHA_COLORS;
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: accentTint,
        borderRadius: 28,
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform .3s, box-shadow .3s',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hover ? `0 24px 60px ${accent}25` : `0 2px 8px ${accent}10`,
        border: `1px solid ${accent}20`
      }}>
      
      <div style={{
        position: 'absolute', top: 24, right: 28,
        fontSize: 56, fontWeight: 900, color: accent, opacity: 0.16,
        fontFamily: 'ui-monospace, monospace', letterSpacing: '-0.02em',
        lineHeight: 1
      }}>{number}</div>

      <div style={{
        height: 260, position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '100%'
      }}>
        <FloatingPuzzle x="-8%" y="60%" rotate={20} color={accentSoft} size={120} delay={0} />
        <FloatingPuzzle x="78%" y="-10%" rotate={-15} color={accentSoft} size={100} delay={0.5} />
        <GameVisualB icon={icon} accent={accent} accentDeep={accentDeep} />
      </div>

      <div style={{ padding: '32px 36px 36px', background: '#fff' }}>
        <div style={{
          display: 'inline-block',
          padding: '5px 10px', borderRadius: 6,
          background: accent, color: '#fff',
          fontSize: 10, fontWeight: 800, letterSpacing: '0.16em',
          marginBottom: 16
        }}>{status}</div>
        <h3 style={{
          fontSize: 36, fontWeight: 800, margin: '0 0 6px', color: accent,
          fontFamily: "'Plus Jakarta Sans', 'Pretendard', sans-serif",
          letterSpacing: '-0.025em'
        }}>{game.name}</h3>
        <div style={{ fontSize: 14, color: C.inkMuted, fontWeight: 600, marginBottom: 16 }}>{game.tag}</div>
        <p style={{ fontSize: 15, color: C.inkMuted, lineHeight: 1.6, margin: '0 0 24px', fontFamily: "Pretendard", whiteSpace: 'pre-line' }}>
          {game.desc}
        </p>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 6,
          paddingTop: 20, borderTop: `1px solid ${C.borderSoft}`
        }}>
          {game.meta.map((m, i) =>
          <span key={i} style={{
            fontSize: 12, fontWeight: 600,
            padding: '4px 10px', borderRadius: 6,
            background: accentTint, color: accentDeep
          }}>{m}</span>
          )}
        </div>
      </div>
    </div>);

}

// Pastel die palette — soft colors that read well on light pastel backgrounds.
const DICE_PALETTE = {
  blue:   { face: '#8ab8ff', edge: '#6a91e0', shine: '#cee0ff' },
  green:  { face: '#8ee5a8', edge: '#62c084', shine: '#c8f4d4' },
  coral:  { face: '#ff9aa8', edge: '#e0727f', shine: '#ffd0d6' },
  yellow: { face: '#ffd66e', edge: '#e0b34c', shine: '#fff0c4' },
  lilac:  { face: '#c8a8ff', edge: '#a081e0', shine: '#e6d6ff' },
};
const PIP_COORDS = {
  TL: [0.25, 0.25], TC: [0.5, 0.25], TR: [0.75, 0.25],
  ML: [0.25, 0.5],  MC: [0.5, 0.5],  MR: [0.75, 0.5],
  BL: [0.25, 0.75], BC: [0.5, 0.75], BR: [0.75, 0.75],
};
const PIP_PRESETS = {
  1: ['MC'],
  2: ['TL', 'BR'],
  3: ['TL', 'MC', 'BR'],
  4: ['TL', 'TR', 'BL', 'BR'],
  5: ['TL', 'TR', 'MC', 'BL', 'BR'],
  6: ['TL', 'TR', 'ML', 'MR', 'BL', 'BR'],
};

function PastelDie({ value, color, size = 60, rotate = 0, offsetY = 0 }) {
  const c = DICE_PALETTE[color] || DICE_PALETTE.blue;
  const radius = Math.round(size * 0.24);
  const pipSize = Math.max(5, Math.round(size * 0.14));
  const positions = PIP_PRESETS[value] || [];
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: `radial-gradient(120% 90% at 30% 22%, ${c.shine} 0%, ${c.face} 38%, ${c.face} 70%, ${c.edge} 130%)`,
      boxShadow: [
        `0 ${Math.round(size * 0.10)}px ${Math.round(size * 0.20)}px rgba(45,79,124,0.18)`,
        `0 ${Math.round(size * 0.04)}px 0 ${c.edge}`,
        `inset 0 ${Math.max(1, size * 0.05)}px 0 rgba(255,255,255,0.45)`,
        `inset 0 -${Math.max(1, size * 0.06)}px 0 ${c.edge}`,
      ].join(', '),
      position: 'relative',
      transform: `rotate(${rotate}deg) translateY(${offsetY}px)`,
    }}>
      {positions.map((pos, i) => {
        const [x, y] = PIP_COORDS[pos];
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${x * 100}%`, top: `${y * 100}%`,
            width: pipSize, height: pipSize,
            marginLeft: -pipSize / 2, marginTop: -pipSize / 2,
            borderRadius: '50%',
            background: '#fff',
            boxShadow: `inset 0 ${Math.max(1, pipSize * 0.18)}px 0 rgba(255,255,255,0.7), 0 ${Math.max(1, pipSize * 0.12)}px 0 rgba(0,0,0,0.18)`,
          }} />
        );
      })}
    </div>
  );
}

function GameVisualB({ icon, accent, accentDeep }) {
  if (icon === 'dice') {
    // DiceLine — chained pastel dice on the existing light blue tint.
    const dice = [
      { v: 1, c: 'blue',   r: -10, y: 6 },
      { v: 2, c: 'green',  r: 4,   y: -8 },
      { v: 3, c: 'coral',  r: -4,  y: 2 },
      { v: 5, c: 'yellow', r: 8,   y: -4 },
      { v: 6, c: 'lilac',  r: -6,  y: 8 },
    ];
    return (
      <div style={{ position: 'relative', zIndex: 1, padding: '8px 12px', maxWidth: '100%', overflow: 'hidden' }}>
        {/* connecting line behind the dice */}
        <svg viewBox="0 0 400 120" width="400" height="120" style={{
          position: 'absolute', left: 0, top: '50%',
          transform: 'translateY(-50%)', zIndex: 0, pointerEvents: 'none',
        }}>
          <path d="M 30 70 Q 100 30, 175 60 T 370 60" stroke={accentDeep}
                strokeWidth="2" strokeDasharray="3 6" fill="none" opacity="0.45" />
        </svg>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10, zIndex: 1 }}>
          {dice.map((d, i) => (
            <PastelDie key={i} value={d.v} color={d.c} size={62} rotate={d.r} offsetY={d.y} />
          ))}
        </div>
      </div>
    );
  }
  // CountSet — SET cards on the existing light green tint (no dark backdrop)
  return (
    <div style={{
      position: 'relative', zIndex: 1,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 14, padding: '8px 12px',
    }}>
      <SetCard color={TWOHA_COLORS.blue}      kind="star" count={1} fill="outline" rotate={-6} />
      <SetCard color={TWOHA_COLORS.greenDeep} kind="sun"  count={2} fill="solid"   rotate={2}  elevated />
      <SetCard color="#E67E5C"                kind="moon" count={3} fill="striped" rotate={6} />
    </div>
  );
}

function SetCard({ color, kind, count, fill, rotate = 0, elevated = false }) {
  return (
    <div style={{
      width: 78, height: 116,
      background: '#fff',
      border: `1.5px solid ${color}30`,
      borderRadius: 14,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 4,
      transform: `rotate(${rotate}deg) translateY(${elevated ? -12 : 0}px)`,
      boxShadow: `0 12px 28px rgba(45,79,124,0.16), 0 2px 4px ${color}18`,
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <SetGlyph key={i} kind={kind} color={color} fill={fill} size={30} />
      ))}
    </div>
  );
}

function SetGlyph({ kind, color, fill, size = 28 }) {
  const uid = React.useId().replace(/:/g, '');
  const stripeId = `s-${uid}`;
  const sw = 2.2;
  const fillVal = fill === 'solid' ? color : fill === 'striped' ? `url(#${stripeId})` : 'none';

  let shape = null;
  if (kind === 'sun') {
    const rays = [];
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      const x1 = 16 + Math.cos(a) * 10.2;
      const y1 = 16 + Math.sin(a) * 10.2;
      const x2 = 16 + Math.cos(a) * 13.6;
      const y2 = 16 + Math.sin(a) * 13.6;
      rays.push(<line key={i} x1={x1.toFixed(2)} y1={y1.toFixed(2)} x2={x2.toFixed(2)} y2={y2.toFixed(2)}
        stroke={color} strokeWidth="2.4" strokeLinecap="round" />);
    }
    shape = (
      <g>
        <circle cx="16" cy="16" r="7.5" fill={fillVal} stroke={color} strokeWidth={sw} />
        {rays}
      </g>
    );
  } else if (kind === 'moon') {
    shape = (
      <path d="M 23.5 3 C 5 3 5 29 23.5 29 C 15.5 23 15.5 9 23.5 3 Z"
        fill={fillVal} stroke={color} strokeWidth={sw}
        strokeLinejoin="round" strokeLinecap="round" />
    );
  } else if (kind === 'star') {
    const pts = [];
    const cx = 16, cy = 16.5, ro = 12.5, ri = 6.2;
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? ro : ri;
      const a = (i * Math.PI) / 5 - Math.PI / 2;
      pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
    }
    shape = <polygon points={pts.join(' ')} fill={fillVal} stroke={color} strokeWidth={sw} strokeLinejoin="round" />;
  }

  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ display: 'block', overflow: 'visible' }}>
      {fill === 'striped' && (
        <defs>
          <pattern id={stripeId} patternUnits="userSpaceOnUse" width="3.6" height="3.6" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="3.6" stroke={color} strokeWidth="1.6" />
          </pattern>
        </defs>
      )}
      {shape}
    </svg>
  );
}

function DiceFace({ n, color }) {
  const map = {
    1: [[30, 30]],
    2: [[18, 18], [42, 42]],
    3: [[18, 18], [30, 30], [42, 42]],
    4: [[18, 18], [42, 18], [18, 42], [42, 42]],
    5: [[18, 18], [42, 18], [30, 30], [18, 42], [42, 42]],
    6: [[18, 16], [42, 16], [18, 30], [42, 30], [18, 44], [42, 44]]
  };
  return (
    <>
      {(map[n] || []).map(([x, y], i) =>
      <circle key={i} cx={x} cy={y} r="5" fill={color} />
      )}
    </>);

}

window.VariationB = VariationB;