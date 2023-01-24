import { Box, Button, Stack, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import geisel from "../public/geisel.png";

const Education: React.FC = () => {
  return (
    <Box gap="20px">
      <Box className="boxes" bg="tomato">
        <Image className="photo" src={geisel} alt="ben" />
      </Box>
      <Stack gap="20px">
        <Text fontSize="2xl">
          {" "}
          I am a graduate of UC San Diego where I studied Cognitive Science.
          Here I gained an appreciation of how to curate user experiences
          through my understanding of the various facets of how humans make
          sense of themselves within their surroundings
        </Text>
        <Text fontSize="2xl"></Text>
      </Stack>
    </Box>
  );
};

export default Education;
