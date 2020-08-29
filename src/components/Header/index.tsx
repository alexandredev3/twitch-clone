import React from 'react';
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { useSwitchTheme } from '../../context/SwitchTheme';

import SwitchThemes from '../../components/SwitchThemes';

import { 
  Container, 
  Avatar, 
  OnlineStatus, 
  RightSide, 
  Button 
} from './styles';

const Header: React.FC = () => {
  const { colors } = useSwitchTheme();

  return (
    <Container>
      <Avatar colors={colors}>
        <OnlineStatus colors={colors} />
      </Avatar>

      <RightSide>
        <SwitchThemes />
        <Button>
          <MaterialIcons 
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons 
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather 
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
}

export default Header;