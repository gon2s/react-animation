import React, { useState } from 'react';
import * as S from './styles';
import { AnimatePresence } from 'framer-motion';

function FifthScreen() {
  const sliderArr = Array.from({ length: 10 }, (_, i) => i + 1);

  const [isToNext, setIsToNext] = useState(true);
  const [visibleIdx, setVisibleIdx] = useState(1);

  return (
    <S.Wrapper>
      <AnimatePresence>
        {sliderArr.map(li =>
          li === visibleIdx ? (
            <S.Box
              custom={isToNext}
              variants={S.boxVariant}
              initial={'initial'}
              animate={'visible'}
              exit={'leaving'}
              key={li}
              transition={{
                duration: 0.8,
                type: 'spring',
                bounce: 0.4,
              }}
            >
              {li}
            </S.Box>
          ) : null,
        )}
      </AnimatePresence>
      <S.ButtonBox>
        <S.SliderButton
          type={'button'}
          disabled={visibleIdx === 1}
          onClick={async () => {
            await setIsToNext(false);
            setVisibleIdx(prev => (prev > 1 ? prev - 1 : 1));
          }}
        >
          {'PREV'}
        </S.SliderButton>
        <S.SliderButton
          type={'button'}
          disabled={visibleIdx === 10}
          onClick={async () => {
            await setIsToNext(true);
            setVisibleIdx(prev => (prev < 10 ? prev + 1 : prev));
          }}
        >
          {'NEXT'}
        </S.SliderButton>
      </S.ButtonBox>
    </S.Wrapper>
  );
}

export default FifthScreen;
