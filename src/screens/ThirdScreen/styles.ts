import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const variants: Variants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
    backgroundColor: '#dd3cff',
  },
  click: {
    scale: 1,
    borderRadius: '50%',
  },
};

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled(motion.div)`
  cursor: pointer;
  width: 200px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;
