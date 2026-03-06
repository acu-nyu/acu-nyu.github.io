import { j as r } from './jsx-runtime.D_zvdyIk.js';
import './index.DYrVU9rO.js';
import { m as s } from './proxy.BoX_-2ZM.js';
function d({
  children: i,
  variants: t,
  delay: e = 0,
  className: a,
  staggerChildren: o = 0,
}) {
  const n = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: e,
        staggerChildren: o,
      },
    },
  };
  return r.jsx(s.div, {
    className: a,
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: !0, margin: '-50px' },
    variants: t || n,
    children: i,
  });
}
export { d as default };
