import { Box } from "@chakra-ui/react";
import { CheckIcon as ChakraCheck } from "@chakra-ui/icons";

const CheckIcon = (props) => (
  <Box
    {...props}
    bg="rgba(0,0,0,0.1)"
    display="flex"
    alignItems="center"
    justifyContent="center"
    h="48px"
    w="48px"
    m="0"
  >
    <ChakraCheck />
  </Box>
);
export default CheckIcon;
