import { Box, Text, Flex, Divider } from "@chakra-ui/react";
import "../theme/styles.css";
import { H1 } from "../atoms/Headings";
import SocialIconStack from "../molecules/SocialIconStack";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import EmailButton from "../atoms/EmailButton";

export default function Contact(props) {
  return (
    <Box {...props} mx="auto" pos="relative">
      <Blurb mb={16} />
      <Form />
    </Box>
  );
}

function Blurb(props) {
  return (
    <Box {...props}>
      <Divider borderColor="black" opacity="0.15" mb={6} />
      <Flex flexDir={{ base: "column", lg: "row" }} gap="1.5rem">
        <H1 flex={{ lg: "1.5" }}>Get in Touch</H1>
        <Box flex="2">
          <Text mb={6}>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </Text>
          <SocialIconStack mb={8} />
        </Box>
      </Flex>
      <Divider borderColor="black" opacity="0.15" />
    </Box>
  );
}

function Form(props) {
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
          <EmailButton type="submit">Send Message</EmailButton>
        </form>
      </Box>
    </Flex>
  );
}
