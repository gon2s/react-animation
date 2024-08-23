import React from 'react';
import * as S from './styles';

function SecondScreen() {
  return (
    <S.Wrapper>
      <S.Box variants={S.boxVariants} initial={'start'} animate={'end'}>
        <S.BoxItem custom={1} variants={S.circleVariants} />
        <S.BoxItem custom={-2} variants={S.circleVariants} />
        <S.BoxItem custom={1} variants={S.circleVariants} />
        <S.BoxItem custom={-2} variants={S.circleVariants} />
      </S.Box>
    </S.Wrapper>
  );
}

export default SecondScreen;
