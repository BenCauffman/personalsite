import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import geisel from "../public/images/geisel.png";
import { clickHandle } from "./types";


const Education: React.FC = () => {

  return (
    <>
      <Stack direction="row" gap="20px">
        <Image boxSize="lg" objectFit="cover" src={geisel} alt="ben" />
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
      </Stack>
    </>
  );
};

export default Education;