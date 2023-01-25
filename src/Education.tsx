import { Box, Button, Stack, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <Stack gap="20px" padding="60px">
      <Text
        marginX="200px"
        wordBreak="break-all"
        whiteSpace="pre-wrap"
        fontSize="2xl"
      >
        {" "}
        I am a graduate of UC San Diego where I studied Cognitive Science. Here
        I gained an appreciation
      </Text>
      <Text
        marginX="200px"
        wordBreak="break-all"
        whiteSpace="pre-wrap"
        fontSize="2xl"
      >
        of how to curate user experiences through my understanding of the
        various facets of how humans make sense of themselves within their
        surroundings
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
