import { Box } from "@chakra-ui/react";
import AboutMe from "../../src/AboutMe";
import DetailParent from "../../src/DetailParent";

const AboutMeSection = () => {
  return (
    <Box bg="white">
      <DetailParent />
      <AboutMe />
    </Box>
  );
};

export default AboutMeSection;
