import React, { useState } from 'react';
import * as S from './styles';

function ThirdScreen() {
  return (
    <S.Wrapper>
      <S.Box variants={S.variants} whileHover={'hover'} whileTap={'click'} />
    </S.Wrapper>
  );
}

export default ThirdScreen;
