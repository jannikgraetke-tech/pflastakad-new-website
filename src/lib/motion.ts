import type { Variants } from "framer-motion";

const spring = { type: "spring", stiffness: 200, damping: 25 } as const;

/** Fade + rise — the house entrance animation. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { ...spring } },
};

/** Container that staggers its children on scroll-in. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Card entrance with subtle scale. */
export const cardIn: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { ...spring } },
};

/** Shared viewport config: animate once, trigger slightly before fully in view. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
