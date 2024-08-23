import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <S.Background>
      <S.Box>
        <S.TitleText>{'ANIMATION'}</S.TitleText>
        <S.Divider />
        <S.AnimationBox>
          <Link to={'first'}>
            <S.AnimationItemBox>{'ANIMATION 1'}</S.AnimationItemBox>
          </Link>
          <Link to={'second'}>
            <S.AnimationItemBox>{'ANIMATION 2'}</S.AnimationItemBox>
          </Link>
        </S.AnimationBox>
      </S.Box>
    </S.Background>
  );
}

export default HomeScreen;
