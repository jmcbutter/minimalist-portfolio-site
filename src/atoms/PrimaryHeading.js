import { 
  Heading,
} from '@chakra-ui/react';

export default function PrimaryHeading(props) {
  return (
    <Heading {...props} size='2xl' letterSpacing='tight'>
      {props.children}
    </Heading>          
  );
}