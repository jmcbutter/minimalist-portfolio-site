import { 
  IconButton
} from '@chakra-ui/react';

import Icon from '../atoms/Icon';

import close from '../../images/icons/close';
import hamburger from '../../images/icons/hamburger';

export default function HamburgerMenuButton({isOpen, onClose, onOpen}) {
  return (
    <IconButton 
      display={{sm: 'none'}}
      size={'lg'}
      minW='0'
      aria-label={'Open Menu'}
      bg='inherit'
      _hover={{bg: 'inherit'}}
      _active={{bg:'inherit'}}
      icon={isOpen 
        ? <Icon iconObject={close} />
        : <Icon iconObject={hamburger} />
      }
      onClick={isOpen ? onClose : onOpen} 
    />
  )
}