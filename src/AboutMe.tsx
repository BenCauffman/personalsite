import { Box, Image, Stack, Text } from "@chakra-ui/react";
import ben from "../public/images/site-welcome.png";

const AboutMe: React.FC = () => {
  return (
    <>
      <Stack direction="row" gap="20px">
        <Image boxSize="lg" objectFit="cover" src={ben} alt="ben" />
        <Stack gap='20px'>
          <Text fontSize="2xl">
            {" "}
            I am a Full Stack developer currently working on building
            interesting and fun applications and always looking for
            inspiration for cool stuff to build! Take a look around at some of
            my projects and interests and feel free to reach out to me on any of
            the platforms provided!
          </Text>
          <Text fontSize="2xl">
            {" "}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default AboutMe;
