import React, { useState } from 'react';
import * as S from './styles';
import { AnimatePresence } from 'framer-motion';

function SixthScreen() {
  const [id, setId] = useState<string>();

  const box = Array.from({ length: 4 }, (_, i) => i.toString());

  return (
    <S.Wrapper>
      <S.BoxWrapper>
        {box.map(li => (
          <S.Box
            key={li}
            layoutId={li}
            onClick={() => {
              setId(li);
            }}
          />
        ))}
      </S.BoxWrapper>
      <AnimatePresence>
        {id && (
          <S.Overlay
            onClick={() => setId(undefined)}
            variants={S.overlayVariants}
            initial={'start'}
            animate={'visible'}
            exit={'leaving'}
          >
            <S.Box
              variants={S.overlayBoxVariants}
              whileTap={'click'}
              layoutId={id}
              onClick={e => {
                e.stopPropagation();
              }}
            />
          </S.Overlay>
        )}
      </AnimatePresence>
    </S.Wrapper>
  );
}

export default SixthScreen;
