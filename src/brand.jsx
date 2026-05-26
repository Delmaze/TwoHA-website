// Shared brand assets and tokens for TwoHA site

const TWOHA_COLORS = {
  blue: '#2D4F7C',
  blueDeep: '#1E3A5F',
  blueTint: '#E8EEF7',
  blueSoft: '#C5D4E8',
  green: '#6FB342',
  greenDeep: '#558A2E',
  greenTint: '#EEF5E4',
  greenSoft: '#CFE3B5',
  cream: '#FAFAF7',
  paper: '#FFFFFF',
  ink: '#1A2540',
  inkMuted: '#5A6478',
  inkSoft: '#8A93A6',
  border: 'rgba(45, 79, 124, 0.10)',
  borderSoft: 'rgba(45, 79, 124, 0.06)',
};

// SVG logo mark — two stylized figures forming an H
function TwoHAMark({ size = 64, blue = TWOHA_COLORS.blue, green = TWOHA_COLORS.green, style }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={style} aria-label="TwoHA">
      {/* Left figure (blue) */}
      <circle cx="58" cy="45" r="22" fill={blue} />
      <path d="M 38 78 L 78 78 L 78 165 Q 78 172 71 172 L 45 172 Q 38 172 38 165 Z" fill={blue} />
      {/* Right figure (green) */}
      <circle cx="142" cy="45" r="22" fill={green} />
      <path d="M 122 78 L 162 78 L 162 165 Q 162 172 155 172 L 129 172 Q 122 172 122 165 Z" fill={green} />
      {/* Handshake bar */}
      <rect x="62" y="108" width="76" height="26" rx="3" fill={blue} />
      <rect x="100" y="108" width="38" height="26" rx="3" fill={green} />
    </svg>
  );
}

// Wordmark — "TwOHA" stylized using the actual letter forms from the logo
function TwoHAWordmark({ height = 36, blue = TWOHA_COLORS.blue, green = TWOHA_COLORS.green, style }) {
  // Approximation of the logo's split TwOHA wordmark
  return (
    <svg viewBox="0 0 360 88" height={height} style={style} aria-label="TwoHA">
      {/* T */}
      <path d="M 4 8 L 70 8 L 70 22 L 44 22 L 44 80 L 30 80 L 30 22 L 4 22 Z" fill={blue} />
      {/* w */}
      <path d="M 70 30 L 84 30 L 92 64 L 100 30 L 112 30 L 120 64 L 128 30 L 142 30 L 126 80 L 114 80 L 106 50 L 98 80 L 86 80 Z" fill={blue} />
      {/* O */}
      <circle cx="170" cy="55" r="22" fill="none" stroke={blue} strokeWidth="12" />
      {/* H - split blue/green */}
      <rect x="204" y="8" width="12" height="72" fill={blue} />
      <rect x="216" y="40" width="28" height="12" fill={blue} />
      <rect x="244" y="40" width="28" height="12" fill={green} />
      <rect x="272" y="8" width="12" height="72" fill={green} />
      {/* A */}
      <path d="M 296 80 L 320 8 L 332 8 L 356 80 L 342 80 L 337 64 L 315 64 L 310 80 Z M 319 52 L 333 52 L 326 28 Z" fill={green} />
    </svg>
  );
}

// Subtle puzzle-piece background pattern
function PuzzleBackdrop({ opacity = 0.05, scale = 1 }) {
  return (
    <svg
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', opacity,
      }}
      viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="puzzlePattern" x="0" y="0" width={160 * scale} height={160 * scale} patternUnits="userSpaceOnUse">
          <path
            d="M 20 20 L 60 20 Q 70 20 70 30 Q 70 40 80 40 Q 90 40 90 30 Q 90 20 100 20 L 140 20 L 140 60 Q 140 70 130 70 Q 120 70 120 80 Q 120 90 130 90 Q 140 90 140 100 L 140 140 L 100 140 Q 90 140 90 130 Q 90 120 80 120 Q 70 120 70 130 Q 70 140 60 140 L 20 140 L 20 100 Q 20 90 30 90 Q 40 90 40 80 Q 40 70 30 70 Q 20 70 20 60 Z"
            fill="none" stroke={TWOHA_COLORS.blue} strokeWidth="1.2"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#puzzlePattern)" />
    </svg>
  );
}

