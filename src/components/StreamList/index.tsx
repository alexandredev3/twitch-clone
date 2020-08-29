import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg'

import { useSwitchTheme } from '../../context/SwitchTheme';

import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamRow,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const { colors } = useSwitchTheme();

  const StreamItem = () => {
    return (
      <StreamContainer>
        <StreamThumbnail source={streamThumbnail} />

        <StreamColumn>
          <StreamRow>
            <StreamHeader>
              <StreamAvatar colors={colors} />
              <StreamUsername colors={colors} numberOfLines={1}>alexandredev</StreamUsername>
            </StreamHeader>

            <StreamDescription colors={colors} numberOfLines={1}>
              Front-end com Next.js, Chakra UI e GraphQL
            </StreamDescription>

            <StreamCategory colors={colors} numberOfLines={1}>
              Science & Technology
            </StreamCategory>
          </StreamRow>

          <TagRow>

            <TagView colors={colors}>
              <TagText colors={colors}>Portuguese</TagText>
            </TagView>

            <TagView colors={colors}>
              <TagText colors={colors}>WebDevelopment</TagText>
            </TagView>
            
          </TagRow>
        </StreamColumn>
      </StreamContainer>
    );
  };

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
