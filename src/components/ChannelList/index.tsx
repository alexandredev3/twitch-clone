import React from 'react';
import { Text } from 'react-native';

import { useSwitchTheme } from '../../context/SwitchTheme';

import { 
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle
} from './styles';

const ChannelList: React.FC = () => {
  const { colors } = useSwitchTheme();

  const ChannelItem = () => {
    return (
      <ChannelContainer>
        <LeftSide>
          <Avatar colors={colors} />
          <Column>
            <Username colors={colors} >rocketseat_oficial</Username>
            <Info colors={colors} >36 views videos</Info>
          </Column>
        </LeftSide>

        <RightSide>
          <WhiteCircle colors={colors} />
        </RightSide> 
      </ChannelContainer>
    );
  }


  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
