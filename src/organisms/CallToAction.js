import {
  Flex,
} from '@chakra-ui/react';

import SecondaryButton from '../molecules/SecondaryButton';
import {H1} from '../atoms/Headings';

export default function CallToAction(props) {
  return (
    <Flex {...props} 
      direction={{
        base: 'column',
        md: 'row'
      }} 
      justify={'space-between'} align={'center'}
    >
      <H1 
        as='h2' 
        textAlign={{
          base: 'center',
          md: 'left',
        }} 
        maxW={{
          base: '11ch',
          md: '14ch',
        }} 
        mb={{base: 10, md: 0}}
      >
        Interested in doing a project together?
      </H1>          
      <SecondaryButton as='a' href='/contact'>Contact Me</SecondaryButton>
    </Flex>
  );
}