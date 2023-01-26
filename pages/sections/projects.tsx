import { Box, ResponsiveValue } from "@chakra-ui/react";
import { useContext } from "react";
import { isMobile } from "react-device-detect";
import AboutMe from "../../src/AboutMe";
import DetailContext from "../../src/context";
import DetailParent from "../../src/DetailParent";
import Leftsidebar from "../../src/Leftsidebar";
import Projects from "../../src/Projects";
import Rightsidebar from "../../src/Rightsidebar";

const ProjectsSection: React.FC = () => {
  const { fixed } = useContext(DetailContext);
  return (
    <div>
      {!isMobile ? (
        <Box>
          <DetailParent />
          <Leftsidebar fixed={fixed} />
          <Projects />
          <Rightsidebar fixed={fixed} />
        </Box>
      ) : (
        <Box>
          <DetailParent />
          <Projects />
        </Box>
      )}
    </div>
  );
};

export default ProjectsSection;
