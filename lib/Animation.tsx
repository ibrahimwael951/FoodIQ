export const defaultViewport = {
  once: true,
  amount: 0.5,
};

export const visible = {
  y: 0,
  x: 0,
  scale: 1,
  opacity: 1,
};
export const FadeUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { ...visible },
  exit: { y: 60, opacity: 0 },
  viewport: defaultViewport,
};

export const FadeDownAnimation = {
  initial: { y: -60, opacity: 0 },
  animate: { ...visible, transition: { duration: 0.2 } },
  exit: { y: -60, opacity: 0 },
};
