import styled from 'styled-components/native';

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

const activeOpacityValue = { activeOpacity: 0.7 };

export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  padding: 8px 0 24px;
`;

export const CategoryContainer = styled.TouchableOpacity.attrs(activeOpacityValue)`
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  width: 98px;
  height: 130px;
`;

export const CategoryName = styled.Text<Props>`
  margin-top: 5px;
  max-width: 98px;
  color: ${props => props.colors.black};
  font-family: roboto_700;
  font-size: 13.5px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View<Props>`
  background: ${props => props.colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  /**Precisamos sempre colocar um border-radius na metade do width e do 
  height, para ficar redondo. */
`;

export const Info = styled.Text<Props>`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${props => props.colors.gray};
  font-family: roboto_500;
`;

