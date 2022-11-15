import { 
  Box,
  Text,
  Stack,
  Icon
} from '@chakra-ui/react';
import '../theme/styles.css';
import socialIcons from '../_images/icons/socialIcons';
import { PrimaryHeading } from '../atoms/PrimaryHeading';


export default function Contact(props) {
  return (
    <Box w={props.w} m="auto" pos='relative'>
      <Box mb={16}>
        <PrimaryHeading mb={6}>Get in Touch</PrimaryHeading>
        <Box>
          <Text mb={6}>
            I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.  
          </Text>
          <Stack spacing='1em' direction='row'>
            {socialIcons.map(icon => 
              <Icon key={icon.name} boxSize='1.5em' viewBox={icon.viewBox}>
                {icon.path}
              </Icon>
            )}
          </Stack>
        </Box>
      </Box>

      <Box mb={20}>
        <PrimaryHeading>Contact Me</PrimaryHeading>
      </Box>
    </Box>
  );
}