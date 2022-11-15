import { 
  Heading,
} from '@chakra-ui/react';

export function PrimaryHeading(props) {
  return (
    <Heading {...props} fontSize='4xl' letterSpacing='tight'>
      {props.children}
    </Heading>          
  );
}

export function SecondaryHeading(props) {
  return (
    <Heading {...props} fontSize='3xl' letterSpacing='tight'>
      {props.children}
    </Heading>          
  );
}