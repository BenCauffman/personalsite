import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { ReactElement, useContext } from "react";
import AboutMe from "./AboutMe";
import Interests from "./Interests";
import Projects from "./Projects";
import DetailContext from "./context";
import ben from "../public/images/site-welcome.png";
import ContactMe from "./ContactMe";

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
    <>
      {getCurrentElement()}
    </>
  );
};

export default MainBody;