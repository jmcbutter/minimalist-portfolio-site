import { Box, Flex } from "@chakra-ui/react";
import "../theme/styles.css";
import { H1 } from "../atoms/Headings";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import PrimaryButton from "../molecules/PrimaryButton";

export default function Form(props) {
  return (
    <Flex mb={20} flexDir={{ base: "column", lg: "row" }}>
      <H1 mb={6} flex={{ lg: "1.5" }}>
        Contact Me
      </H1>
      <Box flex="2">
        <form
          onSubmit={(e) => {
            console.log("Done");
            console.log(e.target);
            e.target.reset();
          }}
        >
          <TextInput
            type="text"
            label="Name"
            placeholder={"Insert your name here..."}
            isRequired
            pattern="^.{0,}$"
            mb={6}
          />
          <TextInput
            type="email"
            label="Email"
            placeholder={"Insert your email here..."}
            formatPrompt={"Emails should be in the form of email@example.com"}
            isRequired
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            mb={6}
          />
          <TextArea
            label="Message"
            placeholder={"How can I help?"}
            isRequired
            mb={6}
          />
          <PrimaryButton type="submit">Send Message</PrimaryButton>
        </form>
      </Box>
    </Flex>
  );
}
