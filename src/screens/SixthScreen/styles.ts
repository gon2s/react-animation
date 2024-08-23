import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const overlayVariants: Variants = {
  start: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  leaving: {
    opacity: 0,
  },
};

export const overlayBoxVariants: Variants = {
  click: {
    cursor: 'pointer',
    backgroundColor: '#ECDFCC',
    transition: {
      type: 'spring',
      duration: 0.4,
    },
  },
};

export const Wrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const BoxWrapper = styled.div`
  padding: 120px;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 48px;
`;

export const Box = styled(motion.div)`
  cursor: pointer;
  width: 240px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: white;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
