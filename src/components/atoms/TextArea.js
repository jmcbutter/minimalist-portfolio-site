import {
  FormControl,
  Textarea as ChakraTextArea,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useState } from "react";

export default function TextArea(props) {
  const { label, placeholder, isRequired, ...restProps } = props;

  const [input, setInput] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setIsUpdated(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
  };
  const handleFocus = (e) => {
    setIsFocused(true);
  };

  const isError = input === "" && isUpdated && !isFocused;

  return (
    <FormControl isInvalid={isError} isRequired={isRequired} {...restProps}>
      <FormLabel>{label}</FormLabel>
      <ChakraTextArea
        value={input}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        py={4}
        border="none"
        borderRadius="0"
        backgroundColor="light-gray"
        focusBorderColor="slightly-desaturated-cyan"
        fontSize="0.8rem"
      />
      {isError ? (
        <FormErrorMessage>This field is required.</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}
