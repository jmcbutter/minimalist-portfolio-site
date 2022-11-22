import {
  Flex,
} from '@chakra-ui/react';

import {Link} from 'react-router-dom'
import SecondaryButton from '../molecules/SecondaryButton';
import {H2} from '../atoms/Headings';

export default function CallToAction(props) {
  return (
    <Flex 
      {...props} 
      direction={{base: 'column', md: 'row'}} 
      justify={'space-between'} align={'center'}
    >
      <H2 
        textAlign={{base: 'center', md: 'left'}} 
        maxW={{base: '11ch', md: '14ch'}} 
        mb={{base: 10, md: 0}}
      >
        Interested in doing a project together?
      </H2>          
      <SecondaryButton href='/contact'>Contact Me</SecondaryButton>
    </Flex>
  );
}