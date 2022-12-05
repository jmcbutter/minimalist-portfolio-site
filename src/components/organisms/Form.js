import { Box, Flex } from "@chakra-ui/react";
import "../theme/styles.css";
import { H1 } from "../atoms/Headings";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import PrimaryButton from "../molecules/PrimaryButton";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CheckIcon from "../atoms/CheckIcon";

export default function Form(props) {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ifiv70e",
        "portfolio_contact_form",
        form.current,
        "-IaxTi70JsM7K2P_W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => console.log(error.text)
      );
  };

  return (
    <Flex mb={20} flexDir={{ base: "column", lg: "row" }}>
      <H1 mb={6} flex={{ lg: "1.5" }}>
        Contact Me
      </H1>
      <Box flex="2">
        <form ref={form} method="post" onSubmit={sendEmail} id="contact-form">
          <TextInput
            type="text"
            label="Name"
            name="from_name"
            placeholder={"Insert your name here..."}
            isRequired
            pattern="^.{0,}$"
            mb={6}
          />
          <TextInput
            type="email"
            label="Email"
            name="from_email"
            placeholder={"Insert your email here..."}
            formatPrompt={"Emails should be in the form of email@example.com"}
            isRequired
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            mb={6}
          />
          <TextArea
            label="Message"
            name="message"
            placeholder={"How can I help?"}
            isRequired
            mb={6}
          />
          {sent ? (
            <PrimaryButton
              backgroundColor="slightly-desaturated-cyan"
              leftIcon={<CheckIcon />}
              pointerEvents="none"
            >
              Sent
            </PrimaryButton>
          ) : (
            <PrimaryButton type="submit">Send Message</PrimaryButton>
          )}
        </form>
      </Box>
    </Flex>
  );
}
