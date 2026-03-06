import { j as e } from './jsx-runtime.D_zvdyIk.js';
import { r as s, R as a } from './index.DYrVU9rO.js';
function d({ children: i }) {
  const o = s.useRef(null),
    t = (r) => {
      if (o.current) {
        const { current: l } = o,
          n = 350;
        r === 'left'
          ? l.scrollBy({ left: -n, behavior: 'smooth' })
          : l.scrollBy({ left: n, behavior: 'smooth' });
      }
    };
  return e.jsxs('div', {
    className: 'carousel-container',
    style: { position: 'relative', width: '100%' },
    children: [
      e.jsx('button', {
        onClick: () => t('left'),
        style: {
          position: 'absolute',
          left: '-3rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          color: 'inherit',
          fontSize: '2rem',
          padding: '1rem',
          height: 'auto',
          lineHeight: '1',
          minWidth: 'auto',
        },
        'aria-label': 'Scroll Left',
        children: e.jsx('i', { className: 'fa fa-chevron-left' }),
      }),
      e.jsx('div', {
        ref: o,
        style: {
          display: 'flex',
          overflowX: 'auto',
          gap: '2rem',
          padding: '1rem 0',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        },
        children: a.Children.map(i, (r) =>
          e.jsx('div', {
            style: { scrollSnapAlign: 'start', flexShrink: 0 },
            children: r,
          })
        ),
      }),
      e.jsx('style', {
        children: `
        .carousel-container div::-webkit-scrollbar {
          display: none;
        }
      `,
      }),
      e.jsx('button', {
        onClick: () => t('right'),
        style: {
          position: 'absolute',
          right: '-3rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          color: 'inherit',
          fontSize: '2rem',
          padding: '1rem',
          height: 'auto',
          lineHeight: '1',
          minWidth: 'auto',
        },
        'aria-label': 'Scroll Right',
        children: e.jsx('i', { className: 'fa fa-chevron-right' }),
      }),
    ],
  });
}
export { d as default };
