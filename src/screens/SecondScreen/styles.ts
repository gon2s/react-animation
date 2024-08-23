import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const boxVariants: Variants = {
  start: {
    scale: 0.5,
    opacity: 0,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
      bounce: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.25,
    },
  },
};

export const circleVariants: Variants = {
  start: custom => ({
    x: -60 * custom,
    opacity: 0,
  }),
  end: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.6,
    },
  },
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled(motion.div)`
  width: 120px;
  display: grid;
  place-items: center;
  padding: 18px 0;
  gap: 24px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  background: linear-gradient(120deg, #d3cbb8, #a3b8b0, #8ab3b5, #627c85);
  border-radius: 24px;
  box-shadow:
    0 12px 12px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const BoxItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: white;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const BoxItemCircle = styled(motion.div)`
  width: 50%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: white;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.2);
`;
