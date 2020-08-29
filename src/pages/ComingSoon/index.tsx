import React from 'react';
import { useSwitchTheme } from '../../context/SwitchTheme';

import { Wrapper, Heading } from './styles';

export default function ComingSoon() {
  const { colors } = useSwitchTheme();

  return (
    <Wrapper colors={colors}>
      <Heading colors={colors}>
        Coming soon...
      </Heading>
    </Wrapper>
  );
}