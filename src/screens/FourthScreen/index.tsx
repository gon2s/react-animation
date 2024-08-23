import React from 'react';
import * as S from './styles';
import { useScroll, useTransform } from 'framer-motion';

function FourthScreen() {
  const { scrollYProgress } = useScroll();
  const scrollValue = useTransform(scrollYProgress, [0, 1], [0.5, 2]);
  const scrollInnerValue = useTransform(
    scrollYProgress,
    [0, 1],
    ['25%', '75%'],
  );

  return (
    <S.Wrapper>
      <S.BoxWrapper>
        <S.Box style={{ scale: scrollValue }}>
          <S.BoxInner style={{ height: scrollInnerValue }} />
        </S.Box>
      </S.BoxWrapper>
    </S.Wrapper>
  );
}

export default FourthScreen;
