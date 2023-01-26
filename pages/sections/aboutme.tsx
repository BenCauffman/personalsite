import { Box, ResponsiveValue } from "@chakra-ui/react";
import { useContext } from "react";
import AboutMe from "../../src/AboutMe";
import DetailContext from "../../src/context";
import DetailParent from "../../src/DetailParent";
import Leftsidebar from "../../src/Leftsidebar";
import Rightsidebar from "../../src/Rightsidebar";
import { isMobile } from "react-device-detect";

const AboutMeSection: React.FC = () => {
  const { fixed } = useContext(DetailContext);
  return (
    <div>
      {isMobile ? (
        <Box>
          <DetailParent />
          <Leftsidebar fixed={fixed} />
          <AboutMe />
          <Rightsidebar fixed={fixed} />
        </Box>
      ) : (
        <Box>
          <DetailParent />
          <AboutMe />
        </Box>
      )}
    </div>
  );
};

export default AboutMeSection;
