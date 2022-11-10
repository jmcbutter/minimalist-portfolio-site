import { Icon } from "@chakra-ui/react"

export const LogoIcon = (props) => (
  <Icon viewBox="0 0 61 32" {...props}>
    <path
      fill='currentColor'
      fillRule="evenodd" 
      d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
    />
  </Icon>
)

export const StandardIcon = (props) => (
  <Icon {...props}>
    <path 
      fill='currentColor'
      fillRule={props.fillRule}
      d={props.pathCommands}
    />
  </Icon>
)