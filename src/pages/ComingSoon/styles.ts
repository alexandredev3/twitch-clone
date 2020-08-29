import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

interface Props {
  colors: {
    primary: string;
    black: string;
    gray: string;
    tag: string;
    green: string;
    red: string;
    purple: string;
  };
}

const statusBarHeight = 
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView<Props>`
  background: ${props => props.colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  /* Estou colocando em pixel. */

  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text<Props>`
  color: ${props => props.colors.purple};
  font-family: roboto_500;
  font-size: 30px;
`;