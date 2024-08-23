import React from 'react';
import * as S from './styles';

function FirstScreen() {
  return (
    <S.Wrapper>
      <S.Box variants={S.variants} initial={'start'} animate={'end'} />
    </S.Wrapper>
  );
}

export default FirstScreen;
