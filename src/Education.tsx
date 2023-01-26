import { Box, Button, Stack, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <Stack padding="20px" gap="20px">
      <Text paddingX="10px" fontSize="2xl">
        {" "}
        I went to UC San Diego where I pursued a degree in Cognitive Science
        where beyond computer science, I learned a lot about human cognition and
        physiological and sociological research that guides human-centered
        design.
      </Text>

      <Text fontSize="2xl">
        {" "}
        I am a graduate of UC San Diego where I studied Cognitive Science. Here
        I gained an appreciation of how to curate user experiences through my
        understanding of the various facets of how humans make sense of
        themselves within their surroundings
      </Text>
      <Text fontSize="2xl"></Text>
    </Stack>
  );
};

export default Education;
