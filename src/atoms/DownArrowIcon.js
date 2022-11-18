import { Box } from "@chakra-ui/react";
import Icon from "./Icon";

const downArrows = {
  viewBox: "0 0 16 14",
  path: (
    <g fill="none" fillRule="evenodd" stroke="currentColor">
      <path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/>
      <path opacity=".25" d="M0 1l8 4 8-4"/>
    </g>
  )
}


const DownArrowIcon = (props) => (
  <Box
    {...props} 
    bg='rgba(0,0,0,0.1)'
    display='flex' 
    alignItems='center' 
    justifyContent='center' 
    h='48px' 
    w='48px'
  >
    <Icon iconObject={downArrows} />
  </Box>
)
export default DownArrowIcon;