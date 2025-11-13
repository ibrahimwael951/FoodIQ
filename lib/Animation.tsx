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
export const Fade = {
  initial: { opacity: 0 },
  whileInView: { ...visible },
  exit: { opacity: 0 },
  viewport: defaultViewport,
};
export const FadeEveryTime = {
  initial: { opacity: 0 },
  whileInView: { ...visible },
  exit: { opacity: 0 },
};

export const FadeDownAnimation = {
  initial: { y: -60, opacity: 0 },
  animate: { ...visible, transition: { duration: 0.2 } },
  exit: { y: -60, opacity: 0 },
  transition: { duration: 0.2 },
};
export const FadeLeftAnimation = {
  initial: { x: -60, opacity: 0 },
  animate: { ...visible, transition: { duration: 0.2 } },
  exit: { x: -60, opacity: 0 },
  transition: { duration: 0.2 },
};
export const FadeRightAnimation = {
  initial: { x: 60, opacity: 0 },
  animate: { ...visible, transition: { duration: 0.2 } },
  exit: { x: 60, opacity: 0 },
  transition: { duration: 0.2 },
};
export const FadeUpAnimation = {
  initial: { y: 60, opacity: 0 },
  animate: { ...visible, transition: { duration: 0.2 } },
  exit: { y: 60, opacity: 0 },
  transition: { duration: 0.2 },
};
