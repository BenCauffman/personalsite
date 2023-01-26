import { Box, ResponsiveValue } from "@chakra-ui/react";
import { useContext } from "react";
import AboutMe from "./AboutMe";
import DetailContext from "./context";

import DetailParent from "./DetailParent";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import { isMobile } from "react-device-detect";

const MainBody: React.FC = () => {
  const { fixed } = useContext(DetailContext);
  return (
    <div>
      {!isMobile ? (
        <Box display="flex" flexDirection="column">
          <Box id="main-site" width="100vw">
            <DetailParent />
          </Box>
          <Leftsidebar fixed={fixed} />
          <AboutMe />
          <Rightsidebar fixed={fixed} />
        </Box>
      ) : (
        <Box display="flex" flexDirection="column">
          <Box id="main-site" width="100vw">
            <DetailParent />
          </Box>
          <AboutMe />
        </Box>
      )}
    </div>
  );
};

export default MainBody;
