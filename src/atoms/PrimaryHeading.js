import { 
  Heading,
} from '@chakra-ui/react';

export default function PrimaryHeading(props) {
  return (
    <Heading {...props} fontSize='4xl' letterSpacing='tight'>
      {props.children}
    </Heading>          
  );
}