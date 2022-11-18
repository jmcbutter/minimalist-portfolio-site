import { 
  Heading as ChakraHeading,
} from '@chakra-ui/react';

export function H1(props) {
  return (
    <ChakraHeading 
    {...props} 
    as='h1' 
    fontSize='3rem' 
    letterSpacing='-0.028rem'
    lineHeight={1}
    >
      {props.children}
    </ChakraHeading>          
  );
}

export function H2(props) {
  return (
    <ChakraHeading 
      {...props} 
      as='h2' 
      fontSize='2.5rem' 
      letterSpacing='-0.023rem'
      lineHeight={1.05}
    >
      {props.children}
    </ChakraHeading>          
  );
}

export function H3(props) {
  return (
    <ChakraHeading 
      {...props} 
      as='h3' 
      fontSize='2rem' 
      letterSpacing='-0.018rem'
      lineHeight={1.125}
    >
      {props.children}
    </ChakraHeading>          
  );
}