// i18n helper
const I18N = {
  ko: {
    nav: { games: '게임', about: '소개', contact: '문의' },
    hero: {
      tag: '1인 개발 스튜디오',
      title: 'Two HA,',
      title2: 'Making HAHA',
      subtitle: '시간 가는 줄 모르고 재미있게 즐길 수 있는 게임을 만듭니다.\n작지만 다시 손이 가는 게임으로 일상에 한 조각의 즐거움을 더합니다.',
      ctaPrimary: '게임 둘러보기',
      ctaSecondary: '스튜디오 소개',
    },
    games: {
      eyebrow: 'OUR GAMES',
      title: '진행 중인 프로젝트',
      subtitle: '현재 다양한 게임을 개발하고 있습니다.',
      status: 'COMING SOON',
      inDev: '2개 개발 중',
      diceline: {
        name: 'DiceLine',
        tag: '주사위 라인 퍼즐',
        desc: '주사위를 놓아 하나의 라인을 완성하세요.\n하나의 주사위 옆에는 주사위 눈이 같거나 1차이 나는 주사위만 놓을 수 있습니다.\n다양한 족보를 달성하여 더 높은 점수를 획득하세요.',
        meta: ['캐주얼 · 퍼즐', '모바일', '1인 플레이'],
      },
      countset: {
        name: 'CountSet',
        tag: 'SET 찾기 게임',
        desc: '보드게임 SET 를 모바일에서 즐겨보세요.\n모두 같거나 모두 다른 조건을 찾아야 합니다.\n모든 SET 을 찾았다고 확신하시나요? 그러면 다음 단계로 넘어가시죠.',
        meta: ['캐주얼 · 카드', '모바일', '1인 플레이'],
      },
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'TwoHA는\nHAHA를 만듭니다.',
      body: 'TwoHA는 25년 게임 개발 경력과\nAI를 활용하여 게임을 제작하는 개인 개발자입니다.\n시간 가는 줄 모르고 빠져들 수 있는 게임을 만들기 위해 노력합니다.\n짧고 가볍게 시작하지만 깊이가 살아 있는 그러한 게임을 디자인합니다.',
      values: [
        { t: '단순하게, 깊이', d: '쉬운 규칙으로 시작해 오래 즐길 수 있는 깊이 있는 플레이를 추구합니다.' },
        { t: '웃음이 우선', d: '재미가 없으면 만들지 않습니다. HAHA가 기준입니다.' },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: '문의하기',
      subtitle: '어떤 문의도 환영합니다.\n편하게 이메일로 연락 주세요.',
      emailLabel: 'EMAIL',
      copy: '복사',
      copied: '복사됨',
    },
    footer: {
      tagline: 'Two HA, Making HAHA',
      copyright: '© 2026 TwoHA Studio. All rights reserved.',
    },
  },
  en: {
    nav: { games: 'Games', about: 'About', contact: 'Contact' },
    hero: {
      tag: 'Solo Developer Studio',
      title: 'Two HA,',
      title2: 'Making HAHA',
      subtitle: 'Crafting games you can lose hours in.\nSmall, replayable games that add a little joy to every day.',
      ctaPrimary: 'See the games',
      ctaSecondary: 'About the studio',
    },
    games: {
      eyebrow: 'OUR GAMES',
      title: 'In development',
      subtitle: 'Several games are currently in the workshop.',
      status: 'COMING SOON',
      inDev: '2 in development',
      diceline: {
        name: 'DiceLine',
        tag: 'Dice-line puzzle',
        desc: 'Place dice to complete a line.\nA die may sit next to another only if the values match or differ by one.\nLand combinations to score higher.',
        meta: ['Casual · Puzzle', 'Mobile', 'Single player'],
      },
      countset: {
        name: 'CountSet',
        tag: 'Find-the-SET game',
        desc: 'The classic SET board game, on mobile.\nFind cards where every property is either all the same or all different.\nSure you found every SET? Then on to the next round.',
        meta: ['Casual · Card', 'Mobile', 'Single player'],
      },
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'TwoHA\nmakes HAHA.',
      body: 'TwoHA is a solo developer with 25 years of game development experience,\nbuilding games with the help of AI.\nThe goal is simple: games you can lose hours in without noticing.\nShort and light to pick up, with depth that keeps unfolding.',
      values: [
        { t: 'Simple, deep', d: 'Easy rules to start. Play that holds up across hundreds of sessions.' },
        { t: 'Laugh first', d: "If it isn't fun, it doesn't ship. HAHA is the bar." },
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Get in touch',
      subtitle: 'Any inquiry is welcome.\nFeel free to drop an email.',
      emailLabel: 'EMAIL',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      tagline: 'Two HA, Making HAHA',
      copyright: '© 2026 TwoHA Studio. All rights reserved.',
    },
  },
};

// Reveal-on-scroll hook
function useReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, root: null });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, y = 24, as: As = 'div', style, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <As
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity .7s cubic-bezier(.2,.7,.3,1) ${delay}ms, transform .7s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}

// Language toggle pill
function LangToggle({ lang, setLang, theme = 'light' }) {
  const isDark = theme === 'dark';
  const styles = {
    wrap: {
      display: 'inline-flex',
      background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(45,79,124,0.06)',
      borderRadius: 999,
      padding: 3,
      gap: 2,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.04em',
    },
    btn: (active) => ({
      padding: '6px 12px',
      borderRadius: 999,
      border: 'none',
      cursor: 'pointer',
      background: active ? (isDark ? '#fff' : TWOHA_COLORS.blue) : 'transparent',
      color: active ? (isDark ? TWOHA_COLORS.blue : '#fff') : (isDark ? 'rgba(255,255,255,0.7)' : TWOHA_COLORS.inkMuted),
      transition: 'all .2s ease',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.04em',
    }),
  };
  return (
    <div style={styles.wrap}>
      <button style={styles.btn(lang === 'ko')} onClick={() => setLang('ko')}>KO</button>
      <button style={styles.btn(lang === 'en')} onClick={() => setLang('en')}>EN</button>
    </div>
  );
}

// 반응형 breakpoint 훅
function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

Object.assign(window, { TWOHA_COLORS, TwoHAMark, TwoHAWordmark, PuzzleBackdrop, I18N, useReveal, Reveal, LangToggle, useWindowWidth });
