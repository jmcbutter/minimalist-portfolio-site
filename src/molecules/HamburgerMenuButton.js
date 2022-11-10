import { 
  IconButton,
  Icon
} from '@chakra-ui/react';

import close from '../_images/icons/close';
import hamburger from '../_images/icons/hamburger';

export default function NavBar(props) {
  return (
    <IconButton 
      display={{sm: 'none'}}
      size={'lg'}
      minW='0'
      aria-label={'Open Menu'}
      bg='inherit'
      _hover={{bg: 'inherit'}}
      _active={{bg:'inherit'}}
      icon={props.isOpen 
        ? <Icon viewBox={close.viewBox}>{close.path}</Icon>
        : <Icon viewBox={hamburger.viewBox}>{hamburger.path}</Icon>
      }
      onClick={props.isOpen ? props.onClose : props.onOpen} 
    />
  )
}