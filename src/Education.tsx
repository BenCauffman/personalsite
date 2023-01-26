import { Box, Button, Stack, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";

const Education: React.FC = () => {
  return (
    <Stack padding="20px" gap="20px">
      <Text paddingX="10px">
        {" "}
        I went to UC San Diego where I pursued a degree in Cognitive Science
        where beyond computer science, I learned a lot about human cognition and
        physiological and sociological research that guides human-centered
        design.
      </Text>

      <Text >
        {" "}
        While studying I did a year-and-a-half abroad studying an die Humboldt
        Universitaet zu Berlin where I participated in an immersion study
        learning the German language.
      </Text>
      <Text ></Text>
    </Stack>
  );
};

export default Education;
