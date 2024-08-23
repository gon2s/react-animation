import React from 'react';
import * as S from './styles';
import { boxVariants, circleVariants } from './styles';

function SecondScreen() {
  return (
    <S.Wrapper>
      <S.Box variants={boxVariants} initial={'start'} animate={'end'}>
        <S.BoxItem custom={1} variants={circleVariants} />
        <S.BoxItem custom={-2} variants={circleVariants} />
        <S.BoxItem custom={1} variants={circleVariants} />
        <S.BoxItem custom={-2} variants={circleVariants} />
      </S.Box>
    </S.Wrapper>
  );
}

export default SecondScreen;
