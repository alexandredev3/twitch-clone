import React from 'react';
import { Text } from 'react-native';

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
  const ChannelItem = () => {
    return (
      <ChannelContainer>
        <LeftSide>
          <Avatar />
          <Column>
            <Username>rocketseat_oficial</Username>
            <Info>36 views videos</Info>
          </Column>
        </LeftSide>

        <RightSide>
          <WhiteCircle />
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
