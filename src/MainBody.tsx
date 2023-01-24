import { Box } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

import DetailParent from "./DetailParent";

const MainBody: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box id="main-site" width="100vw" bg="yellow">
        <DetailParent />
      </Box>
      <AboutMe />
    </Box>
  );
};

export default MainBody;
