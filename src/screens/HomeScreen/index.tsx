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
            <S.AnimationItemBox>{'CH1. ROTATE'}</S.AnimationItemBox>
          </Link>
          <Link to={'second'}>
            <S.AnimationItemBox>{'CH2. FADE'}</S.AnimationItemBox>
          </Link>
          <Link to={'third'}>
            <S.AnimationItemBox>{'CH3. GESTURE'}</S.AnimationItemBox>
          </Link>
          <Link to={'fourth'}>
            <S.AnimationItemBox>{'CH4. SCROLL'}</S.AnimationItemBox>
          </Link>
          <Link to={'fifth'}>
            <S.AnimationItemBox>{'CH5. SLIDER'}</S.AnimationItemBox>
          </Link>
          <Link to={'sixth'}>
            <S.AnimationItemBox>{'CH6. OVERLAY'}</S.AnimationItemBox>
          </Link>
        </S.AnimationBox>
        <S.Divider />
        <S.SubText>{'FARMER MOTION'}</S.SubText>
      </S.Box>
    </S.Background>
  );
}

export default HomeScreen;
