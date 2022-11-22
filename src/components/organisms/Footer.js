import { 
  Box,
  Flex,
  Icon,
} from '@chakra-ui/react';

import logo from '../../images/icons/logo';
import SocialIconStack from '../molecules/SocialIconStack';
import NavLinkStack from '../molecules/NavLinkStack';


export default function Footer(props) {
  return (
    <Box bg='grayish-dark-blue' color='white'>
      <Flex 
        py={{base: 14, md: 6}}
        direction={{base: 'column', md: 'row'}} 
        align='center' 
        gap={10} 
        w={props.w}
        mx='auto'
      >
        <Icon viewBox={logo.viewBox} w={16} h='auto'>{logo.path}</Icon>
        <NavLinkStack
          direction={{base: 'column', md: 'row'}}
          textAlign='center'
          flex='1'
        />
        <SocialIconStack />
      </Flex>
    </Box>
  );
}