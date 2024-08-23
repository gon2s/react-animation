import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const boxVariant: Variants = {
  initial: isGoNext => ({
    x: isGoNext ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  leaving: isGoNext => ({
    x: isGoNext ? -500 : 500,
    opacity: 0,
    scale: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    },
  }),
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const ButtonBox = styled.div`
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 24px;
`;

export const Box = styled(motion.div)`
  top: 200px;
  position: absolute;
  width: 240px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: white;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const SliderButton = styled.button<{ disabled?: boolean }>`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  background-color: white;
  box-shadow:
    0 2px 12px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: ${({ disabled }) => (!disabled ? '#e1d7b7' : 'white')};
    cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'auto')};
  }
  transition: all ease 0.3s;
`;
