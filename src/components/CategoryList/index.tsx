import React from 'react';

import data from './data';

import { useSwitchTheme } from '../../context/SwitchTheme';

import { 
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info
} from './styles';

interface ItemProps {
  item: typeof data[0];
  // Qualquer item la dentro do DATA.
}

const CategoryList: React.FC = () => {
  const { colors } = useSwitchTheme();

  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName colors={colors} numberOfLines={1}>{ item.name }</CategoryName>
      <CategoryStatus>
        <RedCircle colors={colors} />
        <Info colors={colors} >437.5K</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map((item) => {
        return <CategoryItem key={item.name} item={item} />
      })}
    </List>
  );
};

export default CategoryList;
