import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const variants: Variants = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    rotateZ: 90,
    transition: {
      duration: 0.8,
      type: 'spring',
      bounce: 0.5,
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
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 16px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;
