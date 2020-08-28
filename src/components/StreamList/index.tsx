import React from 'react';
import { Text } from 'react-native';

import streamThumbnail from '../../images/stream_thumbnail.jpg'

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
  const StreamItem = () => {
    return (
      <StreamContainer>
        <StreamThumbnail source={streamThumbnail} />

        <StreamColumn>
          <StreamRow>
            <StreamHeader>
              <StreamAvatar />
              <StreamUsername numberOfLines={1}>alexandredev</StreamUsername>
            </StreamHeader>

            <StreamDescription numberOfLines={1}>
              Front-end com Next.js, Chakra UI e GraphQL
            </StreamDescription>

            <StreamCategory numberOfLines={1}>
              Science & Technology
            </StreamCategory>
          </StreamRow>

          <TagRow>

            <TagView>
              <TagText>Portuguese</TagText>
            </TagView>

            <TagView>
              <TagText>WebDevelopment</TagText>
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
