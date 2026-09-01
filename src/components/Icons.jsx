// Inline SVG icons — no icon package needed.
// Every icon inherits `currentColor` so cards can recolour them on hover.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const wrap = (size, children) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
    {children}
  </svg>
)

export const icons = {
  code: (s = 34) => wrap(s, <><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /></>),
  layout: (s = 34) =>
    wrap(s, <><rect x="2.5" y="3.5" width="19" height="17" rx="2" /><path d="M2.5 9h19M9 21V9" /></>),
  server: (s = 34) =>
    wrap(
      s,
      <>
        <rect x="2.5" y="3" width="19" height="7" rx="2" />
        <rect x="2.5" y="14" width="19" height="7" rx="2" />
        <path d="M6.5 6.5h.01M6.5 17.5h.01" />
      </>
    ),
  database: (s = 34) =>
    wrap(
      s,
      <>
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
  tools: (s = 34) =>
    wrap(
      s,
      <>
        <path d="M14.5 6.5a3.5 3.5 0 0 0 4.6 4.5l-8 8a2.1 2.1 0 0 1-3-3l8-8a3.5 3.5 0 0 0-1.6-1.5Z" />
        <path d="M6 6l3 3" />
      </>
    ),
  compass: (s = 34) =>
    wrap(s, <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>),
  briefcase: (s = 22) =>
    wrap(
      s,
      <>
        <rect x="2.5" y="7" width="19" height="13" rx="2" />
        <path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7" />
      </>
    ),
  cap: (s = 22) =>
    wrap(s, <><path d="m12 4 10 5-10 5L2 9l10-5Z" /><path d="M6 11v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" /></>),
  trophy: (s = 26) =>
    wrap(
      s,
      <>
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M7 5.5H4.5A2.5 2.5 0 0 0 7 9M17 5.5h2.5A2.5 2.5 0 0 1 17 9" />
        <path d="M10 14v3M14 14v3M8.5 20h7" />
      </>
    ),
  badge: (s = 26) =>
    wrap(s, <><circle cx="12" cy="9.5" r="5.5" /><path d="m8.5 14.5-1 6 4.5-2.4 4.5 2.4-1-6" /></>),
  file: (s = 22) =>
    wrap(
      s,
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5" />
      </>
    ),
  download: (s = 20) => wrap(s, <><path d="M12 3v12" /><path d="m7 11 5 5 5-5" /><path d="M4 20h16" />
    </>),
  arrow: (s = 18) => wrap(s, <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>),
  play: (s = 16) => wrap(s, <path d="M6 4.5 18 12 6 19.5V4.5Z" fill="currentColor" />),
  mail: (s = 20) =>
    wrap(s, <><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6 9 7 9-7" /></>),
  pin: (s = 20) =>
    wrap(s, <><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></>),
  check: (s = 18) => wrap(s, <path d="m4 12.5 5 5 11-11" />),
  menu: (s = 24) => wrap(s, <><path d="M4 7h16M4 12h16M4 17h16" /></>),
  close: (s = 24) => wrap(s, <><path d="m6 6 12 12M18 6 6 18" /></>),
  github: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.2 1.18a11 11 0 0 1 5.82 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.35.79 1.05.79 2.13v3.16c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  ),
  linkedin: (s = 20) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.2 8.65 22 10.9 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.38 1.6-2.38 3.27V21h-4V9Z" />
    </svg>
  ),
}

export default function Icon({ name, size }) {
  const draw = icons[name]
  return draw ? draw(size) : null
}
