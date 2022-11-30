import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useState } from "react";

export default function TextInput(props) {
  const {
    label,
    type,
    placeholder,
    isRequired,
    pattern,
    formatPrompt,
    ...restProps
  } = props;

  const [input, setInput] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const regex = new RegExp(pattern, "g");

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
  const isFormatError = !regex.test(input) && !isFocused && isUpdated;

  return (
    <FormControl
      isInvalid={isError || isFormatError}
      isRequired={isRequired}
      {...restProps}
    >
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
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
      {isFormatError ? (
        <FormErrorMessage>{formatPrompt}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}
