import { Stack } from "@chakra-ui/react";
import { IconButton } from "../atoms";
import socialIcons from "../../images/icons/socialIcons";

export default function SocialIconStack(props) {
  return (
    <Stack {...props} spacing="1em" direction="row">
      {socialIcons.map((icon) => (
        <IconButton iconObject={icon} key={icon.name} boxSize={"1.5rem"} />
      ))}
    </Stack>
  );
}
