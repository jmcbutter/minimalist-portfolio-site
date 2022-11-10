import { 
  Box,
  Flex,
  Stack,
  Icon,
} from '@chakra-ui/react';

import logo from '../_images/icons/logo';
import { NavLink } from '../atoms/NavLink';
import links from '../_content/links';
import socialIcons from '../_images/icons/socialIcons';


export default function Footer(props) {
  return (
    <Box bg='grayish-dark-blue' color='white'>
      <Flex 
        py={14}
        direction={{
          base: 'column',
          md: 'row'
        }} 
        align='center' gap={10} 
        w={props.w}
        mx='auto'
      >
        <Icon viewBox={logo.viewBox} w={16} h='auto'>{logo.path}</Icon>
        <Stack 
          spacing='1.5rem' 
          direction={{base: 'column', md: 'row'}}
          flex='1'  
          textAlign={'center'}
        >
          {links.map((link) => (<NavLink key={link}>{link}</NavLink>))}
        </Stack>
        <Stack spacing='1em' direction='row'>
          {socialIcons.map(icon => 
            <Icon key={icon.name} boxSize='1.5em' viewBox={icon.viewBox}>
              {icon.path}
            </Icon>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}