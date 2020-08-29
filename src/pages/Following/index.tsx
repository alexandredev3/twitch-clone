import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';


import { useSwitchTheme } from '../../context/SwitchTheme';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

export default function Following() {
  const { colors } = useSwitchTheme();

  const { data, indices } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true
      },
      { key: 'COMPONENT_01', render: () => <CategoryList /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true
      },
      { key: 'COMPONENT_02', render: () => <StreamList /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true
      },
      { key: 'COMPONENT_03', render: () => <StreamList /> },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true
      },
      { key: 'COMPONENT_04', render: () => <ChannelList /> }
    ]

    // Array que contem APENAS os items que são titulos.
    const indices: number[] = [];

    items.forEach((item, index) => {
      if (item.isTitle) {
        indices.push(index)
      }
      // item.isTitle && indices.push(index)
    });

    return {
      data: items,
      indices
    }
  }, []);

  // console.log(indices)
  // console.log(data)


  return (
    <Wrapper colors={colors}>
      <Container>
        <Header />

        <Main>

          <FlatList<Item> 
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}

            // Refresh Effect(Não vamos fazer um refresh de verdade porque não temos uma API)
            onRefresh={() => {}}
            refreshing={false}
          />

        </Main>
      </Container>
    </Wrapper>
  );
}