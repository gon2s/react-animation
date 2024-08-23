import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 250vh;
  background: linear-gradient(to bottom, #f6d365, #fda085, #a1c4fd, #c2e9fb);
`;

export const BoxWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
`;

export const Box = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;

export const BoxInner = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  margin-bottom: 0;
  background: linear-gradient(to bottom, #cfd9df, #e2ebf0, #f4f5f7, #bcc4d0);
`;
