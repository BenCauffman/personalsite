import {
  Box,
  Image,
  PositionProps,
  ResponsiveValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import DetailContext from "./context";
import ben from "../public/images/site-welcome.png";
import ContactMe from "./ContactMe";
import DetailParent from "./DetailParent";
import { clickHandle, FlexDirection } from "./types";

const MainBody: React.FC = () => {
  const { active } = useContext(DetailContext);

  const getCurrentElement = (): ReactElement => {
    if (active === "Contact Me") {
      return <ContactMe />;
    } else if (active === "My Projects") {
      return <Projects />;
    } else return <AboutMe />;
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box id="main-site" width="100vw" bg="yellow">
        <DetailParent />
      </Box>
      {getCurrentElement()}
    </Box>
  );
};

export default MainBody;
