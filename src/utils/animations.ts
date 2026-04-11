export const fadeUp = {
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
};

export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1, duration: 0.5, ease: 'power2.out' }
};

export const staggerChildren = { stagger: 0.1 };

export const charReveal = {
  from: { opacity: 0, y: '100%' },
  to: { opacity: 1, y: '0%', duration: 0.6, ease: 'power3.out' }
};
