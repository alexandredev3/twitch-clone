import styled from 'styled-components/native';

import colors from '../../styles/colors';

const activeOpacityValue = { activeOpacity: 0.7 };

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  padding-right: 14px;
`;

export const Avatar = styled.TouchableOpacity.attrs(activeOpacityValue)`
  background: ${colors.tag};

  width: 32px;
  height: 32px;
  border-radius: 16px;
  /*
    16px porque a metade de 32px e 16(coisa de designer...)
  */ 
`;

export const OnlineStatus = styled.View`
  background: ${colors.green};

  width: 10px;
  height: 10px;
  border-radius: 10px;
  border: 2px solid ${colors.primary};

  position: absolute;
  bottom: 0;
  right: 0;
`;
 
export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`; 

export const Button = styled.TouchableOpacity.attrs(activeOpacityValue)`
  margin-left: 20px;
`;